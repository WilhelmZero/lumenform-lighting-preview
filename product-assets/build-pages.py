"""Build the three static product concept pages from their approved imagery."""
from html import escape
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1] / "interactive"
PRODUCTS = [
    dict(slug="led-strip", name="LED Strip", tag="FLEXIBLE LINEAR LIGHTING", title="Light the details<br>that define a space.", lead="Flexible LED tape for coves, displays and integrated architectural accents.", intro="A flexible line<br>for every detail.", intro_body="LED Strip gives project teams a versatile starting point for concealed lighting, accents and decorative lines. Review the installation profile, power and light output against the actual brief.", uses=["Coves & millwork", "Retail displays", "Stairs & wayfinding"], detail="A line built<br>point by point.", detail_body="A close view of the individual LEDs and flexible tape construction. Choose the spacing and diffusion approach for the finished light effect you need.", applications="Bring the room<br>into focus.", app_body="Explore where flexible lines can add depth, guidance and emphasis to a project.", cards=[("01 / RESIDENTIAL", "Layered living", "Contemporary living room with LED lighting integrated into shelves and ceiling details"), ("02 / RETAIL", "Display accents", "Retail display shelves illuminated by integrated LED strip"), ("03 / HOSPITALITY", "Guiding lines", "Hotel stair lighting with warm LED strip accents")], studio_alt="Coiled flexible LED strip with visible individual LED packages and copper pads", detail_alt="Close-up of warm illuminated SMD LED packages on flexible strip"),
    dict(slug="cob-led-strip", name="COB LED Strip", tag="CONTINUOUS LINEAR LIGHTING", title="A smoother line<br>of light.", lead="A continuous-looking glow for clean architectural details and refined interiors.", intro="Made for a<br>seamless impression.", intro_body="COB LED Strip creates a continuous-looking line that can sit quietly within coves, joinery and display details. Confirm the profile, diffuser and output with project samples.", uses=["Architectural coves", "Display niches", "Hospitality joinery"], detail="The glow is<br>in the detail.", detail_body="The close, even-looking illuminated surface is the visual character of COB tape. The final result depends on the selected profile, diffusion and viewing distance.", applications="Quiet light.<br>Strong presence.", app_body="See how an uninterrupted line can define materials and make spaces feel considered.", cards=[("01 / HOSPITALITY", "Lounge ambience", "Hotel lounge with soft integrated continuous-looking linear lighting"), ("02 / RETAIL", "Niche illumination", "Museum-style display niches highlighted by COB LED strip"), ("03 / INTERIORS", "Soft coves", "Hotel suite with warm continuous-looking light in ceiling and headboard details")], studio_alt="Coiled COB LED strip with a continuous phosphor light surface", detail_alt="Close-up of warm illuminated continuous-looking COB LED strip"),
    dict(slug="led-neon-flex", name="LED Neon Flex", tag="VISIBLE FLEXIBLE LIGHT", title="Draw with light.<br>Shape the night.", lead="Diffused flexible light for expressive contours, entrances and luminous features.", intro="A line you<br>want to see.", intro_body="LED Neon Flex turns a lighting element into a visible design feature. Its diffused silicone form can follow planned contours and create an expressive line in a space.", uses=["Architectural outlines", "Entrances & façades", "Sculptural features"], detail="A soft edge.<br>A strong idea.", detail_body="A close view of the illuminated diffuser and flexible form. Confirm bend direction, mounting, power and environmental suitability for the proposed installation.", applications="Make the line<br>the feature.", app_body="Explore luminous outlines and curves that give a project a memorable night-time identity.", cards=[("01 / EXTERIOR", "Entrance identity", "Hotel entrance with warm LED neon outlines on the facade"), ("02 / RETAIL", "Storefront contours", "Boutique shopfront with a continuous LED neon outline"), ("03 / HOSPITALITY", "Sculptural glow", "Hospitality lounge with flowing LED neon feature lighting")], studio_alt="Coiled unlit white silicone LED Neon Flex strip on a studio background", detail_alt="Close-up of glowing warm amber LED Neon Flex curved into a loop"),
]

