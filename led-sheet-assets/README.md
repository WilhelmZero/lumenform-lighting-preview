# LED Sheet image set

Five generated images based on the user's `sheet` reference folder. Full-resolution PNGs are in `originals/`; optimized WebP copies used by the website are in `../interactive/assets/led-sheet/`.

| Asset | Use | Reference images | Generation brief |
| --- | --- | --- | --- |
| `led-sheet-studio` | Product gallery main image | `白底.png`, `5.png` | Photoreal white flexible LED panel, ordered LED clusters and copper pads, slightly lifted corner, unlit, neutral studio backdrop. |
| `led-sheet-lit-detail` | Illuminated product detail | `白底.png`, `5.png` | Photoreal macro of the same thin panel, regular warm-white illuminated LED points, visible copper pads, charcoal studio backdrop. |
| `application-hotel-onyx` | Page hero and hospitality scene | `12.png`, `18.png` | Wide contemporary hotel lobby with an evenly backlit amber onyx wall, negative space at left for HTML copy. |
| `application-retail-green-stone` | Retail application | `14.png`, `16.png` | High-end retail space with evenly backlit emerald stone wall and display plinths. |
| `application-showroom-lightbox` | Interior application | `13.png`, `16.png` | Contemporary showroom with a smooth pale luminous wall and softly backlit stone counter. |

All prompts requested no text, logos, watermark or invented certifications. The images are conceptual visualizations, not photographs of a shipped product or verified installation. Confirm the physical product, dimensions, electrical data and installation method before using them as technical sales evidence.

Rebuild the WebP files after updating any PNG with `python led-sheet-assets/optimize.py` from the repository root.
