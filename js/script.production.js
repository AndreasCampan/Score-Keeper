const addBttn=document.getElementById("addbttn"),form=document.querySelector("form");let nameList=[],nameCount=1;function addNameCard(){const e=document.getElementById("nameinput");let t=e.value;const n=document.getElementById("list");let d=0;const a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("li"),s=document.createElement("span"),l=document.createElement("span"),o=document.createElement("span"),r=document.createElement("button"),m=document.createElement("h2"),u=document.createElement("button"),p=document.createElement("input"),h=document.createElement("button");function E(){const e=document.getElementById(t);let n=parseFloat(e.innerText,10);const d=document.getElementById(t+t).valueAsNumber,a=document.getElementById(t+t).value,i=parseFloat(d,10);i?"number"==typeof i&&0===n&&a.length<=7?(console.log("=== 0"),n=i,e.innerText=n):"number"==typeof i&&0!==n&&a.length<=7?(console.log("!== 0"),n+=i,e.innerText=n):a.length>7?alert("Score input cannot exceed 7 digits"):alert("Something is not right!"):alert("Please enter a number!")}""===t?alert("Please Enter a Name"):(l.innerHTML='<input type="radio" name="dealer"> Dealer',s.innerHTML='<input type="radio" name="starter"> Starter',m.innerText=nameList.includes(t)?(t+=nameCount,nameCount++,nameList.push(t),t):(nameList.push(t),t),r.innerText="X",i.innerText="Score: ",o.innerText="0",h.innerText="Enter",u.innerText="Reset",a.classList.add("top"),i.classList.add("bottom"),l.classList.add("dealer"),s.classList.add("starter"),r.classList.add("close"),i.classList.add("bottom"),u.classList.add("resetbttn"),p.classList.add("score-input"),h.classList.add("ptsbttn"),o.classList.add("score"),o.setAttribute("id",t),p.setAttribute("type","number"),p.setAttribute("id",t+t),p.setAttribute("placeholder","0"),a.appendChild(m),a.appendChild(l),a.appendChild(s),c.appendChild(a),i.appendChild(o),i.appendChild(u),i.appendChild(p),i.appendChild(h),c.appendChild(i),n.appendChild(c),r.addEventListener("click",function(){const e=t;if(c.parentElement.removeChild(c),!nameList.includes(e))throw console.log("delItem Error");nameList=nameList.filter(t=>!e.includes(t))}),u.addEventListener("click",function(){const e=document.getElementById(t);d=0,e.innerHTML=d}),h.addEventListener("click",E),p.addEventListener("keydown",e=>{"Enter"===e.key&&E()})),e.value="",e.focus(),document.getElementsByName("starter").forEach(e=>{e.addEventListener("mousedown",function(){this.checked?this.onclick=function(){this.checked=!1}:this.onclick=null})}),document.getElementsByName("dealer").forEach(e=>{e.addEventListener("mousedown",function(){this.checked?this.onclick=function(){this.checked=!1}:this.onclick=null})})}form.addEventListener("submit",addNameCard),addBttn.addEventListener("click",addNameCard);