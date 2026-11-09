// 修改這裡的作品資訊即可。圖片放到 assets/，再填 image: 'assets/檔名.jpg'
const projects = [
  {id:'exe',order:'01',category:'event',tag:'EVENT MANAGEMENT / EXE',title:'ExErcise｜跨場域活動總召',summary:'從校內展出、迪卡儂中和店合作，到兒童新樂園與放視大賞的跨場域活動延伸。',role:'校內展、迪卡儂中和店合作、放視大賞\n>活動總召\n\n兒童新樂園\n>交由其他成員擔任總召，\n  自己持續參與後台試算表架構規劃。',challenge:'同一系列互動體驗在不同場域落地，依場地、參與流程、現場人員與資料管理需求調整。',process:'負責協調活動籌備與現場執行，確保各項工作推進。\n\n放視大賞期間，負責團隊的高鐵票訂購、交通安排、費用計算與財務規劃。\n\n以試算表規劃後台資料欄位與作業架構，支援活動管理及資訊整合。\n\nAPI 串接由其他成員負責，非本人工作範圍。',result:'校內展 > 迪卡儂中和店 >\n兒童新樂園北科管院活動 > 放視大賞\n\n原有試算表後台架構\n後續亦延伸運用於兒童新樂園其他付費項目合作。',image:'assets/exe-new-cover.png',pressImage:'assets/exe-news.jpg',pressLink:'https://emba.ntut.edu.tw/p/406-1082-153123,r718.php?Lang=zh-tw',link:'https://exercise-ntut-ixd113.vercel.app/',instagram:'https://www.instagram.com/ntut.ixd_113?psln=MTU0bWhnYTRoMmp0Yg==',timelineImages:['assets/exe-campus.jpg','assets/exe-decathlon.jpg','assets/exe-park.jpg','assets/IMG_7430.JPG'],timeline:[['01 / 校內展','擔任總召，負責活動統籌與執行協調。'],['02 / 迪卡儂中和店','與門市合作，擔任總召，協調不同場域的活動執行。'],['03 / 兒童新樂園・北科管院活動','讓其他想嘗試的成員擔任總召；\n持續參與後台試算表架構規劃。'],['04 / 放視大賞','再次擔任總召，負責展出籌備與現場協調，\n並統整團隊高鐵車票訂購、交通安排、費用計算與財務規劃。'],['05 / 後續延伸','原試算表後台架構延伸至兒童新樂園其他付費項目合作。']]},
  {id:'leader',order:'02',category:'pm',tag:'PROJECT LEADERSHIP',title:'專題經歷｜學期時間軸',summary:'從大一到大三，持續擔任專題組長，負責規劃、整合與執行協調。點開查看完整時間軸。',role:'專題組長',challenge:'跨領域溝通與專案管理',process:'需求整合、進度追蹤與問題排查',result:'專題實務經驗',image:'assets/stop-pushin-me.png',link:'',timelineOnly:true},
  {id:'web1',order:'03',category:'web',tag:'WEB PROJECT 01',title:'委託網站',summary:'首次與同學合作製作網站，主要負責網站規劃、排版、動畫與內容整合。',role:'與同學共同製作；負責約 80% 的網頁規劃與製作，包含資訊架構、內容安排、版面設計與動畫效果。',challenge:'首次製作網站，需要將內容、頁面架構與視覺呈現整合為可瀏覽的線上作品。',process:'規劃網頁架構與內容層次，製作版面與動畫效果，並與合作同學協調、調整整體呈現。',result:'完成可線上瀏覽的合作網站，累積第一次網站實作及協作經驗。',image:'assets/commission-cover.png',galleryImage:'assets/commission-process.png',link:'https://samuifuyu0121.github.io/network/'},
  {id:'web2',order:'04',category:'web',tag:'WEB PROJECT 02',title:'舒潔品牌互動網站',summary:'本學期進行中的品牌互動專題，目前為初期草模，負責概念發想、網站架構，以及影片生成與剪輯。',role:'提出互動行銷核心構想、規劃網站架構，並負責專題影片生成與剪輯。網站視覺設計由其他成員負責；AI 語音生成亦由其他成員負責。',challenge:'以快閃活動排隊等待為情境，思考如何透過網頁互動遊戲連結品牌特色與參與體驗。',process:'發想互動概念與玩法方向，規劃網站資訊與互動架構，並生成及剪輯專題影片。',result:'目前為第一次草模，專案尚在製作中；非最終設計與完成版本。',image:'assets/kleenex-prototype.png',galleryImage:'assets/kleenex-prototype.png',videoCover:true,link:'https://bing-main-1.onrender.com/',video:'https://youtu.be/jj-4MS8Tu4w'},
  {id:'web3',order:'05',category:'web',tag:'WEB PROJECT 03 / DATA VISUALIZATION',title:'臺北市音樂展演場館活動地圖',summary:'整合臺北市展演場館資料，以 3D 互動地圖與三種統計圖表呈現活動資訊。',role:'獨立負責專案構想、資料蒐集與統計、網站資訊架構、介面排版、地圖互動及三種圖表規劃與製作。程式碼透過與 AI 溝通協作產出及調整，由我負責需求定義、整合與測試。',challenge:'將不同場館及活動的資料整理成容易查詢、理解與比較的互動資訊介面。',process:'蒐集並整理展演場館與活動資料，規劃 3D 地圖、場館資訊、日曆及三種統計圖表；以 AI 輔助程式開發，反覆描述需求、測試功能並修正介面與互動。',result:'完成可線上瀏覽的互動地圖資訊網站，並製作操作示範影片。',image:'assets/taipei-dashboard.png',galleryImage:'assets/taipei-dashboard.png',link:'https://samuifuyu0121.github.io/taipei/taipei.html',video:'https://youtu.be/34-Ki9UFDd0'},
  {id:'visual',order:'06',category:'visual',tag:'VISUAL DESIGN',title:'美術與視覺作品',summary:'以精選作品呈現視覺表現、排版與美感。',role:'請填寫你使用的工具、設計範圍。',challenge:'請填寫創作概念與設計目標。',process:'請填寫風格探索、草圖與設計迭代。',result:'請填寫完成作品與使用情境。',image:'assets/26字母-01.png',link:''}
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
  if(!dialog.open)dialog.showModal();
  document.querySelector('#dialogClose')?.focus({preventScroll:true});
  resetProjectScroll();
  requestAnimationFrame(resetProjectScroll);
}
function render(filter='all'){grid.innerHTML=projects.filter(p=>filter==='all'||p.category===filter).map(p=>`${(p.id==='exe' && filter==='event')||(p.id==='leader' && filter==='pm')?'<div class="event-project-entry">':''}<button class="project-card reveal visible" data-id="${p.id}" aria-label="查看${escapeHTML(p.title)}"><div class="project-art">${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)} 封面" loading="lazy">`:`<div class="art-frame"><strong>＋</strong>IMAGE PLACEHOLDER</div>`}</div><div class="project-meta"><small>${p.order} / ${escapeHTML(p.tag)}</small><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><span class="arrow">VIEW PROJECT ↗</span></div></button>${p.id==='leader' && filter==='pm'?`<div class="event-venue-tags semester-side-tags" aria-label="專題時間軸快速選擇">${['人生規劃－亞洲難度','心有靈昔一點通','ExErcise｜跨場域活動','Stop Pushin’ Me','舒潔 水啦'].map((label,i)=>`<button type="button" data-semester-open="${i}"><span>${label}</span></button>`).join('')}</div></div>`:''}${p.id==='exe' && filter==='event'?`<div class="event-venue-tags" aria-label="ExErcise 活動場域"><button type="button" data-id="exe"><span>校內展</span></button><button type="button" data-id="exe"><span>迪卡儂中和店</span></button><button type="button" data-id="exe"><span>兒童新樂園</span></button><button type="button" data-id="exe"><span>放視大賞</span></button></div></div>`:''}`).join('');}

const semesterProjects = [
 {term:'大一上',name:'人生規劃－亞洲難度',award:'Best in Show',role:'專題組長',detail:'報告總整理、圖示製作、主題發想、卡牌製作、規則設計。',image:'assets/life-planning-cover.png',gallery:['assets/life-boardgame-layout.png','assets/life-boardgame-exhibition.png']},
 {term:'大一下',name:'心有靈昔一點通',award:'最佳角色設計獎',role:'專題組長',detail:'劇情討論、標準字製作、Unity 景深鏡頭、Unity 拉霸機、音效製作，以及整合美術與程式需求。',image:'assets/spirit-cover.png',video:'https://youtu.be/EZit28LPSeE'},
 {term:'大二上',name:'ExErcise｜跨場域活動',role:'活動總召',detail:'統籌校內展與後續延伸展覽；負責人員調度、工作分配及現場執行協調。',image:'assets/IMG_7430.JPG',target:'exe'},
 {term:'大二下',name:'Stop Pushin’ Me',role:'專題組長',detail:'規劃專題進度與團隊工作安排。確認各項執行細節，追蹤專案進度。',image:'assets/stop-pushin-me.png',video:'https://youtu.be/cueqZXYZNmk'},
 {term:'大三上',name:'舒潔 水啦',role:'專題組長｜進行中',detail:'負責專題進度規劃與執行方向確認。主動發掘專案疑點，評估潛在問題與解決方式。',image:'assets/kleenex-prototype.png',target:'web2'}
];
function semesterVideoEmbed(url, name){
 const match=String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
 if(!match)return '';
 return `<div class="semester-video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/${match[1]}" title="${escapeHTML(name)} 專題影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
}
function showSemesterTimeline(){
 dialogContent.innerHTML=`<div class="dialog-body semester-dialog"><p class="kicker">02 / PROJECT LEADERSHIP</p><h2>專題經歷｜學期時間軸</h2><p class="lead">依學期排列，點選專題即可展開作品內容；ExE 與舒潔可連到原本的完整專案介紹。</p><div class="semester-timeline">${semesterProjects.map((p,i)=>`<section class="semester-entry"><button class="semester-toggle" type="button" data-semester="${i}" aria-expanded="false"><span class="semester-term">${escapeHTML(p.term)}</span><span class="semester-title">${escapeHTML(p.name)}</span>${p.award?`<span class="semester-award">${escapeHTML(p.award)}</span>`:''}<span class="semester-expand">＋</span></button><div class="semester-detail" hidden><p class="semester-role">${escapeHTML(p.role)}</p><p>${escapeHTML(p.detail)}</p>${p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)} 作品紀錄" loading="lazy">`:''}${p.gallery?`<div class="semester-gallery">${p.gallery.map((src,i)=>`<img src="${escapeHTML(src)}" alt="${escapeHTML(p.name)} 實體成果照片 ${i+1}" loading="lazy">`).join('')}</div>`:''}${p.video?`<div class="semester-video-slot" data-video-index="${i}"></div>`:''}${p.target?`<button class="btn btn-dark semester-go" type="button" data-target="${p.target}">查看完整專案 ↗</button>`:''}</div></section>`).join('')}</div></div>`;
 showProjectAtTop();
}
dialogContent.addEventListener('click',e=>{
 const toggle=e.target.closest('[data-semester]');
 if(toggle){
  const panel=toggle.nextElementSibling;
  const opening=panel.hidden;
  // Keep one project open; removing hidden iframes stops playback immediately.
  dialogContent.querySelectorAll('.semester-toggle').forEach(other=>{
    if(other===toggle)return;
    const otherPanel=other.nextElementSibling;
    otherPanel.hidden=true;
    other.setAttribute('aria-expanded','false');
    other.querySelector('.semester-expand').textContent='＋';
    otherPanel.querySelectorAll('iframe').forEach(frame=>{frame.src='about:blank';frame.remove();});
  });
  panel.hidden=!opening;
  toggle.setAttribute('aria-expanded',String(opening));
  toggle.querySelector('.semester-expand').textContent=opening?'－':'＋';
  if(!opening)panel.querySelectorAll('iframe').forEach(frame=>{frame.src='about:blank';frame.remove();});
  if(opening){const slot=panel.querySelector('.semester-video-slot');if(slot){const item=semesterProjects[Number(slot.dataset.videoIndex)];if(item?.video)slot.innerHTML=semesterVideoEmbed(item.video,item.name);}}
 }

 const go=e.target.closest('[data-target]');if(go)openProject(go.dataset.target);
});

