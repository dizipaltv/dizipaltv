window.addEventListener("DOMContentLoaded",(async()=>{try{const e=await window.electronAPI.versions(),t=document.getElementById("version_infos");t&&Object.entries(e).forEach((([e,n])=>{const o=document.createElement("tr"),r=document.createElement("td"),a=document.createElement("code");a.classList.add("key"),a.textContent=e,r.appendChild(a),o.appendChild(r);const c=document.createElement("td"),d=document.createElement("code");d.classList.add("value"),d.id=`${e}_value`,d.textContent=n,c.appendChild(d),o.appendChild(c),t.appendChild(o)}));document.querySelectorAll(".closeWindow").forEach((e=>{e&&e.addEventListener("click",(async()=>{try{await window.electronAPI.closeMenu("about")}catch(e){console.error("Menu kapatılırken hata oluştu:",e)}}))}));const n=await window.electronAPI.getPackageInfo(),o=document.querySelector('meta[name="author"]');o&&n.author&&n.author.name&&(o.content=n.author.name);document.getElementById("copyright").innerHTML=`&copy;${(new Date).getFullYear()}`;const r=document.getElementById("author_infos");r&&n.author&&n.author.url&&(r.href=n.author.url,r.textContent=n.author.name);document.getElementById("version_value").textContent=n.version;const a=document.getElementById("github_repository");a&&n.repository&&n.repository.url&&(a.href=n.repository.url.replace("git+","").replace(".git",""))}catch(e){console.error("Error fetching package info:",e)}}));