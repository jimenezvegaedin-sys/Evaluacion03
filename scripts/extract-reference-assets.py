"""Extrae recursos visuales del anexo local. NO genera evidencias de ejecución.

Requiere Python y Pillow: python -m pip install pillow
El DOCX original no se publica. Las coordenadas corresponden a sus capturas.
"""
from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)
ASSETS = [
    ("image4.png", "logo-ikomi", (143, 103, 405, 153)),
    ("image4.png", "hero-repuestos", (0, 175, 740, 770)),
    ("image5.png", "equipo", (222, 219, 510, 447)),
    ("image5.png", "almacen", (584, 219, 873, 447)),
    ("image5.png", "tienda", (947, 219, 1234, 447)),
    ("image5.png", "empresa", (222, 572, 510, 758)),
    ("image7.png", "disco-embrague", (270, 302, 555, 511)),
    ("image7.png", "pinon-corona", (574, 302, 871, 511)),
    ("image7.png", "plato-embrague", (901, 302, 1194, 511)),
    ("image7.png", "pastillas-freno", (275, 532, 548, 772)),
    ("image7.png", "eje-transmision", (600, 532, 852, 772)),
    ("image7.png", "kit-embrague", (908, 532, 1195, 772)),
    ("image8.png", "marca-sangsin", (319, 354, 471, 389)),
    ("image8.png", "marca-hansang", (660, 354, 785, 405)),
    ("image8.png", "marca-mando", (988, 354, 1127, 403)),
    ("image8.png", "marca-tcic", (319, 667, 461, 734)),
    ("image8.png", "marca-valeo", (653, 668, 797, 722)),
    ("image8.png", "marca-yulim", (983, 669, 1128, 722)),
]
with ZipFile(ROOT / "EC03-S12-JVENTURA-2026-02.docx") as archive:
    for source, name, box in ASSETS:
        image = Image.open(BytesIO(archive.read("word/media/" + source)))
        cropped = image.crop(box).convert("RGB")
        cropped.save(OUT / (name + ".webp"), "WEBP", quality=92)
        print(name, cropped.size)
