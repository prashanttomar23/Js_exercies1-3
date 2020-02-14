arr=[3,5,6,3,4,4,4,4,4,5,6,4,4,6,4,5,2,5,7,9,0,7,5,7,2,3,5,6,3,3,2,5,6,4,5,7,8,5,3,5,6,1,4,7]
countMax=0;
n=0;
let sortedArr = Array.from( new Set(arr) );

for(k=0;k<sortedArr.length;k++){
    if (counter(k)>countMax){
        countMax=counter(k);
        n=sortedArr[k]; 
    }    
}

console.log(countMax,'times',n);

function counter(i){
    let tempCount=0;
    for(j=0;j<arr.length;j++){
        if (arr[j]==sortedArr[i]){
            tempCount+=1;
        }
    }
    return(tempCount);
}