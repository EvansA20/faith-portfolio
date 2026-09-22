const artworks=[
 {title:'Love & Bond II',year:'2025',medium:'Oil and acrylic',category:['portraits','symbolism'],image:'assets/images/Gbadero Faith-2D-LOVE & BOND 2- Oil & Acrylic-36 X 40.jpg',description:'A meditation on acceptance, inclusion and the bonds formed when people from different backgrounds meet.'},
 {title:'Love & Bond I',year:'2025',medium:'Oil and acrylic',category:['portraits','symbolism'],image:'assets/images/LOVE & BOND 1.jpg',description:'A study of connection, affection and the strength found in human bonds.'},
 {title:'Love & Bond III',year:'2025',medium:'Oil on canvas',category:['portraits','symbolism'],image:'assets/images/Gbadero Faith- Love & Bond III - 30 by 36 Inches .jpg',description:'A continuation of Faith Gbadero’s exploration of love, unity and human connection.'},
 {title:'Echoes of the Mind II',year:'2025',medium:'Oil on canvas',category:['portraits','minimalism'],image:'assets/images/Gbadero Faith-2D-Echoes of the Mind 2-Oil- 20 X24-2025.jpg',description:'An inward-looking portrait about memory, thought and emotional presence.'},
 {title:'Iretiola',year:'2025',medium:'Oil and acrylic',category:['portraits','culture'],image:'assets/images/GBADERO FAITH-2D-IRETIOLA-Oil&Acrylic-19X23.3-2025.jpg',description:'A figurative work rooted in dignity, identity and cultural memory.'},
 {title:'African Boy II',year:'2025',medium:'Oil and acrylic',category:['portraits','culture'],image:'assets/images/GBADERO FAITH-2D-Africab Boy II-Oil&Acrylic-20X24-2025.jpg',description:'A portrait exploring youth, character and African identity.'},
 {title:'African Woman III',year:'2025',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/Gbadero Faith- African Woman III - 12 by 16inches.jpg',description:'A portrait celebrating presence, expression and the strength of African womanhood.'},
 {title:'African Woman IV',year:'2025',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/Gbadero Faith- African Woman IV - 12 by 16inches.jpg',description:'A figurative study of identity, beauty and resilience.'},
 {title:'African Woman V',year:'2025',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/Gbadero Faith- African Woman V - 12 by 16inches.jpg',description:'A portrait shaped by cultural narrative and quiet strength.'},
 {title:'Woven Identities II',year:'2026',medium:'Acrylic on canvas',category:['culture','symbolism'],image:'assets/images/FAITH GBADERO - WOVEN IDENTITIES II 12x14.jpg',description:'A symbolic portrait exploring heritage, identity and contemporary African culture.'},
 {title:'Woven Identities III',year:'2026',medium:'Acrylic on canvas',category:['culture','symbolism'],image:'assets/images/FAITH GBADERO - WOVEN IDENTITIES III 12x14.jpg',description:'A work from the Woven Identities series about culture and personal awareness.'},
 {title:'Woven Identities IV',year:'2026',medium:'Acrylic on canvas',category:['culture','symbolism'],image:'assets/images/FAITH GBADERO - WOVEN IDENTITIES IV 12x14.jpg',description:'A study of indigenous heritage and modern identity.'},
 {title:'Woven Identities VIII',year:'2026',medium:'Acrylic on canvas',category:['culture','symbolism'],image:'assets/images/FAITH GBADERO - WOVEN IDENTITIES VIII 12x14.jpg',description:'A symbolic portrait from Faith’s Woven Identities body of work.'},
 {title:'Woven Identities IX',year:'2026',medium:'Acrylic on canvas',category:['culture','symbolism'],image:'assets/images/FAITH GBADERO - WOVEN IDENTITIES IX 12x14.jpg',description:'A reflection on identity, heritage and lived experience.'},
 {title:'Escapade II',year:'2025',medium:'Acrylic on canvas',category:['portraits','minimalism'],image:'assets/images/ESCAPADE II.jpg',description:'A figurative work exploring movement, feeling and escape.'},
 {title:'Love & Bond IV',year:'2025',medium:'Oil on canvas',category:['portraits','symbolism'],image:'assets/images/Gbadero Faith- Love & Bond IV - 30 by 36 .jpg',description:'A continuation of the Love & Bond series exploring intimacy, unity and shared experience.'},
 {title:'The Weight of We',year:'2025',medium:'Acrylic on canvas',category:['portraits','symbolism'],image:'assets/images/Gbadero Faith- The Weight of We- 25 by 40 .jpg',description:'A figurative reflection on collective responsibility, connection and the weight we carry together.'},
 {title:'The African Boy V',year:'2023',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/Gbadero Faith-2D-TheAfricanBoy V-Oil-20X24-2023.jpeg',description:'A portrait exploring character, youth and African identity.'},
 {title:'The African Boy II',year:'2023',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/Gbadero Faith-2D-TheAfricanBoy2-Oil-20X24-2023.jpg',description:'A figurative study of presence, identity and lived experience.'},
 {title:'Adesewa',year:'2025',medium:'Oil on canvas',category:['portraits','culture'],image:'assets/images/GBADERO FAITH-ADESEWA-17X22.3.jpg',description:'A portrait celebrating dignity, beauty and cultural memory.'}
];
function removeBrokenImage(image){
  if(!image || image.dataset.removedBrokenImage)return;
  image.dataset.removedBrokenImage='true';
  const card=image.closest('.art-card,.studio-card,.media-item');
  if(card){card.remove();return}
  const portrait=image.closest('.portrait');
  if(portrait){portrait.closest('.about')?.classList.add('without-portrait');portrait.remove();return}
  const detail=image.closest('.detail-image');
  if(detail){detail.closest('.featured-detail')?.classList.add('without-detail-image');detail.remove();return}
  const heroArt=image.closest('.hero-art');
  if(heroArt){const hero=heroArt.closest('.hero');hero?.classList.add('without-hero-art');hero?.querySelector('.hero-index')?.remove();heroArt.remove();return}
  image.remove();
}
document.addEventListener('error',event=>{
  if(event.target instanceof HTMLImageElement)removeBrokenImage(event.target);
},true);
document.querySelectorAll('img').forEach(image=>{
  if(image.complete&&!image.naturalWidth)removeBrokenImage(image);
});
const artGrid=document.querySelector('#artGrid');
function renderWorks(filter='all'){artGrid.innerHTML='';artworks.filter(a=>filter==='all'||a.category.includes(filter)).forEach(a=>{const card=document.createElement('button');card.className='art-card';card.innerHTML=`<div class="art-image"><img src="${a.image}" alt="${a.title}" loading="lazy" /></div><h3>${a.title}</h3><p>${a.year} · ${a.medium}</p>`;card.addEventListener('click',()=>openLightbox(a));artGrid.appendChild(card)});}
renderWorks();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderWorks(btn.dataset.filter)}));
const lightbox=document.querySelector('#lightbox');
function openLightbox(a){document.querySelector('#lightboxTitle').textContent=a.title;document.querySelector('#lightboxMeta').innerHTML=a.source?`${a.year} · ${a.medium} · <a href="${a.source}" target="_blank" rel="noreferrer">View source</a>`:`${a.year} · ${a.medium}`;document.querySelector('#lightboxDescription').textContent=a.description;document.querySelector('#lightboxArt').innerHTML=`<img src="${a.image}" alt="${a.title}" />`;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.querySelector('#contactForm');form.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim();const email=document.querySelector('#email').value.trim();const subject=document.querySelector('#subject').value;const message=document.querySelector('#message').value.trim();const body=`Hello Faith,\n\nMy name is ${name}.\nVisitor email: ${email}\n\n${message}\n\nThank you,\n${name}`;window.location.href=`mailto:gbaderofaitha@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.querySelector('#year').textContent=new Date().getFullYear();
const cookieBanner=document.querySelector('#cookieBanner');const cookieName='cookie_consent';const cookieChoice=document.cookie.split('; ').find(row=>row.startsWith(`${cookieName}=`));if(!cookieChoice)cookieBanner.hidden=false;function saveCookieChoice(choice){document.cookie=`${cookieName}=${choice}; max-age=31536000; path=/; SameSite=Lax`;cookieBanner.hidden=true}document.querySelector('#acceptCookies').addEventListener('click',()=>saveCookieChoice('accepted'));document.querySelector('#rejectCookies').addEventListener('click',()=>saveCookieChoice('rejected'));
const themeToggle=document.querySelector('#themeToggle');const savedTheme=localStorage.getItem('faith-theme');if(savedTheme==='dark')document.documentElement.dataset.theme='dark';function updateThemeToggle(){const dark=document.documentElement.dataset.theme==='dark';themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');themeToggle.title=dark?'Switch to light mode':'Switch to dark mode';themeToggle.querySelector('span').textContent=dark?'☀':'☾'}updateThemeToggle();themeToggle.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('faith-theme',dark?'dark':'light');updateThemeToggle()});
const revealSections=document.querySelectorAll('.section');if('IntersectionObserver' in window){const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.12});revealSections.forEach(section=>revealObserver.observe(section))}else revealSections.forEach(section=>section.classList.add('is-visible'));
