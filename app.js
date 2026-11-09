// 修改這裡的作品資訊即可。圖片放到 assets/，再填 image: 'assets/檔名.jpg'
const projects = [
  {id:'exe',order:'01',category:'event',tag:'EVENT MANAGEMENT / EXE',title:'ExErcise｜跨場域活動總召',summary:'從校內展出、迪卡儂中和店合作，到兒童新樂園與放視大賞的跨場域活動延伸。',role:'校內展、迪卡儂中和店合作、放視大賞\n>活動總召\n\n兒童新樂園\n>交由其他成員擔任總召，\n  自己持續參與後台試算表架構規劃。',challenge:'同一系列互動體驗在不同場域落地，依場地、參與流程、現場人員與資料管理需求調整。',process:'負責協調活動籌備與現場執行，確保各項工作推進。\n\n放視大賞期間，負責團隊的高鐵票訂購、交通安排、費用計算與財務規劃。\n\n以試算表規劃後台資料欄位與作業架構，支援活動管理及資訊整合。\n\nAPI 串接由其他成員負責，非本人工作範圍。',result:'校內展 > 迪卡儂中和店 >\n兒童新樂園北科管院活動 > 放視大賞\n\n原有試算表後台架構\n後續亦延伸運用於兒童新樂園其他付費項目合作。',image:'assets/IMG_7430.JPG',pressImage:'assets/exe-news.jpg',pressLink:'https://emba.ntut.edu.tw/p/406-1082-153123,r718.php?Lang=zh-tw',link:'https://exercise-ntut-ixd113.vercel.app/',instagram:'https://www.instagram.com/ntut.ixd_113?psln=MTU0bWhnYTRoMmp0Yg==',timelineImages:['assets/exe-campus.jpg','assets/exe-decathlon.jpg','assets/exe-park.jpg','assets/IMG_7430.JPG'],timeline:[['01 / 校內展','擔任總召，負責活動統籌與執行協調。'],['02 / 迪卡儂中和店','與門市合作，擔任總召，協調不同場域的活動執行。'],['03 / 兒童新樂園・北科管院活動','讓其他想嘗試的成員擔任總召；\n持續參與後台試算表架構規劃。'],['04 / 放視大賞','再次擔任總召，負責展出籌備與現場協調，\n並統整團隊高鐵車票訂購、交通安排、費用計算與財務規劃。'],['05 / 後續延伸','原試算表後台架構延伸至兒童新樂園其他付費項目合作。']]},
  {id:'leader',order:'03',category:'pm',tag:'PROJECT LEADERSHIP',title:'專題組長｜團隊領導',summary:'從任務拆解到進度追蹤，協助團隊完成目標。',role:'請填寫專題名稱、組員人數與個人職責。',challenge:'請填寫專題希望解決的問題。',process:'請填寫如何規劃分工、主持討論、追蹤進度。',result:'請填寫成果、回饋或學習。',image:'',link:''},
  {id:'web1',order:'04',category:'web',tag:'WEB PROJECT 01',title:'委託網站',summary:'首次與同學合作製作網站，主要負責網站規劃、排版、動畫與內容整合。',role:'與同學共同製作；負責約 80% 的網頁規劃與製作，包含資訊架構、內容安排、版面設計與動畫效果。',challenge:'首次製作網站，需要將內容、頁面架構與視覺呈現整合為可瀏覽的線上作品。',process:'規劃網頁架構與內容層次，製作版面與動畫效果，並與合作同學協調、調整整體呈現。',result:'完成可線上瀏覽的合作網站，累積第一次網站實作及協作經驗。',image:'assets/commission-cover.png',galleryImage:'assets/commission-process.png',link:'https://samuifuyu0121.github.io/network/'},
  {id:'web2',order:'05',category:'web',tag:'WEB PROJECT 02',title:'舒潔品牌互動網站',summary:'本學期進行中的品牌互動專題，目前為初期草模，負責概念發想、網站架構，以及影片生成與剪輯。',role:'提出互動行銷核心構想、規劃網站架構，並負責專題影片生成與剪輯。網站視覺設計由其他成員負責；AI 語音生成亦由其他成員負責。',challenge:'以快閃活動排隊等待為情境，思考如何透過網頁互動遊戲連結品牌特色與參與體驗。',process:'發想互動概念與玩法方向，規劃網站資訊與互動架構，並生成及剪輯專題影片。',result:'目前為第一次草模，專案尚在製作中；非最終設計與完成版本。',image:'assets/kleenex-prototype.png',galleryImage:'assets/kleenex-prototype.png',videoCover:true,link:'https://bing-main-1.onrender.com/',video:'https://youtu.be/jj-4MS8Tu4w'},
  {id:'web3',order:'06',category:'web',tag:'WEB PROJECT 03',title:'地圖資訊網站',summary:'地圖資訊整合與介面設計。',role:'待補充實際負責範圍。',challenge:'待補充需求與目標。',process:'待補充規劃與開發過程。',result:'待補充成果與連結。',image:'',link:''},
  {id:'visual',order:'07',category:'visual',tag:'VISUAL DESIGN',title:'美術與視覺作品',summary:'以精選作品呈現視覺表現、排版與美感。',role:'請填寫你使用的工具、設計範圍。',challenge:'請填寫創作概念與設計目標。',process:'請填寫風格探索、草圖與設計迭代。',result:'請填寫完成作品與使用情境。',image:'',link:''}
];
const grid=document.querySelector('#projectGrid');const dialog=document.querySelector('#projectDialog');const dialogContent=document.querySelector('#dialogContent');
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function formatRole(p){
  if(p.id!=='exe') return `<p>${escapeHTML(p.role)}</p>`;
  return `<div class="role-lines">${p.role.split('\n\n').map(group=>{
    const lines=group.split('\n');
    return `<div class="role-group"><p class="role-heading">${escapeHTML(lines[0])}</p><blockquote class="role-quote">${escapeHTML(lines.slice(1).join('\n').replace(/^>/,''))}</blockquote></div>`;
  }).join('')}</div>`;
}
function resetProjectScroll(){
  dialog.scrollTop=0;
  dialogContent.scrollTop=0;
  const body=dialogContent.querySelector('.dialog-body');
  if(body) body.scrollTop=0;
}
let pageScrollBeforeDialog=0;
let dialogPageLocked=false;
function lockPageForDialog(){
  if(dialogPageLocked)return;
  pageScrollBeforeDialog=window.scrollY;
  document.body.style.position='fixed';
  document.body.style.top=`-${pageScrollBeforeDialog}px`;
  document.body.style.left='0';
  document.body.style.right='0';
  document.body.style.width='100%';
  dialogPageLocked=true;
}
function unlockPageForDialog(){
  if(!dialogPageLocked)return;
  document.body.style.position='';
  document.body.style.top='';
  document.body.style.left='';
  document.body.style.right='';
  document.body.style.width='';
  dialogPageLocked=false;
  const old=document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior='auto';
  window.scrollTo(0,pageScrollBeforeDialog);
  document.documentElement.style.scrollBehavior=old;
}
function showProjectAtTop(){
  lockPageForDialog();
  dialog.showModal();
  document.querySelector('#dialogClose')?.focus({preventScroll:true});
  resetProjectScroll();
  requestAnimationFrame(resetProjectScroll);
}
function render(filter='all'){grid.innerHTML=projects.filter(p=>filter==='all'||p.category===filter).map(p=>`${p.id==='exe' && filter==='event'?'<div class="event-project-entry">':''}<button class="project-card reveal visible" data-id="${p.id}" aria-label="查看${escapeHTML(p.title)}"><div class="project-art">${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} 封面" loading="lazy">`:`<div class="art-frame"><strong>＋</strong>IMAGE PLACEHOLDER</div>`}</div><div class="project-meta"><small>${p.order} / ${escapeHTML(p.tag)}</small><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><span class="arrow">VIEW PROJECT ↗</span></div></button>${p.id==='exe' && filter==='event'?`<div class="event-venue-tags" aria-label="ExErcise 活動場域"><button type="button" data-id="exe"><span>校內展</span></button><button type="button" data-id="exe"><span>迪卡儂中和店</span></button><button type="button" data-id="exe"><span>兒童新樂園</span></button><button type="button" data-id="exe"><span>放視大賞</span></button></div></div>`:''}`).join('');}
function openProject(id){const p=projects.find(x=>x.id===id);if(!p)return;if(p.shortOnly){dialogContent.innerHTML=`<div class="dialog-body chief-only"><p class="kicker">${escapeHTML(p.tag)}</p><h2>${escapeHTML(p.title)}</h2><p class="lead">${escapeHTML(p.summary)}</p></div>`;showProjectAtTop();return;}dialogContent.innerHTML=`<div class="dialog-body"><div class="dialog-hero ${p.id==='exe'?'dialog-hero-split':''}"><div class="dialog-hero-main">${p.videoCover?`<iframe class="project-video" src="https://www.youtube-nocookie.com/embed/jj-4MS8Tu4w" title="舒潔品牌互動網站｜專題影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}">`:'＋ PROJECT COVER IMAGE'}</div>${p.id==='exe'?`<figure class="dialog-hero-portrait"><img src="assets/ME.png" alt="簡廷伃於活動現場的工作照片"><figcaption>EVENT COORDINATION / 簡廷伃</figcaption></figure>`:''}</div><p class="kicker">${p.order} / ${escapeHTML(p.tag)}</p><h2>${escapeHTML(p.title)}</h2><p class="lead">${escapeHTML(p.summary)}</p>${p.id==='exe'?'<p class="current-lead">經票選後<strong>本學期也擔任專題總召</strong></p>':''}<div class="detail-grid"><div class="detail-box"><h3>MY ROLE / 我的角色</h3>${formatRole(p)}</div><div class="detail-box"><h3>CHALLENGE / 專案挑戰</h3><p>${escapeHTML(p.challenge)}</p></div><div class="detail-box"><h3>PROCESS / 執行過程</h3><p>${escapeHTML(p.process)}</p></div><div class="detail-box"><h3>RESULT / 專案成果</h3><p>${escapeHTML(p.result)}</p></div></div>${p.timeline?`<h3>EVENT JOURNEY / 活動歷程</h3><div class="case-timeline">${p.timeline.map(([title,desc])=>`<div class="case-step"><div class="case-step-text"><strong>${escapeHTML(title)}</strong><p>${escapeHTML(desc)}</p></div>${p.timelineImages?.[p.timeline.indexOf(p.timeline.find(t=>t[0]===title))]?`<img src="${escapeHTML(p.timelineImages[p.timeline.findIndex(t=>t[0]===title)])}" alt="${escapeHTML(title)} 活動紀錄" loading="lazy">`:''}</div>`).join('')}</div><p class="case-note">※ 後台工作為試算表資料架構規劃，不包含 API 開發。活動成果與角色依個人提供資料整理。</p><img class="case-photo" src="assets/MEE.png" alt="ExE 活動工作紀錄" loading="lazy">`: p.galleryImage?`<figure class="project-gallery-image"><img src="${escapeHTML(p.galleryImage)}" alt="${escapeHTML(p.title)} 專案畫面" loading="lazy"><figcaption>${p.id==='web1'?'委託網站｜網頁實作畫面':'舒潔品牌互動網站'}</figcaption></figure>`:'<div class="gallery-placeholder">＋ 專案過程照片、流程圖、成果截圖預留區</div>'}${p.pressImage?`<section class="press-feature"><div><p class="kicker">PRESS COVERAGE / 媒體報導</p><h3>兒童新樂園｜北科大管院 EMBA 聯合家庭日</h3><p>活動受媒體報導，內容提及北科大互動設計系師生在兒童新樂園展示實境互動裝置與 VR 體驗。這是整體活動的報導，並非個人專訪。</p><a class="press-link" href="${escapeHTML(p.pressLink)}" target="_blank" rel="noopener noreferrer">閱讀完整報導 ↗</a></div><a href="${escapeHTML(p.pressLink)}" target="_blank" rel="noopener noreferrer" aria-label="開啟兒童新樂園活動新聞報導"><img src="${escapeHTML(p.pressImage)}" alt="兒童新樂園活動新聞報導截圖" loading="lazy"></a></section>`:''}${p.link?`<p><a class="btn btn-dark" href="${escapeHTML(p.link)}" target="_blank" rel="noopener noreferrer">${p.id==='exe'?'EXE活動官網':p.id==='web2'?'查看網站草模':'查看網站作品'} ↗</a>${p.video?`<a class="btn btn-outline" href="${escapeHTML(p.video)}" target="_blank" rel="noopener noreferrer">觀看專題影片 ↗</a>`:''}${p.instagram?`<a class="btn btn-outline" href="${escapeHTML(p.instagram)}" target="_blank" rel="noopener noreferrer">網站卡頓？觀看 IG ↗</a>`:''}</p>`:''}</div>`;showProjectAtTop();}
render();grid.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(card)openProject(card.dataset.id)});document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');b.classList.add('active');render(b.dataset.filter)}));document.querySelector('#dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',unlockPageForDialog);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});const menu=document.querySelector('#menuToggle');menu.addEventListener('click',()=>{const open=document.querySelector('#navLinks').classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#navLinks').classList.remove('open');menu.setAttribute('aria-expanded','false')}));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));window.addEventListener('scroll',()=>{const h=document.documentElement;document.querySelector('#progress').style.width=`${100*h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)}%`},{passive:true});

// Sticker navigation: select the relevant project category after jumping.
document.querySelectorAll('[data-jump-filter]').forEach(link => {
  link.addEventListener('click', (event) => {
    if (link.dataset.jumpFilter === 'event') event.preventDefault();
    const value = link.dataset.jumpFilter;
    if (value === 'event') { openProject('exe'); return; }
    const button = document.querySelector(`.filter[data-filter="${value}"]`);
    if (button) button.click();
  });
});

// Keep contact entrance reliable on navigation and restored scroll positions.
const contactPanel=document.querySelector(".contact-panel");if(contactPanel&&"IntersectionObserver" in window){const contactWatcher=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("visible");contactWatcher.unobserve(entry.target)}}},{threshold:0.08});contactWatcher.observe(contactPanel)}

// V26: one smooth scroll only; no per-frame corrections or post-scroll jumps.
function jumpToSectionHeading(id){
  const section=document.getElementById(id);
  if(!section)return;
  const heading=section.querySelector('.section-head')||section;
  heading.classList.add('visible','nav-reveal-stable');
  const nav=document.querySelector('.nav');
  const headerHeight=nav?.getBoundingClientRect().height||76;
  // Use layout coordinates, not the animated element's viewport position.
  const sectionTop=section.getBoundingClientRect().top+window.scrollY;
  const headingOffset=parseFloat(getComputedStyle(section).paddingTop)||0;
  const target=Math.max(0,sectionTop+headingOffset-headerHeight-12);
  window.scrollTo({top:target,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}
document.querySelectorAll('a[href="#about"], a[href="#works"]').forEach(link=>{
  link.addEventListener('click',event=>{
    event.preventDefault();
    const id=link.getAttribute('href').slice(1);
    history.replaceState(null,'','#'+id);
    jumpToSectionHeading(id);
  });
});
