function program15(){
    let emailId=prompt("Enter an email address:");
    id=emailId.match(/^\w{5,}@\w+\.\w{2,3}$/g);
    if(id){
        console.log(`${emailId} is a valid Email.`);
    }
    else{
        console.log(`${emailId} is not a valid Email.`);
    }
}