let parsedCurrentUser=JSON.parse(localStorage.getItem("Current User"));
if(!parsedCurrentUser){
    let a =document.createElement('a');
    a.href="login.html";
    a.click();
}

document.getElementById("username").innerHTML=parsedCurrentUser.Name;

let logoutButton=document.getElementById("logoutButton");
logoutButton.addEventListener("click",logout);

let courses=JSON.parse(localStorage.getItem("courses"));
let coursesHave=[];
let divOut=document.createElement("div");
divOut.classList.add("boxIn");

for(let i=0;i<courses.length;i++){
    let course=courses[i];
    
    checkCourse(course);
}
document.body.append(divOut);
function checkCourse(course){
    let name =JSON.parse(localStorage.getItem("Current User")).Name;
    let user=JSON.parse(localStorage.getItem(name));
    if(user[course]==true){
        coursesHave.push(course);


        let divMain=document.createElement("div");
        divMain.append(createCourseRow(course));
        divMain.classList.add("rows");
        divOut.append(divMain);
        
    }
    
}
if(coursesHave.length==0){
    alert("You havn't assgined any course yet !");
}
function createCourseRow(course){
    
    let a=document.createElement("a");

    a.innerHTML=course;
    return(a);
}
function logout(){
    localStorage.removeItem("Current User");
}

