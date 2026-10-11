const params = new URLSearchParams(location.search);
const theme = ['d', 'e', 'f'].includes(params.get('theme')) ? params.get('theme') : 'd';
const app = document.querySelector('#app');
document.body.classList.add(`theme-${theme}`);
document.querySelectorAll('[data-theme-link]').forEach(link => {
  if (link.dataset.themeLink === theme) link.classList.add('active');
});

const sharedHeader = (items, label = 'Contact Us') => `
  <header class="site-header">
    <a class="brand" href="?theme=${theme}" aria-label="Lumenform home">LUMENFORM</a>
    <nav class="nav" aria-label="Main navigation">${items.map(([name, href]) => `<a href="${href}">${name}</a>`).join('')}</nav>
    <a class="header-cta" href="#contact">${label} ↗</a>
  </header>`;
const footer = () => `<footer class="footer container"><span>LUMENFORM · Interactive design concept</span><span>LED lighting website exploration</span></footer>`;

const pages = {
  d: `${sharedHeader([['Products','#products'],['Applications','#applications'],['OEM / ODM','#process'],['Enquiry','#contact']], 'Request a Quote')}
    <section class="hero" aria-labelledby="hero-title"><div class="hero-image"></div><div class="hero-light-image" aria-hidden="true"></div><div class="hero-light-halo" aria-hidden="true"></div><div class="container hero-content">
      <div class="eyebrow">Flexible LED solutions</div><h1 class="serif" id="hero-title">Shape light.<br>Shape what’s next.</h1>
      <p class="lead">Flexible LED lighting for architects, distributors and projects that demand more design freedom.</p>
      <div class="hero-actions"><a class="button button-solid" href="#contact">Request a Quote <span>↗</span></a><a class="button button-outline" href="#applications">See applications</a><a class="hero-text-link" href="#products">Explore in 3D ↓</a></div>
    </div></section>
    <section class="section model-section" id="products"><div class="container studio-grid">
      <div class="model-frame reveal"><canvas id="reel-canvas" aria-label="Interactive 3D LED strip reel. Drag to rotate." role="img"></canvas><span class="model-tag">Interactive product view</span><span class="model-label">Drag to rotate · Scroll to change angle</span></div>
      <div class="studio-copy reveal"><span class="eyebrow">Explore the range</span><h2 class="serif">See the light<br>from every angle.</h2><p class="lead">Rotate the reel and switch between lighting families to explore form and finish. Find a flexible solution for the line you have in mind.</p>
        <div class="product-pills" role="group" aria-label="Product family"><button class="selected" data-product="COB LED Strip">COB LED Strip</button><button data-product="LED Neon Flex">LED Neon Flex</button><button data-product="LED Strip">LED Strip</button></div>
        <p id="product-description">Seamless illumination for clean architectural lines.</p><a class="button button-outline" href="#applications">Explore applications →</a></div>
    </div></section>
    <section class="d-application-stage" id="applications" aria-labelledby="applications-title">
      <div class="d-scene-image active" data-d-image="hospitality" style="background-image:url('hero-e.png')"></div>
      <div class="d-scene-image" data-d-image="retail" style="background-image:url('retail-e.png')"></div>
      <div class="d-scene-image" data-d-image="exterior" style="background-image:url('exterior-e.png')"></div>
      <div class="d-scene-shade"></div>
      <div class="container d-application-content"><div class="d-app-copy reveal"><span class="eyebrow">Lighting in real spaces</span><h2 class="serif" id="applications-title">Make every arrival<br>feel considered.</h2><p id="d-app-description">Layered LED lighting gives hospitality interiors warmth, direction and a sense of welcome.</p><div class="d-app-products"><span>Explore for this space</span><strong id="d-app-products">COB LED Strip · LED Neon Flex</strong></div><a class="button button-solid" href="#contact">Discuss a project →</a></div>
      <div class="d-scene-nav" role="group" aria-label="Choose an application scene"><button class="active" data-d-scene="hospitality" aria-pressed="true"><span>01</span> Hospitality</button><button data-d-scene="retail" aria-pressed="false"><span>02</span> Retail</button><button data-d-scene="exterior" aria-pressed="false"><span>03</span> Exterior</button></div></div>
    </section>
    <section class="section d-catalog" id="catalog"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Product families</span><h2 class="serif">A range for every line<br>of light.</h2></div><p class="lead">Start with the application. Then compare the product family, light appearance and installation requirements.</p></div>
      <div class="d-category-grid"><article class="reveal"><span>01</span><h3>LED Strip</h3><p>Flexible lines for general and decorative applications.</p></article><article class="reveal"><span>02</span><h3>COB LED Strip</h3><p>Continuous-looking illumination for clean details.</p></article><article class="reveal"><span>03</span><h3>LED Neon Flex</h3><p>Visible, bendable luminous forms.</p></article><article class="reveal"><span>04</span><h3>LED Sheet</h3><p>Broad, even lighting for backlit surfaces.</p></article></div>
      <div class="d-catalog-cta reveal"><p>Have a specification or sourcing brief already?</p><a href="#contact">Send your requirements <span>↗</span></a></div>
    </div></section>
    <section class="section d-process" id="process"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">For project buyers</span><h2 class="serif">From idea to<br>the right product.</h2></div><p class="lead">Give your team a clear path from visual inspiration to a useful technical conversation.</p></div><div class="d-process-grid"><article class="reveal"><span>01 / Explore</span><h3>Find the right family.</h3><p>Browse lighting formats by effect and application.</p></article><article class="reveal"><span>02 / Define</span><h3>Share your requirements.</h3><p>Tell us about the environment, quantity and customization needs.</p></article><article class="reveal"><span>03 / Review</span><h3>Compare options.</h3><p>Review suitable product data and samples before ordering.</p></article></div></div></section>
    <section class="d-enquiry" id="contact"><div class="container d-enquiry-grid"><div class="d-enquiry-intro reveal"><span class="eyebrow">Project enquiry</span><h2 class="serif">Let’s make your<br>next project shine.</h2><p>Tell us what you are designing or sourcing. A clear brief helps identify suitable LED lighting options.</p><div class="d-enquiry-points"><span>Products & applications</span><span>Custom requirements</span><span>Technical documents</span></div></div>
      <form class="d-enquiry-form reveal" id="d-enquiry-form"><h3>Request a Quote</h3><p>Share a few details about your project.</p><div class="d-form-row"><label>Full name <em>*</em><input name="name" type="text" autocomplete="name" required></label><label>Work email <em>*</em><input name="email" type="email" autocomplete="email" required></label></div><div class="d-form-row"><label>Company <em>*</em><input name="company" type="text" autocomplete="organization" required></label><label>Product interest<select name="product"><option value="Not sure yet">Not sure yet</option><option>LED Strip</option><option>COB LED Strip</option><option>LED Neon Flex</option><option>LED Sheet</option></select></label></div><label>Estimated quantity or project size<input name="quantity" type="text" placeholder="Optional"></label><label>Project details <em>*</em><textarea name="details" rows="4" placeholder="Application, environment, customization needs, timeline…" required></textarea></label><button class="button button-solid" type="submit">Request a Quote →</button><small class="d-prototype-note">Preview form: no message will be sent.</small><p class="d-form-status" id="d-form-status" role="status" hidden></p></form>
    </div></section>${footer()}`,
  e: `${sharedHeader([['Products','#products'],['Applications','#applications'],['Projects','#applications'],['Resources','#products']], 'Contact Us')}
    <section class="hero" aria-labelledby="hero-title"><div class="hero-image"></div><div class="container hero-content"><span class="eyebrow">Architectural LED lighting solutions</span><h1 class="serif" id="hero-title">See space in<br>a different light.</h1><p class="lead">Explore how flexible LED lighting changes the feeling of a room, façade or retail environment.</p><a class="button button-solid" href="#applications">Explore Applications →</a></div>
      <div class="scene-controls" role="group" aria-label="Lighting scene"><button class="active" data-scene="warm">Warm</button><button data-scene="neutral">Neutral</button><button data-scene="dynamic">Dynamic</button></div>
    </section>
    <section class="section applications" id="applications"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Three environments</span><h2 class="serif">Lighting shapes<br>experience.</h2></div><p class="lead">Move the comparison handles to reveal how architectural light changes each scene.</p></div>
      <div class="application-grid"><article class="application reveal"><div class="compare-muted"></div><div class="compare-line"></div><input class="compare-range" type="range" min="5" max="95" value="50" aria-label="Compare hospitality lighting"><div class="application-copy"><h3 class="serif">Hospitality</h3><p>Create a welcoming atmosphere.</p></div><div class="compare-caption"><span>Ambient</span><span>Illuminated</span></div></article>
      <article class="application reveal"><div class="compare-muted"></div><div class="compare-line"></div><input class="compare-range" type="range" min="5" max="95" value="50" aria-label="Compare retail lighting"><div class="application-copy"><h3 class="serif">Retail</h3><p>Draw attention to every detail.</p></div><div class="compare-caption"><span>Ambient</span><span>Illuminated</span></div></article>
      <article class="application reveal"><div class="compare-muted"></div><div class="compare-line"></div><input class="compare-range" type="range" min="5" max="95" value="50" aria-label="Compare exterior lighting"><div class="application-copy"><h3 class="serif">Exterior</h3><p>Give architecture a clear night-time identity.</p></div><div class="compare-caption"><span>Ambient</span><span>Illuminated</span></div></article></div>
    </div></section>
    <section class="section product-strip" id="products"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Featured products</span><h2 class="serif">Tools for expressive spaces.</h2></div></div><div class="product-row"><article class="reveal"><h3 class="serif">LED Strip</h3><p>Flexible lines for integrated details and coves.</p></article><article class="reveal"><h3 class="serif">Neon Flex</h3><p>Continuous luminous forms for visible features.</p></article><article class="reveal"><h3 class="serif">Flexible Wall Washer</h3><p>Linear accent lighting for vertical surfaces.</p></article></div></div></section>
    <section class="closing" id="contact"><div class="container closing-flex"><div><span class="eyebrow">Bring your vision to light</span><h2 class="serif">Design with light.</h2></div><p class="lead">Work with our team to turn your lighting concept into a practical product brief.</p></div></section>${footer()}`,
  f: `${sharedHeader([['Products','#products'],['Custom Solutions','#contact'],['Resources','#steps'],['For Professionals','#result']], 'Contact Us')}
    <section class="hero" aria-labelledby="hero-title"><div class="hero-image"></div><div class="container hero-layout"><div class="hero-copy"><span class="eyebrow">Flexible LED solutions</span><h1 id="hero-title">Find the right light. <em>Faster.</em></h1><p class="lead">Select your needs, compare suitable product families and prepare a clear specification request.</p><a class="button button-solid" href="#builder">Build a specification →</a></div><div class="hero-spacer"></div>
      <form class="config-panel" id="builder"><h2>Build Your Specification</h2><p>Select your project requirements to see a suggested product family.</p>
      <label for="family">Product family</label><select id="family" name="family"><option value="auto">Suggest for me</option><option>LED Strip</option><option>COB LED Strip</option><option>Neon Flex</option><option>LED Sheet</option><option>Flexible Wall Washer</option><option>Grow Light</option></select>
      <label for="temperature">Color temperature</label><select id="temperature" name="temperature"><option value="unspecified">Not specified</option><option value="warm">Warm white</option><option value="neutral">Neutral white</option><option value="tunable">Tunable white</option><option value="rgb">Color changing</option></select>
      <label for="environment">Environment</label><select id="environment" name="environment"><option value="indoor">Indoor</option><option value="outdoor">Outdoor or wet location</option></select>
      <label for="application">Application</label><select id="application" name="application"><option value="cove">Cove or concealed line</option><option value="feature">Visible luminous feature</option><option value="surface">Wall or façade</option><option value="backlight">Backlit surface</option><option value="horticulture">Horticulture</option></select>
      <button class="button" type="submit">See suggestion →</button></form></div></section>
    <section class="steps" id="steps"><div class="container steps-grid"><article class="reveal"><span class="step-no">1</span><div><h3>Define</h3><p>Choose your application and environment.</p></div></article><article class="reveal"><span class="step-no">2</span><div><h3>Explore</h3><p>Review a suitable product family.</p></div></article><article class="reveal"><span class="step-no">3</span><div><h3>Specify</h3><p>Continue with verified product data.</p></div></article></div></section>
    <section class="section catalog" id="products"><div class="container"><div class="section-heading reveal"><div><span class="eyebrow">Product categories</span><h2>Engineered for your project.</h2></div><p class="lead">A clear catalog path supports quick sourcing and technical comparison.</p></div><div class="category-grid">${['LED Strip','COB LED Strip','Neon Flex','LED Sheet','Flexible Wall Washer','Grow Light'].map((name,i)=>`<article class="reveal"><span class="num">0${i+1}</span><h3>${name}</h3><p>Explore product options and verified technical information →</p></article>`).join('')}</div></div></section>
    <section class="result" id="result"><div class="container result-layout"><div class="reveal"><span class="eyebrow">Your direction</span><h2>From requirement<br>to solution.</h2><p>Start with a suitable product family, then confirm the details against verified product data.</p></div><div class="recommendation reveal" aria-live="polite"><small>Suggested family</small><h3 id="result-name">COB LED Strip</h3><p id="result-reason">A starting point for a smooth concealed line of light. Confirm the exact specifications with product data.</p><a class="button button-solid" href="#contact">Continue to enquiry →</a></div></div></section>
    <section class="closing" id="contact"><div class="container closing-flex"><div><span class="eyebrow">OEM / Customization</span><h2>Built around your brief.</h2></div><p class="lead">Share your requirements and explore options for a custom LED solution.</p></div></section>${footer()}`
};
app.innerHTML = pages[theme];

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

