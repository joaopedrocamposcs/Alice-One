function draw(){
 const t=today(),T=Store.get("tasks").filter(x=>x.d===t),ok=T.filter(x=>x.done).length,pc=T.length?Math.round(ok/T.length*100):0;
 const H=Store.get("habits"),G=Store.get("goals"),hf=H.filter(h=>h.days.includes(t)).length;
 const gp=G.length?Math.round(G.reduce((s,g)=>s+g.cur/g.tot,0)/G.length*100):0;
 const h=new Date().getHours(),sd=h<12?"Bom dia":h<18?"Boa tarde":"Boa noite",C=2*Math.PI*46;
 $("#titulo").textContent=sd+", "+me.nome.split(" ")[0];
 $("#hero").innerHTML='<div class="ring"><svg width="110" height="110"><circle cx="55" cy="55" r="46" fill="none" stroke="var(--ln)" stroke-width="9"/><circle cx="55" cy="55" r="46" fill="none" stroke="var(--ac)" stroke-width="9" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+C*(1-pc/100)+'"/></svg><b>'+pc+'%</b></div><p>'+new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long"})+". "+(T.length?ok+" de "+T.length+" tarefas feitas hoje.":"Nenhuma tarefa para hoje.")+"</p>";
 $("#stats").innerHTML='<div class="stat"><b>'+(T.length-ok)+'</b><span>tarefas pendentes</span></div><div class="stat"><b>'+hf+"/"+H.length+'</b><span>hábitos de hoje</span></div><div class="stat"><b>'+gp+'%</b><span>progresso das metas</span></div>';
 $("#hoje").innerHTML=taskList(T);
 $("#hab").innerHTML=H.length?"<ul>"+H.map(x=>'<li class="row'+(x.days.includes(t)?" done":"")+'"><input type="checkbox" data-id="'+x.id+'" '+(x.days.includes(t)?"checked":"")+' aria-label="Marcar hábito"><span>'+esc(x.n)+"</span></li>").join("")+"</ul>":'<p class="empty">Crie seu primeiro hábito.</p>';
}
$("#hab").onclick=e=>{
 const id=e.target.dataset.id;if(!id)return;const t=today();
 Store.set("habits",Store.get("habits").map(h=>h.id!==id?h:{...h,days:h.days.includes(t)?h.days.filter(x=>x!==t):[...h.days,t]}));
 draw();
};
bindTasks($("#hoje"),draw);
draw();