
function program8(){
    d1=new Date(document.getElementById("date1").value).getTime();
    d2=new Date(document.getElementById("date2").value).getTime();
    countInMiliseconds=Math.abs(d1-d2);
    console.log(`TimeStamp: ${countInMiliseconds}`);
    hr=0;
    min=0;
    sec=0;
    days=countInMiliseconds/(1000*60*60*24);
    hours=days*24;
    minutes=hours*60;
    seconds=minutes*60;
    week=parseInt(days/7);
    weekDay=days%7;
    month=parseInt(days/60);
    years=month/12;
   



    console.log(`days:${days}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`);
    console.log(`${years} year and ${weekDay} day or ${month} month and ${weekDay} day`);
    console.log(`or ${week} week and ${weekDay} day`);
}

