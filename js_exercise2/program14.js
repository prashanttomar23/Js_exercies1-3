function program14(){
    textMesg=prompt("Enter the message to extract");
    console.log(textMesg);
    console.log(textMesg.replace(/<\w+>|<\/\w+>/gi,""));
}