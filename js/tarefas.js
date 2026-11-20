let F="todas";
function draw(){
 const t=today(),fl={todas:()=>true,hoje:x=>x.d===t,pendentes:x=>!x.done,concluidas:x=>x.done};
 $("#chips").innerHTML=Object.keys(fl).map(k=>'<button class="chip'+(F===k?" on":"")+'" data-v="'+k+'">'+k[0].toUpperCase()+k.slice(1)+"</button>").join("");
 $("#lista").innerHTML=taskList(Store.get("tasks").filter(fl[F]).sort((a,b)=>a.d.localeCompare(b.d)));
}
$("#f").d.value=today();
$("#f").onsubmit=e=>{
 e.preventDefault();const f=e.target,t=f.t.value.trim();if(!t)return;
 Store.set("tasks",[...Store.get("tasks"),{id:uid(),t,d:f.d.value||today(),done:false}]);
 f.t.value="";draw();
};
$("#chips").onclick=e=>{if(e.target.dataset.v){F=e.target.dataset.v;draw()}};
bindTasks($("#lista"),draw);
draw();