const visualWorks = [
 {heading:'標準字與字體設計',desc:'標準字、字體造型與品牌識別設計。',images:[['standard-mark-new.png','標準字設計｜舞台意象'],['twbabelle-new.png','TWBaBelle｜動物意象標準字'],['image(20261109-180742).png','文字設計｜標準字創作'],['26字母-01.png','NOBLE｜英文字體設計']],noble:true},
 {heading:'角色插畫',desc:'依指定順序排列作品，呈現不同人物與插畫風格。',images:[['ME NEW-1.png','角色插畫 05'],['柴哥委託1-2.png','角色插畫 12'],['IKE貓耳-2.png','角色插畫 01'],['oiiiiiiiiiiiiiiiii.png','角色插畫 11'],['SB1.png','角色插畫 02'],['S2-1.png','角色插畫 04'],['CC2.png','角色插畫 08'],['小馬1.png','角色插畫 03'],['西瓜1.png','角色插畫 09'],['CAKE.png','角色插畫 06'],['POPO.png','角色插畫 13'],['v2.png','角色插畫 10']]},
];
const animationIds=['k-L950WZpH4','HSNYXNlLfWU','C5FWzg1UewU','I-Y7KQztYkU'];
function showVisualWorks(){
 dialogContent.innerHTML=`<div class="dialog-body visual-dialog"><p class="kicker">06 / VISUAL DESIGN</p><h2>美術與視覺作品</h2><p class="lead">字體、角色插畫、平面創作與動畫製作。</p><p class="copyright-note">© 2026 簡廷伃｜作品僅供瀏覽，未經授權請勿轉載、重製或商用。</p>${visualWorks.map(section=>`<section class="visual-section"><h3>${escapeHTML(section.heading)}</h3><p>${escapeHTML(section.desc)}</p><div class="visual-gallery">${section.images.map(([file,title])=>`<figure><img src="assets/${escapeHTML(file)}" alt="${escapeHTML(title)}" loading="lazy" draggable="false"><figcaption>${escapeHTML(title)}</figcaption></figure>`).join('')}</div>${section.noble?`<div class="visual-feature"><h4>NOBLE｜英文字體設計・字體實作</h4><p>從字母造型設計延伸為實際字體，以下為製作與成果影片。</p><div class="semester-video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/LvGHFcD2kmY" title="NOBLE 英文字體設計實作影片" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>`:''}</section>`).join('')}<section class="visual-section"><h3>動畫製作</h3><p>動畫影片作品與動態影像練習。</p><div class="visual-video-grid">${animationIds.map((id,i)=>`<figure>${`<div class="semester-video-wrap"><iframe src="https://www.youtube.com/embed/${id}" title="動畫作品 ${i+1}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`}<figcaption>動畫作品 ${String(i+1).padStart(2,'0')}</figcaption></figure>`).join('')}<figure><video controls controlsList="nodownload noremoteplayback" disablePictureInPicture preload="metadata" playsinline src="assets/OPEN.mp4"></video><figcaption>OPEN｜動畫作品</figcaption></figure></div></section></div>`;
 showProjectAtTop();
}

