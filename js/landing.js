if(Store.session()&&Store.user()){
 $("#entrar").href="pages/inicio.html";$("#entrar").textContent="Abrir meu painel";
 $("#criar").hidden=true;$("#topo-criar").hidden=true;
}