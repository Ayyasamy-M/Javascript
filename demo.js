function delpopup(event){
    console.log(event.target.parentElement.remove());
    
}
const plus=()=>{
    var input=document.querySelector("#input-box")
    var inputlay=document.querySelector("#input2")
    
    input.style.display="block"
    inputlay.style.display="block"
}
const add=()=>{
    let title=document.querySelector("#title")
    let author=document.querySelector("#authorname")
    let descrip=document.querySelector("#desc")
    let disp=document.createElement("div")
    let pop=document.querySelector(".popup-box")
    disp.setAttribute("class","popup-overlay")

   disp.innerHTML=`<h1>${title.value}</h1>
   <h2>${author.value}</h2>
   <p>${descrip.value}</p>
   <button onclick="delpopup(event)">delete</button>`
   pop.append(disp)




   var input=document.querySelector("#input-box")
    var inputlay=document.querySelector("#input2")
    
    input.style.display="none"
    inputlay.style.display="none"
}