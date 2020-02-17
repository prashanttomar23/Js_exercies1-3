function program5(){
    arr1=['a','b','c','d','t','g','s','g','e','g','t','w'];
    arr2=['a','f','e','u','a','j','d','t','q','d','t','k'];
    arrUnion=(arr1+","+arr2).split(",");
    arrDiff1=[];
    arrDiff2=[];

    console.log(Array.from(new Set(arrUnion))) ;


    for(i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i]) && !arrDiff1.includes(arr1[i])){
            arrDiff1.push(arr1[i]);
        }
    }
    for(i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i]) && !arrDiff2.includes(arr2[i])){
            arrDiff2.push(arr2[i]);
        }
    }
    console.log(arrDiff1,arrDiff2);
}