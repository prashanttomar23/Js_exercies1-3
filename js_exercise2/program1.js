function elemmentofArray(arr_name,n){
    return(console.log(`First${n}elements :${arr_name.slice(0,n)} and last${n}elements:${arr_name.slice(arr_name.length-n,arr_name.length)}`))
}
n=3
arr=[1,2,3,4,5,6,7,8,9,0,11,12,14,151,51];
elemmentofArray(arr,n);

