let cur=new Date(),sel=today();
function draw(){
 const y=cur.getFullYear(),m=cur.getMonth(),first=new Date(y,m,1).getDay(),n=new Date(y,m+1,0).getDate(),T=Store.get("tasks");
 let c="";for(let i=0;i<first;i++)c+="<i></i>";
 for(let d=1;d<=n;d++){const k=y+"-"+pad(m+1)+"-"+pad(d);c+='<button class="day'+(k===sel?" sel":"")+(k===today()?" now":"")+'" data-d="'+k+'">'+d+(T.some(x=>x.d===k)?"<b></b>":"")+"</button>"}
 $("#mes").innerHTML='<button class="chip" data-n="-1" aria-label="Mês anterior">‹</button><h3>'+cur.toLocaleDateString("pt-BR",{month:"long",year:"numeric"})+'</h3><button class="chip" data-n="1" aria-label="Próximo mês">›</button>';
 $("#grade").innerHTML=["D","S","T","Q","Q","S","S"].map(x=>"<em>"+x+"</em>").join("")+c;
 $("#dia").textContent=fmt(sel);
 $("#lista").innerHTML=taskList(T.filter(x=>x.d===sel));
}
$("#mes").onclick=e=>{const b=e.target.closest("[data-n]");if(b){cur=new Date(cur.getFullYear(),cur.getMonth()+ +b.dataset.n,1);draw()}};
$("#grade").onclick=e=>{const b=e.target.closest("[data-d]");if(b){sel=b.dataset.d;draw()}};
$("#f").onsubmit=e=>{
 e.preventDefault();const f=e.target,t=f.t.value.trim();if(!t)return;
 Store.set("tasks",[...Store.get("tasks"),{id:uid(),t,d:sel,done:false}]);
 f.t.value="";draw();
};
bindTasks($("#lista"),draw);
draw();