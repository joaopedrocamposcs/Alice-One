if(Store.session()&&Store.user())location.replace("../inicio.html");
$("#f").onsubmit=async e=>{
 e.preventDefault();const f=e.target;
 const u=Store.users().find(x=>x.email===f.email.value.trim().toLowerCase());
 if(!u||u.senha!==await Store.hash(f.senha.value)){$("#erro").textContent="E-mail ou senha incorretos.";return}
 Store.login(u.id);location.href="../inicio.html";
};