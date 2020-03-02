alert("Hello");
let box3=document.getElementById("box1");
box3.addEventListener("click",addText);
arr=["green","blue","red"];
arr2=["lightgreen","khaki","royalblue","purple","orangered"];
let i=0;
let j=0;

setInterval( function colorChange(){
    if(i>2){
        i=0;
    }
    document.getElementById("box2").style.backgroundColor=arr[i];
    i++;
}, 1000);

function addText(){
    document.getElementById("box3").innerHTML='Oops something wrong?';
}

let keyy;
let id;
document.onkeydown=function(event){
     keyy=event.key;
     if(keyy=="ArrowRight" || keyy=="ArrowUp"){
        document.getElementById("box4").style.backgroundColor=arr2[i];
        if(i>5){
            i=0;
        }
        i++;
    }
    else if(keyy=="ArrowLeft" || keyy=="ArrowDown"){
        document.getElementById("box4").style.backgroundColor=arr2[i];
        if(i<0){
            i=5;
        }
        i--;
    }
}

