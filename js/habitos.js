const streak=h=>{let n=0,d=new Date();if(!h.days.includes(iso(d)))d.setDate(d.getDate()-1);while(h.days.includes(iso(d))){n++;d.setDate(d.getDate()-1)}return n};
const last7=()=>[...Array(7)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return d});
function draw(){
 const H=Store.get("habits");
 $("#lista").innerHTML=H.length?H.map(h=>'<div class="box"><div class="meta"><h3>'+esc(h.n)+"</h3><small>"+streak(h)+' dia(s) seguidos</small><button class="x" data-a="hx" data-id="'+h.id+'" aria-label="Excluir hábito">×</button></div><div class="dots">'+last7().map(d=>{const k=iso(d);return'<button class="dot'+(h.days.includes(k)?" on":"")+'" data-a="hd" data-id="'+h.id+'" data-d="'+k+'" aria-label="'+fmt(k)+'">'+"DSTQQSS"[d.getDay()]+"</button>"}).join("")+"</div></div>").join(""):'<p class="empty">Hábitos pequenos e diários funcionam melhor que planos grandes.</p>';
}
$("#f").onsubmit=e=>{
 e.preventDefault();const f=e.target,n=f.n.value.trim();if(!n)return;
 Store.set("habits",[...Store.get("habits"),{id:uid(),n,days:[]}]);
 f.n.value="";draw();
};
$("#lista").onclick=e=>{
 const b=e.target.closest("[data-a]");if(!b)return;
 let H=Store.get("habits");
 if(b.dataset.a==="hx")H=H.filter(h=>h.id!==b.dataset.id);
 else H=H.map(h=>{if(h.id!==b.dataset.id)return h;const k=b.dataset.d;return{...h,days:h.days.includes(k)?h.days.filter(x=>x!==k):[...h.days,k]}});
 Store.set("habits",H);draw();
};
draw();