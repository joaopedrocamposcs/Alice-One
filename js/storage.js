const $=s=>document.querySelector(s);
const Store={
 read(k,d){try{const v=localStorage.getItem("af:"+k);return v?JSON.parse(v):d}catch(e){return d}},
 write(k,v){try{localStorage.setItem("af:"+k,JSON.stringify(v))}catch(e){}},
 users(){return this.read("users",[])},
 session(){return this.read("session",null)},
 login(id){this.write("session",id)},
 logout(){localStorage.removeItem("af:session")},
 user(){const id=this.session();return this.users().find(u=>u.id===id)||null},
 get(col,d=[]){return this.read(this.session()+":"+col,d)},
 set(col,v){this.write(this.session()+":"+col,v)},
 wipe(){const p="af:"+this.session()+":";Object.keys(localStorage).filter(k=>k.startsWith(p)).forEach(k=>localStorage.removeItem(k))},
 async hash(s){try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){return btoa(unescape(encodeURIComponent(s)))}}
};