
let btn=document.getElementById("add");
btn.addEventListener("click", function(){
  let input=document.getElementById("input-task");
  let li=document.createElement("li");
  li.innerHTML=input.value;
  li.title="click to delete";
  li.addEventListener("dblclick", function(){
    document.getElementById("ul").removeChild(li);
  });
  li.addEventListener("click", function(){
    input.value=li.innerHTML;
    document.getElementById("ul").removeChild(li);
  });
  document.getElementById("ul").appendChild(li);
});
function deleteTask(){
  document.getElementById("ul").removeChild(document.getElementsByTagName("li")[0]);
}