const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container");
const addbtn = document.getElementById("add-btn");
const clearbtn = document.getElementById("clear-btn");
addbtn.addEventListener("click", function(){
    //listContainer.add();
    console.log(inputBox.value)
    const list = document.createElement("li");
    list.innerHTML=inputBox.value
  listContainer.appendChild(list)
  let span = document.createElement("span")
  span.innerHTML ="\u00d7";
  list.appendChild(span)
  span.classList.add("span-eve")
  inputBox.value = "";
//   saveData();
});
listContainer.addEventListener("click",function(e){
    console.log(e)
    if(e.target.tagName === "LI"){
  e.target.classList.toggle("checked");
//   saveData();
    }
    else if(e.target.tagName === "SPAN"){
e.target.parentElement.remove();
//saveData();
    }

    
});
clearbtn.addEventListener("click", function(e){
  
  // listContainer.innerHTML = "";
  const childElements = listContainer.children;
  console.log(childElements)
  const childCount = childElements.length;
  
  for (let i = 0; i < childCount; i++) {
      listContainer.removeChild(childElements[0]); // Always remove the first child since the list shrinks
  }

    });
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();

