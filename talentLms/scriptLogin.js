let login=document.getElementById("login");
login.addEventListener("click",loginFunc);
function loginFunc(){
    let username=document.getElementById("userName").value;
    let password=document.getElementById("userPassword").value;
    console.log(username,password);
    if(username=="" || password==""){
        alert("Empty Credentials");
    }
    
    else{
        let jsonstr=localStorage.getItem(username);
        let parsedJson=JSON.parse(jsonstr);
        if(parsedJson.Password==password && parsedJson.IsAdmin==true){
            let a =document.createElement('a');
            // alert("Welcome Back Admin");  
            a.href="adminpage.html";
            a.click();
            
        }
        else if(parsedJson.Password==password && parsedJson.IsAdmin==false){
            let a =document.createElement('a');
            a.href="userpage.html";
            a.click();
        } 
    }
}
