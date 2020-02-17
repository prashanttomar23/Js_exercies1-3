function program7(){
    let date=prompt("Enter a date");
    monthNum=parseInt(date[3]+date[4]);
    arrMonths=['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    console.log(`Month : ${arrMonths[monthNum-1]}`);
}
    
