function program12(){
    str=prompt("Enter a string:");
    strToInsert=prompt('Enter string to insert:');
    let indexAt=1;
    indexAt=prompt('Enter index at which to insert string:');
    strWithInsert=str.slice(0,indexAt)+strToInsert+str.slice(indexAt,str.length);
    console.log(str,strToInsert,strWithInsert);
}