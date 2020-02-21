let register = document.getElementById("register");
register.addEventListener("click", registered);

function registered() {

    let idUser = document.getElementById("userName").value;
    let pswdUser = document.getElementById("userPassword").value;
    let pswdConfUser = document.getElementById("userConfPassword").value;

    if(pswdUser=="" || idUser=="" || pswdConfUser=="" ){
        alert("Username or Password can't be empty");
    }
    else if ((pswdUser != pswdConfUser)) {
        alert("Password doesnt match !")
    } 
    else{
        user = {};
            user.Name=idUser;
            user.Password = pswdUser;
            user.IsAdmin = false;
            if (document.getElementById("admin").checked) {
                user.IsAdmin = true;
            }
            else {
                user.IsAdmin = false;
            }
            alert("Successfully Registered ! \n\n Go back to Login page")
    }                 
    let jsonStudent = JSON.stringify(user);
    localStorage.setItem(idUser,jsonStudent); 
}

