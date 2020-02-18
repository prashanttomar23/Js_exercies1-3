function program16(){
    
    let num=prompt("Enter a number to convert:");
    console.log(`Orginal Number: ${num}`);
    startingNum=num.length%3;
    k=parseInt(num.length/3);
    if(startingNum==0){
        convertedNum=num.slice(0,startingNum+3);
        for(i=startingNum+3;i<num.length;i+=3){
            convertedNum=convertedNum+','+num.substr(i,3);
        }
        console.log(`Number in thousands Seprators: ${convertedNum}`);

    }
    else{
        convertedNum=num.slice(0,startingNum);
        for(i=startingNum;i<num.length;i+=3){
            convertedNum=convertedNum+','+num.substr(i,3);
        }
        console.log(`Number in thousands Seprators: ${convertedNum}`);

    }
    
}
