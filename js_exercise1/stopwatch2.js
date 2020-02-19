let h,m,s,h1,m1,s1;
let arrMonths=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
function currentTime(){
        let date =new Date();
        currentDate=date.getDate();
        currentMonth=date.getMonth();
        currentYear=date.getFullYear();
         h =date.getHours();
         m =date.getMinutes();
         s =date.getSeconds(); 
         ms=date.getUTCMilliseconds();
        document.getElementById("currentTime").innerHTML=`Time: ${h}h ${zeroes(m)}m ${zeroes(s)}s &nbsp&nbsp`;
        document.getElementById("currentDate").innerHTML=`&nbsp&nbsp Date: ${zeroes(currentDate)}-${arrMonths[currentMonth]}-${currentYear}`;
        setTimeout(currentTime,10);  
        }
        currentTime();

countInMiliseconds=0;   
hr=0;
min=0;
sec=0;
msec=0; 
seconds=0;
minutes=0;
hours=0;
    document.getElementById("stopStopwatch").style.display = "none";
    document.getElementById("resumeStopwatch").style.display = "none";
    document.getElementById("resetStopwatch").style.display = "none";
function zeroes(attribute){return attribute <10  ? '0'+attribute:attribute}


function resetStopwatch(){
    countInMiliseconds=0;
    msec=0; 
    seconds=0;
    minutes=0;
    hours=0;
    clearTimeout(timerid);
    document.getElementById("beginStopwatch").style.display = "";
    document.getElementById("stopStopwatch").style.display = "none";
    document.getElementById("resumeStopwatch").style.display = "none";
    document.getElementById("resetStopwatch").style.display = "none";
    document.getElementById("startStopwatch").innerHTML=`${zeroes(hours)}:${zeroes(minutes)}:${zeroes(seconds)}:${zeroes(msec)}`;

}
function resumeStopwatch(){
    timerid = setInterval(timerStart,10);
    document.getElementById("stopStopwatch").style.display = "";
    document.getElementById("resumeStopwatch").style.display = "none";
    document.getElementById("startStopwatch").innerHTML=`${zeroes(hours)}:${zeroes(minutes)}:${zeroes(seconds)}:${zeroes(msec)}`;

}

function startStopwatch(){
    timerid = setInterval(timerStart,10);
    document.getElementById("stopStopwatch").style.display = "";
    document.getElementById("resumeStopwatch").style.display = "none";
    document.getElementById("beginStopwatch").style.display = "none";
    document.getElementById("resetStopwatch").style.display = "";
}
function stopStopwatch(){
    clearTimeout(timerid);
    document.getElementById("resumeStopwatch").style.display = "";
    document.getElementById("stopStopwatch").style.display = "none";
    document.getElementById("startStopwatch").innerHTML=`${zeroes(hours)}:${zeroes(minutes)}:${zeroes(seconds)}:${zeroes(msec)}`;
}

function timerStart() {
    countInMiliseconds+=1;
    msec=countInMiliseconds%100;
    sec=parseInt(countInMiliseconds/100);
    seconds=sec%60;
    min=parseInt(sec/60);
    minutes=min%60;
    hr=parseInt(min/60);
    hours=hr%60;
    
    document.getElementById("startStopwatch").innerHTML=`${zeroes(hours)}:${zeroes(minutes)}:${zeroes(seconds)}:${zeroes(msec)}`;
    
    
    document.getElementById("stopStopwatch").disabled=false;
    


}