function program6(){
    let arr=[];
    let startingIndex=parseInt((prompt("enter starting value")).charCodeAt(0));
    let endingIndex=parseInt(prompt("enter ending value").charCodeAt(0));
    let gap=parseInt(prompt("enter the difference"));
    for(i=startingIndex;i<=endingIndex;i+=gap){
        arr.push( String.fromCharCode([i]));
    }
    console.log(arr);
}

// let defArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// let startingAlphabet=prompt("Enter Starting Value");
// let endingAlphabet=prompt("Enter Ending Value");
// let gap=prompt("Enter Difference Index");
// let n=0; 
// let m=0;
// gap=parseInt(gap);
// for(i=0;i<26;i++){
//     if(defArray[i]==startingAlphabet){
//         n=i;
//     }
//     if(defArray[i]==endingAlphabet){
//         m=i;
//     }
// }
// for(j=n;j<=m;j+=gap){
//     arr.push(defArray[j]);
// }
// console.log(arr);

