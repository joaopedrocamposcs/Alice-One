const pad=n=>String(n).padStart(2,"0");
const iso=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const today=()=>iso(new Date());
const fmt=k=>new Date(k+"T00:00").toLocaleDateString("pt-BR",{day:"2-digit",month:"short"});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const uid=()=>Math.random().toString(36).slice(2,9);
const PAGES=[["inicio","Início"],["tarefas","Tarefas"],["calendario","Calendário"],["habitos","Hábitos"],["metas","Metas"],["anotacoes","Anotações"],["configuracoes","Ajustes"]];
const me=Store.user();
if(!me){document.documentElement.hidden=true;location.replace("autenticacao/login.html")}
const theme=(Store.get("cfg",{}).theme)||"auto";
if(theme!=="auto")document.documentElement.dataset.theme=theme;
(function(){
 const p=document.body.dataset.page;
 $("#nav").innerHTML='<div class="logo">AliceFlow</div><div class="tag">Planeje, foque, conquiste</div>'+PAGES.map(x=>'<a href="'+x[0]+'.html" class="'+(x[0]===p?"on":"")+'">'+x[1]+'</a>').join("")+'<button class="sair" id="sair">Sair</button>';
 $("#sair").onclick=()=>{Store.logout();location.href="autenticacao/login.html"};
})();
function taskRow(t){return'<li class="row'+(t.done?" done":"")+'"><input type="checkbox" data-a="tt" data-id="'+t.id+'" '+(t.done?"checked":"")+' aria-label="Concluir"><span>'+esc(t.t)+'</span><small>'+fmt(t.d)+'</small><button class="x" data-a="td" data-id="'+t.id+'" aria-label="Excluir tarefa">×</button></li>'}
function taskList(a){return a.length?"<ul>"+a.map(taskRow).join("")+"</ul>":'<p class="empty">Nada por aqui ainda.</p>'}
function bindTasks(el,after){el.addEventListener("click",e=>{
 const b=e.target.closest("[data-a]");if(!b)return;
 let T=Store.get("tasks");
 if(b.dataset.a==="tt")T=T.map(t=>t.id===b.dataset.id?{...t,done:!t.done}:t);
 else if(b.dataset.a==="td")T=T.filter(t=>t.id!==b.dataset.id);
 else return;
 Store.set("tasks",T);after();
})}