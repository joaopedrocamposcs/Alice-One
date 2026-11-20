const f=$("#f");
f.nome.value=me.nome;
f.tema.value=theme;
f.onsubmit=e=>{
 e.preventDefault();
 Store.write("users",Store.users().map(u=>u.id===me.id?{...u,nome:f.nome.value.trim()||u.nome}:u));
 Store.set("cfg",{theme:f.tema.value});
 $("#ok").textContent="Alterações salvas.";
 if(f.tema.value==="auto")document.documentElement.removeAttribute("data-theme");else document.documentElement.dataset.theme=f.tema.value;
};
$("#limpar").onclick=()=>{if(confirm("Apagar tarefas, hábitos, metas e anotações?")){Store.wipe();$("#ok").textContent="Dados apagados."}};
$("#excluir").onclick=()=>{
 if(!confirm("Excluir sua conta e todos os dados?"))return;
 Store.wipe();Store.write("users",Store.users().filter(u=>u.id!==me.id));Store.logout();
 location.href="autenticacao/login.html";
};