// console.log(document.head);
// console.log(document.documentElement);
// alert(document.head);
//  alert(document.documentElement.parentElement);
// alert(document.body.childElementCount);
// alert(document.body.childNodes);
// for(let id in document.body.childNodes )console.log(id);
// alert(document.body.previousElementSibling)
let idHead=document.getElementById("name");
idHead.style.color="black";

let elements = document.querySelectorAll('ul > li');
console.log();

  for (let elem of elements) {
   console.log(elem.innerHTML); }