let scrollScheduled = false;
function onScroll() {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    document.querySelector('.scroll-progress').style.width = `${(scrollY / max) * 100}%`;
    if (!reducedMotion) {
      const hero = document.querySelector('.hero');
      const progress = Math.min(1, scrollY / Math.max(1, hero.offsetHeight));
      hero.style.setProperty('--scroll-scale', `${progress * .11}`);
      const applicationStage = document.querySelector('.d-application-stage');
      if (applicationStage) {
        const bounds = applicationStage.getBoundingClientRect();
        const offset = Math.max(-22, Math.min(22, (innerHeight / 2 - bounds.top - bounds.height / 2) * .055));
        applicationStage.style.setProperty('--scene-offset', `${offset}px`);
      }
    }
    scrollScheduled = false;
  });
}
addEventListener('scroll', onScroll, {passive:true});
onScroll();

if (theme === 'e') {
  const hero = document.querySelector('.hero');
  const filters = {warm:'sepia(.15) saturate(1.12)',neutral:'saturate(.68) brightness(1.1) hue-rotate(7deg)',dynamic:'saturate(1.36) hue-rotate(172deg) contrast(1.04)'};
  document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-scene]').forEach(b => b.classList.toggle('active', b === button));
    hero.style.setProperty('--scene-filter', filters[button.dataset.scene]);
  }));
  document.querySelectorAll('.compare-range').forEach(range => {
    const card = range.closest('.application');
    const update = () => card.style.setProperty('--split', `${range.value}%`);
    range.addEventListener('input', update);
    update();
  });
}

