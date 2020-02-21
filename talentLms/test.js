let user=[];
let IsAdmin=false;
function registered(){
    
    let idUser=document.getElementById("userName").value;
    let pswdUser=document.getElementById("userPassword").value;
    let pswdConfUser=document.getElementById("userConfPassword").value;
    if(document.getElementById("admin").checked){
        IsAdmin=true;
        alert(IsAdmin);
    }
    else{
        IsAdmin=false;
        alert(IsAdmin);
    }
    
}