function openProject(id){const p=projects.find(x=>x.id===id);if(!p)return;if(p.id==='visual'){showVisualWorks();return;}if(p.timelineOnly){showSemesterTimeline();return;}if(p.shortOnly){dialogContent.innerHTML=`<div class="dialog-body chief-only"><p class="kicker">${escapeHTML(p.tag)}</p><h2>${escapeHTML(p.title)}</h2><p class="lead">${escapeHTML(p.summary)}</p></div>`;showProjectAtTop();return;}dialogContent.innerHTML=`<div class="dialog-body"><div class="dialog-hero ${p.id==='exe'?'dialog-hero-split':''}"><div class="dialog-hero-main">${p.id==='web3'?`<iframe class="project-video" src="https://www.youtube-nocookie.com/embed/34-Ki9UFDd0" title="臺北市音樂展演場館活動地圖｜操作示範影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:p.videoCover?`<iframe class="project-video" src="https://www.youtube-nocookie.com/embed/jj-4MS8Tu4w" title="舒潔品牌互動網站｜專題影片" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:p.image?`<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.title)}">`:'＋ PROJECT COVER IMAGE'}</div>${p.id==='exe'?`<figure class="dialog-hero-portrait"><img src="assets/ME.png" alt="簡廷伃於活動現場的工作照片"><figcaption>EVENT COORDINATION / 簡廷伃</figcaption></figure>`:''}</div><p class="kicker">${p.order} / ${escapeHTML(p.tag)}</p><h2>${escapeHTML(p.title)}</h2><p class="lead">${escapeHTML(p.summary)}</p>${p.id==='exe'?'<p class="current-lead">經票選後<strong>本學期也擔任專題總召</strong></p>':''}<div class="detail-grid"><div class="detail-box"><h3>MY ROLE / 我的角色</h3>${formatRole(p)}</div><div class="detail-box"><h3>CHALLENGE / 專案挑戰</h3><p>${escapeHTML(p.challenge)}</p></div><div class="detail-box"><h3>PROCESS / 執行過程</h3><p>${escapeHTML(p.process)}</p></div><div class="detail-box"><h3>RESULT / 專案成果</h3><p>${escapeHTML(p.result)}</p></div></div>${p.timeline?`<h3>EVENT JOURNEY / 活動歷程</h3><div class="case-timeline">${p.timeline.map(([title,desc])=>`<div class="case-step"><div class="case-step-text"><strong>${escapeHTML(title)}</strong><p>${escapeHTML(desc)}</p></div>${p.timelineImages?.[p.timeline.indexOf(p.timeline.find(t=>t[0]===title))]?`<img src="${escapeHTML(p.timelineImages[p.timeline.findIndex(t=>t[0]===title)])}" alt="${escapeHTML(title)} 活動紀錄" loading="lazy">`:''}</div>`).join('')}</div><p class="case-note">※ 後台工作為試算表資料架構規劃，不包含 API 開發。活動成果與角色依個人提供資料整理。</p><img class="case-photo" src="assets/MEE.png" alt="ExE 活動工作紀錄" loading="lazy">`: p.galleryImage?`<figure class="project-gallery-image"><img src="${escapeHTML(p.galleryImage)}" alt="${escapeHTML(p.title)} 專案畫面" loading="lazy"><figcaption>${p.id==='web1'?'委託網站｜網頁實作畫面':p.id==='web3'?'臺北市音樂展演場館活動地圖｜網站畫面':'舒潔品牌互動網站'}</figcaption></figure>`:'<div class="gallery-placeholder">＋ 專案過程照片、流程圖、成果截圖預留區</div>'}${p.pressImage?`<section class="press-feature"><div><p class="kicker">PRESS COVERAGE / 媒體報導</p><h3>兒童新樂園｜北科大管院 EMBA 聯合家庭日</h3><p>活動受媒體報導，內容提及北科大互動設計系師生在兒童新樂園展示實境互動裝置與 VR 體驗。這是整體活動的報導，並非個人專訪。</p><a class="press-link" href="${escapeHTML(p.pressLink)}" target="_blank" rel="noopener noreferrer">閱讀完整報導 ↗</a></div><a href="${escapeHTML(p.pressLink)}" target="_blank" rel="noopener noreferrer" aria-label="開啟兒童新樂園活動新聞報導"><img src="${escapeHTML(p.pressImage)}" alt="兒童新樂園活動新聞報導截圖" loading="lazy"></a></section>`:''}${p.link?`<p><a class="btn btn-dark" href="${escapeHTML(p.link)}" target="_blank" rel="noopener noreferrer">${p.id==='exe'?'EXE活動官網':p.id==='web2'?'查看網站草模':'查看網站作品'} ↗</a>${p.video?`<a class="btn btn-outline" href="${escapeHTML(p.video)}" target="_blank" rel="noopener noreferrer">觀看示範影片 ↗</a>`:''}${p.instagram?`<a class="btn btn-outline" href="${escapeHTML(p.instagram)}" target="_blank" rel="noopener noreferrer">網站卡頓？觀看 IG ↗</a>`:''}</p>`:''}</div>`;showProjectAtTop();}
render();grid.addEventListener('click',e=>{const quick=e.target.closest('[data-semester-open]');if(quick){showSemesterTimeline();const toggle=dialogContent.querySelector(`[data-semester="${quick.dataset.semesterOpen}"]`);if(toggle)toggle.click();return;}const card=e.target.closest('[data-id]');if(card)openProject(card.dataset.id)});document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');b.classList.add('active');render(b.dataset.filter)}));document.querySelector('#dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',unlockPageForDialog);dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});const menu=document.querySelector('#menuToggle');menu.addEventListener('click',()=>{const open=document.querySelector('#navLinks').classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#navLinks').classList.remove('open');menu.setAttribute('aria-expanded','false')}));const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));window.addEventListener('scroll',()=>{const h=document.documentElement;document.querySelector('#progress').style.width=`${100*h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)}%`},{passive:true});

// Sticker navigation: select the relevant project category after jumping.
document.querySelectorAll('[data-jump-filter]').forEach(link => {
  link.addEventListener('click', (event) => {
    if (['event', 'pm'].includes(link.dataset.jumpFilter)) event.preventDefault();
    const value = link.dataset.jumpFilter;
    if (value === 'event') { openProject('exe'); return; }
    if (value === 'pm') { openProject('leader'); return; }
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

// Basic copy deterrence for displayed portfolio artwork (not screenshot/recording prevention).
document.addEventListener('contextmenu', e=>{if(e.target.closest('.visual-dialog img, .visual-dialog video'))e.preventDefault()});
document.addEventListener('dragstart',e=>{if(e.target.closest('.visual-dialog img'))e.preventDefault()});
