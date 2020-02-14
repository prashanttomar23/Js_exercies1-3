function program2(){    
    let number =prompt("Enter a number");
    function checkAdjacent(a,b){
        if (parseInt(a)%2==0 && parseInt(b)%2==0){
            return(`${a}-`);}
        return(`${a}`);       
    }
    let string ='';
    for(i=0;i<number.length-1;i++){
        string+=checkAdjacent(number[i],number[i+1]);
        
    }
    string+=number[number.length-1];
    console.log(string)
}