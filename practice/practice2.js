let fun1=()=>{
    let input=document.getElementById("input").value
    let table1=document.getElementById("table1")
    let table=document.createElement("table")
    let tr=document.createElement("tr")
    let th=document.createElement("th")
    let td=document.createElement("td")

    table.id=("table6")
    table.append(tr)
    tr.append(th)
    th.append(td)
    td.append(input)
    table1.append(table)
    console.log(table);
    document.getElementById("input").value=""

}


let fun2=()=>{
    let input=document.getElementById("input2").value
    let table2=document.getElementById("table2")
    let table=document.createElement("table")
    let tr=document.createElement("tr")
    let td=document.createElement("td")

    table.id=("table4")
    table.append(tr)
    tr.append(td)
    td.append(input)
    table2.append(table)
    document.getElementById("input2").value=""

}


let fun3=()=>{
    let input=document.getElementById("input3").value
    let table3=document.getElementById("table3")
    let table=document.createElement("table")
    let tr=document.createElement("tr")
    let td=document.createElement("td")

    table.id=("table5")
    table.append(tr)
    tr.append(td)
    td.append(input)
    table3.append(table)
    document.getElementById("input3").value=""

}
