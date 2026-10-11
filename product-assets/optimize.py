"""Build compact website images from the generated product PNGs."""

from pathlib import Path
from PIL import Image

root = Path(__file__).parent
site_assets = root.parent / "interactive" / "assets"

for product in ("led-strip", "cob-led-strip", "led-neon-flex"):
    destination = site_assets / product
    destination.mkdir(parents=True, exist_ok=True)
    for source in sorted((root / product / "originals").glob("*.png")):
        with Image.open(source) as image:
            output = destination / f"{source.stem}.webp"
            image.convert("RGB").save(output, "WEBP", quality=84, method=6)
            print(f"{product}/{output.name}: {image.width}x{image.height}, {output.stat().st_size:,} bytes")