if (theme === 'f') {
  const hero = document.querySelector('.hero');
  hero.addEventListener('pointermove', event => {
    if (reducedMotion || event.pointerType === 'touch') return;
    const box = hero.getBoundingClientRect();
    hero.style.setProperty('--tilt-x', `${((event.clientY-box.top)/box.height-.5)*-2}deg`);
    hero.style.setProperty('--tilt-y', `${((event.clientX-box.left)/box.width-.5)*2}deg`);
  });
  hero.addEventListener('pointerleave', () => {hero.style.setProperty('--tilt-x','0deg');hero.style.setProperty('--tilt-y','0deg')});
  document.querySelector('#builder').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const application = data.get('application');
    const chosen = data.get('family');
    const suggestions = {cove:'COB LED Strip',feature:'Neon Flex',surface:'Flexible Wall Washer',backlight:'LED Sheet',horticulture:'Grow Light'};
    const reasons = {cove:'A starting point for a smooth concealed line of light.',feature:'A starting point for a visible continuous light feature.',surface:'A starting point for lighting walls and architectural surfaces.',backlight:'A starting point for broad, even backlighting.',horticulture:'A starting point for a horticulture lighting project.'};
    const name = chosen === 'auto' ? suggestions[application] : chosen;
    document.querySelector('#result-name').textContent = name;
    const temperature = {unspecified:'color temperature to confirm',warm:'warm white',neutral:'neutral white',tunable:'tunable white',rgb:'color changing'}[data.get('temperature')];
    const environment = data.get('environment') === 'outdoor' ? 'outdoor or wet location' : 'indoor';
    const rationale = chosen === 'auto' ? reasons[application] : 'This is the product family you selected.';
    document.querySelector('#result-reason').textContent = `${rationale} Your brief: ${temperature}, ${environment}. Confirm exact specifications and suitability with product data.`;
    document.querySelector('#result').scrollIntoView({behavior: reducedMotion ? 'instant' : 'smooth'});
  });
}

