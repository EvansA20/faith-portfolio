const artworkRoot='assets/images/optimized/';
const collectionFilters={'The Beauty We Carry':'beauty','The Boy King':'boy-king','Les Non-Dits':'les-non-dits','Iretiola':'iretiola','Flower':'flower','Echoes of the Mind':'echoes','Escapade':'escapade','Love & Bond':'love-bond','The Weight of We':'weight','Miniatures':'miniatures','African Woman':'african-woman','African Boy':'african-boy','Abstract Art':'abstract'};
const artwork=(title,collection,file)=>({title,collection,filter:collectionFilters[collection],image:`${artworkRoot}${file.replace(/\.(?:jpe?g)$/i,'.webp')}`,description:`${title}, from the ${collection} collection. Contact Faith for availability and purchase details.`});
const artworks=[
 artwork('The Beauty We Carry I','The Beauty We Carry','2026/THE BEAUTY WE CARRY I.jpg'),
 artwork('The Beauty We Carry II','The Beauty We Carry','2026/THE BEAUTY WE CARRY II.jpg'),
 artwork('The Beauty We Carry III','The Beauty We Carry','2026/THE BEAUTY WE CARRY III.jpg'),
 artwork('The Beauty We Carry IV','The Beauty We Carry','2026/THE BEAUTY WE CARRY IV.jpg'),
 artwork('The Boy King','The Boy King','2026/THE BOY KING.jpeg'),
 artwork('Les Non-Dits I','Les Non-Dits','2026/Les Non-Dits (THE UNSAID) I.jpeg'),
 artwork('Les Non-Dits II','Les Non-Dits','2026/Les Non-Dits (THE UNSAID) II.jpeg'),
 artwork('Les Non-Dits III','Les Non-Dits','2026/Les Non-Dits (THE UNSAID) III.jpeg'),
 artwork('Iretiola','Iretiola','2026/GBADERO FAITH-IRETIOLA-19X23.3INCHES.jpg'),
 artwork('Flower I','Flower','2026/IMG_3588.jpg'),
 artwork('Flower II','Flower','2026/IMG_3591.jpg'),
 artwork('Flower III','Flower','2026/IMG_3598.jpg'),
 artwork('Echoes of the Mind I','Echoes of the Mind','2026/Gbadero Faith-2D-Echoes of the Mind1-Oil -20X24-2025.jpg'),
 artwork('Echoes of the Mind II','Echoes of the Mind','2026/Gbadero Faith-2D-Echoes of the Mind 2-Oil- 20 X24-2025.jpg'),
 artwork('Escapade I','Escapade','2026/ESCAPADE I.jpg'),
 artwork('Escapade II','Escapade','2026/ESCAPADE II.jpg'),
 artwork('Love & Bond I','Love & Bond','2026/LOVE & BOND 1.jpg'),
 artwork('Love & Bond II','Love & Bond','2026/Gbadero Faith-2D-LOVE & BOND 2- Oil & Acrylic-36 X 40.jpg'),
 artwork('Love & Bond III','Love & Bond','OLD/Gbadero Faith- Love & Bond III - 30 by 36 Inches .jpg'),
 artwork('Love & Bond IV','Love & Bond','OLD/Gbadero Faith- Love & Bond IV - 30 by 36 .jpg'),
 artwork('The Weight of We','The Weight of We','OLD/Gbadero Faith- The Weight of We- 25 by 40 .jpg'),
 artwork('Woven Identities I','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES I 12x14.jpg'),
 artwork('Woven Identities II','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES II 12x14.jpg'),
 artwork('Woven Identities III','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES III 12x14.jpg'),
 artwork('Woven Identities IV','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES IV 12x14.jpg'),
 artwork('Woven Identities V','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES V 12x14.jpg'),
 artwork('Woven Identities VI','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES VI 12x14.jpg'),
 artwork('Woven Identities VII','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES VII 12x14.jpg'),
 artwork('Woven Identities VIII','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES VIII 12x14.jpg'),
 artwork('Woven Identities IX','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES IX 12x14.jpg'),
 artwork('Woven Identities X','Miniatures','MINIATURES/FAITH GBADERO - WOVEN IDENTITIES X 12x14.jpg'),
 artwork('African Woman I','African Woman','MINIATURES/Gbadero Faith- African Woman I - 12 by 16.jpg'),
 artwork('African Woman II','African Woman','MINIATURES/Gbadero Faith- African Woman II- 12 by 16.jpg'),
 artwork('African Woman III','African Woman','MINIATURES/Gbadero Faith- African Woman III - 12 by 16inches.jpg'),
 artwork('African Woman IV','African Woman','MINIATURES/Gbadero Faith- African Woman IV - 12 by 16inches.jpg'),
 artwork('African Woman V','African Woman','MINIATURES/Gbadero Faith- African Woman V - 12 by 16inches.jpg'),
 artwork('African Woman VI','African Woman','MINIATURES/Gbadero Faith- African Woman VI -  14 by 14 .jpg'),
 artwork('African Boy I','African Boy','Gbadero Faith-2D-The African Boy 1-Oil- 20X24-2023.jpg'),
 artwork('African Boy II','African Boy','OLD/Gbadero Faith-2D-TheAfricanBoy2-Oil-20X24-2023.jpg'),
 artwork('African Boy III','African Boy','Gbadero Faith-2D-TheAfricanBoy 3-Oil-20X24-2023.jpeg'),
 artwork('Abstract Art','Abstract Art','11018381-OMWVHDDG-7.jpg')
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
const collectionStatus=document.querySelector('#collectionStatus');
function renderWorks(filter='all'){
  const filteredArtworks=artworks.filter(a=>filter==='all'||a.filter===filter);
  artGrid.innerHTML='';
  filteredArtworks.forEach(a=>{const card=document.createElement('button');card.className='art-card';card.setAttribute('aria-label',`${a.title}, ${a.collection} collection. View details and purchase inquiry.`);card.innerHTML=`<div class="art-image"><img src="${a.image}" alt="${a.title}" loading="lazy" decoding="async" fetchpriority="low" /></div><h3>${a.title}</h3><p class="art-series">${a.collection}</p><p class="art-action">View &amp; inquire ↗</p>`;card.addEventListener('click',()=>openLightbox(a));artGrid.appendChild(card)});
  const selectedFilter=document.querySelector(`.collection-filters .filter[data-filter="${filter}"]`);
  if(!selectedFilter)throw new Error(`Unknown artwork collection filter: ${filter}`);
  collectionStatus.textContent=filter==='all'?`Showing all ${filteredArtworks.length} artworks.`:`Showing ${filteredArtworks.length} artwork${filteredArtworks.length===1?'':'s'} in ${selectedFilter.textContent.trim()}.`;
}
renderWorks();
const collectionFiltersButtons=document.querySelectorAll('.collection-filters .filter');
collectionFiltersButtons.forEach(btn=>btn.addEventListener('click',()=>{collectionFiltersButtons.forEach(button=>{const active=button===btn;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderWorks(btn.dataset.filter||'all')}));
const lightbox=document.querySelector('#lightbox');
let selectedArtwork=null,previousFocus=null;
function openLightbox(a){selectedArtwork=a;previousFocus=document.activeElement;document.querySelector('#lightboxTitle').textContent=a.title;document.querySelector('#lightboxMeta').textContent=`${a.collection} · Original artwork`;document.querySelector('#lightboxDescription').textContent=a.description;document.querySelector('#lightboxArt').innerHTML=`<img src="${a.image}" alt="${a.title}" loading="eager" fetchpriority="high" decoding="async" />`;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open');document.querySelector('.lightbox-close').focus()}
document.querySelector('#lightboxPurchase').addEventListener('click',()=>{if(!selectedArtwork)return;document.querySelector('#subject').value='Artwork Purchase';document.querySelector('#selectedArtwork').value=selectedArtwork.title;document.querySelector('#message').value=`I am interested in purchasing ${selectedArtwork.title} from the ${selectedArtwork.collection} collection. Please let me know if it is available, the price, and delivery details.`;closeLightbox(false);document.querySelector('#contact').scrollIntoView({behavior:'smooth'});document.querySelector('#name').focus({preventScroll:true})});
function closeLightbox(restoreFocus=true){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open');if(restoreFocus&&previousFocus instanceof HTMLElement&&previousFocus.isConnected)previousFocus.focus();previousFocus=null}
document.querySelector('.lightbox-close').addEventListener('click',()=>closeLightbox());lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();if(e.key!=='Tab'||!lightbox.classList.contains('open'))return;const focusable=lightbox.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),[tabindex]:not([tabindex="-1"])');const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const form=document.querySelector('#contactForm'),formStatus=document.querySelector('#formStatus'),formSubmitButton=form.querySelector('button[type="submit"]');form.addEventListener('submit',async event=>{event.preventDefault();if(!form.reportValidity())return;formSubmitButton.disabled=true;if(formStatus){formStatus.textContent='Sending your message…';}try{const formData=new FormData(form);formData.set('_subject',`New ${form.elements.inquiry_type.value} message - Faith Gbadero`);formData.set('_replyto',form.elements.email.value);formData.set('message',`Client name: ${form.elements.name.value.trim()}\nClient email: ${form.elements.email.value.trim()}\nInquiry type: ${form.elements.inquiry_type.value}\n\nClient message:\n${form.elements.message.value.trim()}`);const response=await fetch(form.action,{method:'POST',body:formData,headers:{Accept:'application/json'}});const result=await response.json();if(!response.ok||result.success===false||result.success==='false')throw new Error(result.message||'The email service could not accept your message.');if(formStatus){formStatus.textContent='Your message has been sent to Faith. Thank you for getting in touch!';}form.reset()}catch(error){if(formStatus){formStatus.textContent=error instanceof Error?`Your message could not be sent: ${error.message} Please try again or email gbaderofa@gmail.com directly.`:'Your message could not be sent. Please try again or email gbaderofa@gmail.com directly.'}}finally{formSubmitButton.disabled=false}});
const glow=document.querySelector('.cursor-glow');if(glow){glow.remove();}
document.querySelector('#year').textContent=new Date().getFullYear();
const cookieBanner=document.querySelector('#cookieBanner');const cookieName='cookie_consent';const cookieChoice=document.cookie.split('; ').find(row=>row.startsWith(`${cookieName}=`));if(!cookieChoice)cookieBanner.hidden=false;function saveCookieChoice(choice){document.cookie=`${cookieName}=${choice}; max-age=31536000; path=/; SameSite=Lax`;cookieBanner.hidden=true}document.querySelector('#acceptCookies').addEventListener('click',()=>saveCookieChoice('accepted'));document.querySelector('#rejectCookies').addEventListener('click',()=>saveCookieChoice('rejected'));
const themeToggle=document.querySelector('#themeToggle');const savedTheme=localStorage.getItem('faith-theme');if(savedTheme==='dark')document.documentElement.dataset.theme='dark';function updateThemeToggle(){const dark=document.documentElement.dataset.theme==='dark';themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');themeToggle.title=dark?'Switch to light mode':'Switch to dark mode';themeToggle.querySelector('span').textContent=dark?'☀':'☾'}updateThemeToggle();themeToggle.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('faith-theme',dark?'dark':'light');updateThemeToggle()});
const revealSections=document.querySelectorAll('.section');revealSections.forEach(section=>section.classList.add('is-visible'));
