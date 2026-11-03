import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { writeFileSync } from "node:fs";

const rutas = ["/", "/nosotros", "/servicios", "/productos", "/marcas", "/contacto"];

for (const width of [375, 768, 1280]) {
  test(`páginas y capturas responsive a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const ruta of rutas) {
      const response = await page.goto(ruta);
      expect(response?.status()).toBe(200);
      await expect(page.locator("main h1")).toHaveCount(1);
      await expect(page.locator("footer")).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      for (const image of await page.locator("main img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toHaveJSProperty("complete", true);
        expect(await image.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
      }
      if (ruta === "/" || ruta === "/productos") {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.screenshot({ path: `evidencias/${ruta === "/" ? "inicio" : "productos"}-${width}.png`, fullPage: true });
      }
    }
    expect(errors).toEqual([]);
  });
}

test("menú móvil, navegación y enlace activo en detalle", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Abrir menú" });
  await expect(page.getByRole("navigation", { name: "Navegación principal" })).toBeHidden();
  await menu.click();
  await expect(page.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("navigation", { name: "Navegación principal" }).getByRole("link", { name: "Productos", exact: true }).click();
  await expect(page).toHaveURL(/\/productos$/);
  await expect(page.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
  await page.locator("main article").first().getByRole("link").click();
  await expect(page).toHaveURL(/\/productos\/disco-de-embrague$/);
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await expect(page.locator('nav a[aria-current="page"]')).toHaveText("Productos");
  await expect(page.locator('nav a[aria-current="page"]')).toHaveCount(1);
});

test("filtros de categorías y restauración del catálogo", async ({ page }) => {
  await page.goto("/productos");
  await expect(page.locator("main article")).toHaveCount(6);
  await page.getByRole("button", { name: "Frenos", exact: true }).click();
  await expect(page.locator("main article")).toHaveCount(1);
  await expect(page.locator("main article h2")).toHaveText("Pastillas de freno");
  await page.getByRole("button", { name: "Embrague", exact: true }).click();
  await expect(page.locator("main article")).toHaveCount(3);
  await page.getByRole("button", { name: "Todas las categorías", exact: true }).click();
  await expect(page.locator("main article")).toHaveCount(6);
});

test("formulario valida y descarta confirmación al editar", async ({ page }) => {
  await page.goto("/contacto");
  await page.getByRole("button", { name: "Revisar mensaje" }).click();
  await expect(page.getByRole("status")).toHaveCount(0);
  await page.getByLabel("Apellidos y nombres").fill("Prueba académica");
  await page.getByLabel("Teléfono", { exact: true }).fill("999999999");
  await page.getByLabel("Correo electrónico").fill("prueba@example.com");
  await page.getByLabel("Asunto").fill("Consulta de demostración");
  await page.getByLabel("Mensaje", { exact: true }).fill("Datos ficticios para verificar únicamente la interfaz.");
  await page.getByRole("button", { name: "Revisar mensaje" }).click();
  await expect(page.getByRole("status")).toContainText("no ha enviado ningún mensaje");
  await page.getByLabel("Apellidos y nombres").fill("");
  if (await page.getByRole("status").count()) {
    writeFileSync("evidencias/formulario-estado-inicial.json", JSON.stringify({ caso: "Confirmación obsoleta después de editar", nombreVacio: true, mensajeVisible: await page.getByRole("status").textContent() }, null, 2));
  }
  await expect(page.getByRole("status")).toHaveCount(0);
});

test("contraste y accesibilidad automatizada en páginas principales", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  const hallazgos = [];
  for (const ruta of ["/", "/productos", "/contacto"]) {
    await page.goto(ruta);
    const result = await new AxeBuilder({ page }).exclude("iframe").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    for (const violation of result.violations) {
      hallazgos.push({ ruta, regla: violation.id, impacto: violation.impact, nodos: violation.nodes.map((node) => ({ html: node.html, detalle: node.failureSummary })) });
    }
  }
  if (hallazgos.length) writeFileSync("evidencias/accesibilidad-inicial.json", JSON.stringify(hallazgos, null, 2));
  expect(hallazgos).toEqual([]);
});
