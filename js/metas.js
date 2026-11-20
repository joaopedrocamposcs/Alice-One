function draw(){
 const G=Store.get("goals");
 $("#lista").innerHTML=G.length?G.map(g=>'<div class="box"><div class="meta"><h3>'+esc(g.n)+'</h3><button class="chip" data-a="gm" data-id="'+g.id+'" data-n="-1" aria-label="Diminuir">−</button><button class="chip" data-a="gm" data-id="'+g.id+'" data-n="1" aria-label="Aumentar">+</button><button class="x" data-a="gx" data-id="'+g.id+'" aria-label="Excluir meta">×</button></div><div class="bar"><i style="width:'+g.cur/g.tot*100+'%"></i></div><small>'+g.cur+" de "+g.tot+"</small></div>").join(""):'<p class="empty">Defina um número e vá marcando o avanço.</p>';
}
$("#f").onsubmit=e=>{
 e.preventDefault();const f=e.target,n=f.n.value.trim();if(!n)return;
 Store.set("goals",[...Store.get("goals"),{id:uid(),n,cur:0,tot:Math.max(1,+f.tot.value||1)}]);
 f.n.value="";draw();
};
$("#lista").onclick=e=>{
 const b=e.target.closest("[data-a]");if(!b)return;
 let G=Store.get("goals");
 if(b.dataset.a==="gx")G=G.filter(g=>g.id!==b.dataset.id);
 else G=G.map(g=>g.id!==b.dataset.id?g:{...g,cur:Math.max(0,Math.min(g.tot,g.cur+ +b.dataset.n))});
 Store.set("goals",G);draw();
};
draw();