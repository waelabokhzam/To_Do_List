
let btn=document.getElementById("add");
btn.addEventListener("click", function(){
  let input=document.getElementById("input-task");
  let li=document.createElement("li");
  li.innerHTML=input.value;
  document.getElementById("ul").appendChild(li);
});