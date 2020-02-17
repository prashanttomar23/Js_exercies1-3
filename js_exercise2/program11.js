function program11(){
    emailProtected='';
    emailId=prompt("Enter email address:");
    id=emailId.indexOf('@');
    emailProtected=emailId.substr(0,2)+starString(id-3)+emailId.slice(id-1,emailId.length);
    console.log(id);
    console.log(emailId)
    console.log(`Your protectd email address: ${emailProtected}`)
    function starString(n){
        str=''
        for(i=0;i<n;i++){
            str+='*';
        }
    return(str)
    }
}