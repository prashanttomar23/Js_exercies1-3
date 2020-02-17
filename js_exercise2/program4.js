function program4(){
    arr=['a','b','c','d','e','f','g','h','i','j'];
    n=arr.length;
    let arrNew=[];
    for(i=0;i<n;i++){
        let n =arr.length;
        r=Math.floor(Math.random()*n);
        arrNew[i]=arr[r];
        arr.splice(r,1);   
    }
    return(console.log(arrNew));
}