alert("Hello");
let box3=document.getElementById("box1");
box3.addEventListener("click",addText);
let id=setInterval(colorChange,1000);
arr=["green","blue","red"];
arr2=["lightgreen","khaki","royalblue","purple","orangered"];
let i=0;
let j=0;
function colorChange(){
    if(i>2){
        i=0;
    }
    document.getElementById("box2").style.backgroundColor=arr[i];
    i++;
}
function addText(){
    document.getElementById("box3").innerHTML='Oops something wrong?';
}

document.onkeydown=(function(event){
     let keey=event.key;
     if(keey=="ArrowRight" || keey=="ArrowUp"){
        forward();
    }
    else if(keey=="ArrowLeft" || keey=="ArrowDown"){
        backward();
    }
});



function forward(){
    let id=setInterval(function(){
        
        if(j>5){
            j=0;
            clearInterval(id);
        }
        document.getElementById("box4").style.backgroundColor=arr2[j];
        j++;
    
    },1000);
    
}
function backward(){
    let id=setInterval(function(){
        clearInterval(id);
        if(j<0){
            j=5;
        }
        document.getElementById("box4").style.backgroundColor=arr2[j];
        j--;

    },1000)
   

}