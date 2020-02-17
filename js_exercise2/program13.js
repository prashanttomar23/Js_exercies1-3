function program13(){
    str1=prompt('Enter string to split:');
    index=parseInt(prompt('Enter length of each split part:'));
    arr=[];
    for(i=0;i<str1.length;i+=index){
        arr.push(str1.slice(i,i+index));
    }
    console.log(`Current String: ${str1}`);
    console.log(arr);
}