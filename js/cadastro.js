if(Store.session()&&Store.user())location.replace("../inicio.html");
$("#f").onsubmit=async e=>{
 e.preventDefault();const f=e.target,erro=$("#erro"),email=f.email.value.trim().toLowerCase();
 if(f.senha.value.length<6){erro.textContent="A senha precisa ter pelo menos 6 caracteres.";return}
 if(f.senha.value!==f.conf.value){erro.textContent="As senhas não são iguais.";return}
 if(Store.users().some(u=>u.email===email)){erro.textContent="Este e-mail já tem cadastro.";return}
 const u={id:Math.random().toString(36).slice(2,9),nome:f.nome.value.trim(),email,senha:await Store.hash(f.senha.value)};
 Store.write("users",[...Store.users(),u]);Store.login(u.id);location.href="../inicio.html";
};