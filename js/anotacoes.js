function draw(){
 const q=$("#busca").value.toLowerCase(),A=Store.get("notes").filter(n=>(n.t+" "+n.c).toLowerCase().includes(q)).reverse();
 $("#lista").innerHTML=A.length?A.map(n=>'<article class="nota"><div class="meta"><h3>'+esc(n.t)+'</h3><button class="x" data-id="'+n.id+'" aria-label="Excluir anotação">×</button></div><p>'+esc(n.c).replace(/\n/g,"<br>")+"</p><small>"+fmt(n.d)+"</small></article>").join(""):'<p class="empty">Nenhuma anotação encontrada.</p>';
}
$("#f").onsubmit=e=>{
 e.preventDefault();const f=e.target,t=f.t.value.trim(),c=f.c.value.trim();if(!t&&!c)return;
 Store.set("notes",[...Store.get("notes"),{id:uid(),t:t||"Sem título",c,d:today()}]);
 f.reset();draw();
};
$("#busca").oninput=draw;
$("#lista").onclick=e=>{const id=e.target.dataset.id;if(id){Store.set("notes",Store.get("notes").filter(n=>n.id!==id));draw()}};
draw();