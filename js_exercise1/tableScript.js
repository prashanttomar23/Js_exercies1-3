let btnAdd = document.getElementById("buttonAdd");
btnAdd.addEventListener("click", addUser);
let btnUpdate = document.getElementById("buttonAdd");
btnUpdate.addEventListener("click", updateUser);

let table=document.createElement("table");
table.style.marginTop="50px";
document.getElementById("buttonUpdate").style.display = "none";

table.classList.add("tables")


function addUser(){
    firstName=document.getElementById("fname");
    lastName=document.getElementById("lname");

    let div=document.createElement("div");
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let editButton=document.createElement("button");
    let deleteButton=document.createElement("button");
    editButton.innerHTML="EDIT";
    deleteButton.innerHTML="DELETE";

    td1.innerHTML = firstName.value; 
    td2.innerHTML = lastName.value;

    div.append(editButton,deleteButton);
    div.style.width = "200px";
    tr.append(td1,td2,div);
    table.append(tr);

    

    editButton.classList.add("editButton");
    deleteButton.classList.add("deleteButton");

    editButton.addEventListener("click",editRow);
    deleteButton.addEventListener("click",deleteRow);

    firstName.value="";
    lastName.value="";
}
document.querySelector(".container").append(table);

function editRow(event){
    
    document.getElementById("buttonUpdate").style.display = "";
    document.getElementById("buttonAdd").style.display = "none";
    

    firstName.value = event.target.parentElement.parentElement.childNodes[0].innerHTML;
    lastName.value = event.target.parentElement.parentElement.childNodes[1].innerHTML;
}
function deleteRow(event){
    event.target.parentElement.parentElement.remove();
    document.getElementById("buttonUpdate").style.display = "none";
    document.getElementById("buttonAdd").style.display = "";
    

}
function updateUser(){
    document.getElementById("buttonUpdate").style.display = "none";
    document.getElementById("buttonAdd").style.display = "";

}

