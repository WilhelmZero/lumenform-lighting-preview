"""Create compact web images from the full-resolution LED Sheet artwork."""

from pathlib import Path
from PIL import Image

root = Path(__file__).parent
source = root / "originals"
destination = root.parent / "interactive" / "assets" / "led-sheet"
destination.mkdir(parents=True, exist_ok=True)

for image_path in source.glob("*.png"):
    with Image.open(image_path) as image:
        output = destination / f"{image_path.stem}.webp"
        image.convert("RGB").save(output, "WEBP", quality=85, method=6)
        print(f"{output.name}: {image.width}x{image.height}, {output.stat().st_size:,} bytes")
