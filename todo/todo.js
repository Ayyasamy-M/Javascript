function add(){
let list=document.getElementById("list")
let input=document.getElementById("input").value
document.getElementById("input").value=""

let ul=document.createElement("ul")
let li=document.createElement("li")
let li2=document.createElement("li")

let remove=document.createElement("button")
let edit=document.createElement("button")

let label=document.createElement("label")

var checkbox=document.createElement("input")

label.innerHTML=input
ul.id="items"
checkbox.type="checkbox"

checkbox.className="box"
remove.id="rmv"
edit.id="edt"
edit.textContent="Edit"
remove.textContent="Delete"

list.append(ul)
ul.append(li)
ul.append(li2)

li.append(label)
ul.append(checkbox)


li2.append(remove)
li2.append(edit)


// let button=document.getElementById("btn1")
// button.addEventListener("click",(e)=>{
//     e.preventDefault();
//     task=input.value;
//     if(task!== ""){
//         prompt("please fill the task");
//         return;
//     }else{
//         console.log("success");
//     }
// })

remove.onclick = (e) =>{
    list.removeChild(ul);
}

edit.onclick=(e)=>{
    let show=li.firstElementChild;
    let res = prompt("Enter the updated name:",show.innerHTML);
    show.id="show1"
    show.innerHTML=res
}

checkbox.addEventListener("click",(box)=>{
    if(box.target.checked){
   label.style.textDecoration="line-through"
    }else{
        label.style.textDecoration="none"
    }
})




    // console.log(e.target=label);
// .style.textDecoration="line-through"
// label.addEventListener("dblclick",(e)=>{
//     if(e.target.textContent){
//         label.style.textDecoration="none"
//     }
// })
// edit.addEventListener("click",(e)=>{
// if(e.target.classList.contains("edit")){
// document.getElementById("items").value=e.target.parentNode.childNodes[0].data;
// add.value="edit";
// edit=e;
// }
// })

// console.log(list);
}