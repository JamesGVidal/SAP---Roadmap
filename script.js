(() => {
  'use strict';
  const weeks = window.ROADMAP_DATA;
  const $ = (s) => document.querySelector(s);
  const grid = $('#weeksGrid');
  const nav = $('#weekNav');
  const picker = $('#weekSelect');
  let current = 1;
  let resourceFilter = 'all';
  const key = 'sap-pm-roadmap-progress-v1';
  const themeKey = 'sap-pm-roadmap-theme-v1';
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (_) { progress = {}; }
  const save = () => { try { localStorage.setItem(key, JSON.stringify(progress)); } catch (_) {} };
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const count = (n) => Array.from({length: 5}, (_, d) => Boolean(progress[`${n}-${d+1}`])).filter(Boolean).length;
  function totals() {
    const complete = weeks.reduce((a,w) => a+count(w.id), 0);
    const pct = Math.round(complete/40*100);
    $('#progressPercent').textContent = `${pct}%`;
    $('#progressFill').style.width = `${pct}%`;
    $('#progressText').textContent = `${complete} de 40 dias concluídos`;
    $('#detailStatus').textContent = `${count(current)}/5 dias concluídos`;
  }
  function renderCards(){
    grid.innerHTML = weeks.map(w => `<button type="button" class="week-card ${current===w.id?'selected':''}" data-week="${w.id}" aria-label="Abrir semana ${w.id}: ${esc(w.title)}"><span class="number">SEMANA ${String(w.id).padStart(2,'0')}</span><h3>${esc(w.title)}</h3><p>${esc(w.subtitle)}</p><span class="card-foot"><span class="pill-progress">${count(w.id)}/5 dias</span><span>Explorar ↗</span></span></button>`).join('');
  }
  function renderNav() {
    nav.innerHTML = weeks.map(w => `<button type="button" data-week="${w.id}" class="${current===w.id?'active':''}"><small>SEMANA ${String(w.id).padStart(2,'0')}</small>${esc(w.title)}</button>`).join('');
  }
  function renderDays(w){
    $('#dayList').innerHTML = w.days.map((day,i) => `<label class="day-row ${progress[`${w.id}-${i+1}`]?'done':''}"><input type="checkbox" data-day="${i+1}" ${progress[`${w.id}-${i+1}`]?'checked':''}><span><strong>DIA ${i+1}</strong>${esc(day)}</span></label>`).join('');
  }
  function renderResources(w){
    let items=w.resources.filter(r => resourceFilter==='all' || r.type===resourceFilter);
    $('#resourceList').innerHTML=items.map((r,i)=>`<a class="resource-item ${r.type==='portuguese'?'pt':''} ${r.isSearch?'search':''}" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer"><span class="resource-order">${String(i+1).padStart(2,'0')}</span><span class="resource-copy"><span class="resource-name">${esc(r.title)}</span>${r.description?`<span class="resource-description" style="display:block">${esc(r.description)}</span>`:''}<span class="resource-tag" style="display:block">${r.isSearch?'Busca no YouTube · não é curso verificado':r.type==='portuguese'?'Material em português':'Documentação / material guiado'}</span></span><span class="resource-action">${r.isSearch?'BUSCAR AULA ↗':'ABRIR LINK ↗'}</span></a>`).join('') || '<p>Nenhum material desta categoria nesta semana.</p>';
  }
  function showWeek(num, scroll=false){
    current=Math.max(1,Math.min(8,num));const w=weeks[current-1];
    $('#detailHeading').textContent=`Semana ${String(current).padStart(2,'0')} · ${w.title}`;
    $('#detailSubheading').textContent=w.subtitle;
    $('#detailIndex').textContent=`SEMANA ${String(current).padStart(2,'0')}`;
    $('#weekIntro').textContent=w.intro;
    $('#weekExample').textContent=w.example;
    $('#weekDeliver').textContent=w.deliver;
    $('#weekWarning').textContent=w.warning;
    $('#prevWeek').disabled=current===1;
    $('#nextWeek').disabled=current===8;
    picker.value=String(current);
    renderDays(w);renderResources(w);renderCards();renderNav();totals();
    if(scroll) document.getElementById('conteudo').scrollIntoView({behavior:'smooth'});
  }
  weeks.forEach(w=>picker.append(new Option(`Semana ${w.id} · ${w.title}`,w.id)));
  $('#heroResourceCount').textContent=weeks.reduce((n,w)=>n+w.resources.length,0);
  grid.addEventListener('click',e=>{const btn=e.target.closest('[data-week]');if(btn)showWeek(Number(btn.dataset.week),true)});
  nav.addEventListener('click',e=>{const btn=e.target.closest('[data-week]');if(btn)showWeek(Number(btn.dataset.week),true)});
  picker.addEventListener('change',e=>showWeek(Number(e.target.value)));
  $('#dayList').addEventListener('change',e=>{if(!e.target.matches('[data-day]'))return;const id=`${current}-${e.target.dataset.day}`;if(e.target.checked)progress[id]=true;else delete progress[id];save();showWeek(current)});
  $('.resource-tabs').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(!btn)return;resourceFilter=btn.dataset.filter;document.querySelectorAll('.resource-tab').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});renderResources(weeks[current-1])});
  $('#prevWeek').addEventListener('click',()=>showWeek(current-1,true));
  $('#nextWeek').addEventListener('click',()=>showWeek(current+1,true));
  $('#resetProgress').addEventListener('click',()=>{if(confirm('Deseja zerar o progresso de todas as 8 semanas neste navegador?')){progress={};save();showWeek(current)}});
  const setTheme=(theme)=>{document.body.classList.toggle('light',theme==='light');$('#themeButton').textContent=theme==='light'?'☀':'☾';$('#themeButton').setAttribute('aria-label',theme==='light'?'Ativar tema escuro':'Ativar tema claro');try{localStorage.setItem(themeKey,theme)}catch(_){}};
  try{setTheme(localStorage.getItem(themeKey)==='light'?'light':'dark')}catch(_){setTheme('dark')}
  $('#themeButton').addEventListener('click',()=>setTheme(document.body.classList.contains('light')?'dark':'light'));
  showWeek(1);
})();