TEMPLATE = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Explore {name} product imagery and architectural applications for project enquiries.">
  <title>{name} — LUMENFORM</title>
  <link rel="stylesheet" href="product-page.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="./?theme=d" aria-label="Lumenform home">LUMENFORM</a>
    <nav class="nav" aria-label="Main navigation">
      <a href="./?theme=d#catalog">Products</a><a href="./?theme=d#applications">Applications</a><a href="./?theme=d#process">OEM / ODM</a><a href="./?theme=d#contact">Enquiry</a>
    </nav>
    <a class="header-cta" href="{quote_url}">Request a Quote ↗</a>
  </header>
  <main>
    <section class="hero" aria-labelledby="hero-title">
      <img src="assets/{slug}/hero.webp" alt="{hero_alt}" fetchpriority="high">
      <div class="hero-shade"></div>
      <div class="hero-content container"><span class="eyebrow">{name_upper} / {tag}</span><h1 id="hero-title">{title}</h1><p>{lead}</p>
        <div class="hero-actions"><a class="button button-filled" href="#product">Explore the product <span aria-hidden="true">↓</span></a><a class="button button-ghost" href="{quote_url}">Discuss a project <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="hero-index container"><span>01 / {name_upper}</span><span>PRODUCT & APPLICATION CONCEPT</span></div>
    </section>
    <section class="intro section container" id="product" aria-labelledby="product-title">
      <div class="intro-copy"><span class="eyebrow dark">THE PRODUCT</span><h2 id="product-title">{intro}</h2><p>{intro_body}</p>
        <ul class="use-list" aria-label="Application ideas">{use_items}</ul>
        <a class="text-link" href="{quote_url}">Ask about a {name} project <span aria-hidden="true">↗</span></a>
      </div>
      <figure class="product-figure"><img src="assets/{slug}/studio.webp" alt="{studio_alt}" loading="lazy"><figcaption>01 / PRODUCT FORM · STUDIO CONCEPT</figcaption></figure>
    </section>
    <section class="detail section" aria-labelledby="detail-title"><div class="container detail-grid">
      <figure class="detail-figure"><img src="assets/{slug}/lit-detail.webp" alt="{detail_alt}" loading="lazy"></figure>
      <div class="detail-copy"><span class="eyebrow">LIGHT IN THE DETAILS</span><h2 id="detail-title">{detail}</h2><p>{detail_body}</p><a class="button button-ghost" href="#applications">See applications <span aria-hidden="true">↓</span></a></div>
    </div></section>
    <section class="applications section container" id="applications" aria-labelledby="applications-title">
      <div class="section-heading"><div><span class="eyebrow dark">WHERE IT WORKS</span><h2 id="applications-title">{applications}</h2></div><p>{app_body}</p></div>
      <div class="application-grid">{cards}</div>
    </section>
    <section class="closing" aria-labelledby="closing-title"><div class="container closing-grid"><div><span class="eyebrow">PROJECT ENQUIRY</span><h2 id="closing-title">Tell us what you<br>want to illuminate.</h2></div><div><p>Share the application, dimensions, environment and desired light effect so suitable product options can be discussed.</p><a class="button button-filled" href="{quote_url}">Request a Quote <span aria-hidden="true">↗</span></a></div></div></section>
  </main>
  <footer class="site-footer container"><span>LUMENFORM · {name_upper} CONCEPT</span><span>Visual concepts based on supplied reference imagery. Confirm product details before production use.</span></footer>
</body>
</html>
"""

for product in PRODUCTS:
    name = product["name"]
    cards = [("hero", *product["cards"][0]), ("application-a", *product["cards"][1]), ("application-b", *product["cards"][2])]
    card_html = "\n".join(f'<article class="application-card{" wide" if i == 0 else ""}"><img src="assets/{product["slug"]}/{file}.webp" alt="{escape(alt)}" loading="lazy"><div class="application-label"><span>{escape(kicker)}</span><h3>{escape(title)}</h3></div></article>' for i, (file, kicker, title, alt) in enumerate(cards))
    values = {key: value for key, value in product.items() if key not in ("uses", "cards")}
    values.update(name_upper=name.upper(), quote_url=f'./?theme=d&amp;product={quote(name)}#contact', hero_alt=product["cards"][0][2], use_items="".join(f"<li>{escape(item)}</li>" for item in product["uses"]), cards=card_html)
    (ROOT / f'{product["slug"]}.html').write_text(TEMPLATE.format(**values), encoding="utf-8")
    print(f'Built {product["slug"]}.html')