if (theme === 'd') {
  const hero = document.querySelector('.hero');
  let lightFrame = 0;
  let lightX = 0;
  let lightY = 0;
  hero.addEventListener('pointermove', event => {
    if (reducedMotion || event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect();
    lightX = event.clientX - bounds.left;
    lightY = event.clientY - bounds.top;
    hero.classList.add('light-active');
    if (lightFrame) return;
    lightFrame = requestAnimationFrame(() => {
      hero.style.setProperty('--spot-x', `${lightX}px`);
      hero.style.setProperty('--spot-y', `${lightY}px`);
      lightFrame = 0;
    });
  });
  hero.addEventListener('pointerleave', () => hero.classList.remove('light-active'));
  const applicationScenes = {
    hospitality: {title:'Make every arrival<br>feel considered.',description:'Layered LED lighting gives hospitality interiors warmth, direction and a sense of welcome.',products:'COB LED Strip · LED Neon Flex'},
    retail: {title:'Make every detail<br>worth discovering.',description:'Integrated lines of light guide attention through display areas and showcase materials.',products:'LED Strip · LED Sheet'},
    exterior: {title:'Give architecture<br>a night-time identity.',description:'Linear light draws out façades, edges and entrances after dark.',products:'LED Neon Flex · LED Strip'}
  };
  document.querySelectorAll('[data-d-scene]').forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.dScene;
    document.querySelectorAll('[data-d-scene]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-d-image]').forEach(image => image.classList.toggle('active', image.dataset.dImage === key));
    document.querySelector('#applications-title').innerHTML = applicationScenes[key].title;
    document.querySelector('#d-app-description').textContent = applicationScenes[key].description;
    document.querySelector('#d-app-products').textContent = applicationScenes[key].products;
  }));
  document.querySelectorAll('.d-category-grid article').forEach(article => {
    const product = article.querySelector('h3').textContent;
    if (product === 'LED Sheet') {
      const detailLink = document.createElement('a');
      detailLink.href = 'led-sheet.html';
      detailLink.textContent = 'View LED Sheet →';
      detailLink.className = 'd-detail-link';
      article.append(detailLink);
    }
    const link = document.createElement('a');
    link.href = '#contact';
    link.textContent = 'Enquire about this →';
    link.addEventListener('click', () => {
      document.querySelector('#d-enquiry-form select[name="product"]').value = product;
      document.querySelector('#d-form-status').hidden = true;
    });
    article.append(link);
  });
  const requestedProduct = params.get('product');
  const productSelect = document.querySelector('#d-enquiry-form select[name="product"]');
  if (requestedProduct && [...productSelect.options].some(option => option.value === requestedProduct)) {
    productSelect.value = requestedProduct;
    if (location.hash === '#contact') requestAnimationFrame(() => document.querySelector('#contact').scrollIntoView());
  }
  document.querySelector('#d-enquiry-form').addEventListener('submit', event => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const status = document.querySelector('#d-form-status');
    status.hidden = false;
    status.textContent = `Enquiry preview prepared for ${details.get('company')} (${details.get('product')}). No message was sent from this demo.`;
  });
  const descriptions = {'COB LED Strip':'Seamless illumination for clean architectural lines.','LED Neon Flex':'A luminous flexible form for visible features.','LED Strip':'Flexible illumination for general and decorative applications.'};
  const colors = {'COB LED Strip':'#ffbd71','LED Neon Flex':'#e8f0ff','LED Strip':'#ffd8a1'};
  let active = 'COB LED Strip';
  document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
    active = button.dataset.product;
    document.querySelectorAll('[data-product]').forEach(b => b.classList.toggle('selected', b === button));
    document.querySelector('#product-description').textContent = descriptions[active];
    draw();
  }));
  const canvas = document.querySelector('#reel-canvas');
  const context = canvas.getContext('2d');
  let rotX = -.22, rotY = -.65, dragging = false, lastX = 0, lastY = 0;
  function sizeCanvas() {
    const dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = Math.round(canvas.clientWidth*dpr);
    canvas.height = Math.round(canvas.clientHeight*dpr);
    context.setTransform(dpr,0,0,dpr,0,0);
    draw();
  }
  function project(x,y,z) {
    const cy = Math.cos(rotY), sy = Math.sin(rotY), cx = Math.cos(rotX), sx = Math.sin(rotX);
    const x1=x*cy+z*sy, z1=-x*sy+z*cy;
    const y2=y*cx-z1*sx, z2=y*sx+z1*cx;
    const scale=Math.min(canvas.clientWidth,canvas.clientHeight)*.255*4/(4-z2);
    return {x:canvas.clientWidth/2+x1*scale,y:canvas.clientHeight/2+y2*scale,z:z2,scale};
  }
  function poly(points,fill) {
    context.beginPath();context.moveTo(points[0].x,points[0].y);
    for(let i=1;i<points.length;i++)context.lineTo(points[i].x,points[i].y);
    context.closePath();context.fillStyle=fill;context.fill();
  }
  function draw() {
    const w=canvas.clientWidth,h=canvas.clientHeight;
    if(!w||!h)return;
    context.clearRect(0,0,w,h);
    const faces=[],n=64,outer=1.3,inner=.66,zFront=.23,zBack=-.23;
    for(let i=0;i<n;i++){
      const a=i*2*Math.PI/n,b=(i+1)*2*Math.PI/n;
      const pt=(r,t,z)=>project(Math.cos(t)*r,Math.sin(t)*r,z);
      const add=(v,fill)=>faces.push({v,depth:v.reduce((s,p)=>s+p.z,0)/v.length,fill});
      add([pt(outer,a,zBack),pt(outer,b,zBack),pt(inner,b,zBack),pt(inner,a,zBack)],'#101115');
      add([pt(outer,a,zFront),pt(outer,b,zFront),pt(inner,b,zFront),pt(inner,a,zFront)],i%8===0?'#252329':'#18171b');
      add([pt(outer,a,zBack),pt(outer,b,zBack),pt(outer,b,zFront),pt(outer,a,zFront)],'#292328');
      add([pt(inner,a,zBack),pt(inner,b,zBack),pt(inner,b,zFront),pt(inner,a,zFront)],'#0d0c10');
    }
    faces.sort((a,b)=>a.depth-b.depth).forEach(f=>poly(f.v,f.fill));
    const light=colors[active];
    context.save();context.shadowColor=light;context.shadowBlur=18;
    for(let i=0;i<40;i++){
      const a=i*2*Math.PI/40,p=project(Math.cos(a)*.99,Math.sin(a)*.99,.245);
      if(p.z<-.15)continue;
      context.beginPath();context.arc(p.x,p.y,Math.max(2,p.scale*.025),0,Math.PI*2);context.fillStyle=light;context.fill();
    }
    context.restore();
    const hub=project(0,0,.26);context.beginPath();context.arc(hub.x,hub.y,Math.min(w,h)*.055,0,Math.PI*2);context.fillStyle='#0b0b0d';context.fill();context.strokeStyle='#51484a';context.lineWidth=3;context.stroke();
  }
  canvas.addEventListener('pointerdown', e => {dragging=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId)});
  canvas.addEventListener('pointermove', e => {if(!dragging)return;rotY+=(e.clientX-lastX)*.008;rotX=Math.max(-1.1,Math.min(1.1,rotX+(e.clientY-lastY)*.008));lastX=e.clientX;lastY=e.clientY;draw()});
  canvas.addEventListener('pointerup',()=>dragging=false);
  canvas.addEventListener('pointercancel',()=>dragging=false);
  addEventListener('resize',sizeCanvas);
  sizeCanvas();
  let lastScroll=scrollY;
  addEventListener('scroll',()=>{if(reducedMotion||dragging)return;const change=scrollY-lastScroll;lastScroll=scrollY;if(Math.abs(change)<150){rotY+=change*.0005;draw()}},{passive:true});
}
