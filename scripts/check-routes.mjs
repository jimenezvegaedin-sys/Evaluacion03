import { spawn } from "node:child_process";
import assert from "node:assert/strict";

const port = 3100;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port), "--hostname", "127.0.0.1"], { stdio: "inherit" });
const rutas = ["/", "/nosotros", "/servicios", "/productos", "/marcas", "/contacto", "/productos/disco-de-embrague", "/productos/pinon-y-corona", "/productos/plato-de-embrague", "/productos/pastillas-de-freno", "/productos/eje-de-transmision", "/productos/kit-de-embrague"];

try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(origin)).ok) { ready = true; break; } } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  assert.ok(ready, "El servidor de producción debe iniciar");
  const titles = new Set();
  const descriptions = new Set();
  for (const ruta of rutas) {
    const response = await fetch(origin + ruta);
    const html = await response.text();
    assert.equal(response.status, 200, ruta);
    assert.match(html, /<h1[ >]/, `${ruta}: h1`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
    assert.ok(title && description, `${ruta}: metadata completa`);
    assert.ok(!titles.has(title), `${ruta}: título único`);
    assert.ok(!descriptions.has(description), `${ruta}: descripción única`);
    titles.add(title);
    descriptions.add(description);
    console.log(`PASS 200 ${ruta} | ${title}`);
  }
  for (const ruta of ["/ruta-inexistente", "/productos/slug-invalido"]) {
    const response = await fetch(origin + ruta);
    const html = await response.text();
    assert.equal(response.status, 404, ruta);
    assert.match(html, /No encontramos esta página/);
    console.log(`PASS 404 ${ruta} | contenido personalizado`);
  }
  console.log("RESULTADO: 12 rutas válidas con metadata única y 2 rutas 404 verificadas en producción.");
} finally {
  server.kill();
}
