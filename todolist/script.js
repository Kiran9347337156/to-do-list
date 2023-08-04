const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(input.value === "")
    {
        alert("write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value= "";
    sData();

}
listContainer.addEventListener("click",function(e){  
    if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            sData();
        }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        sData();
    }
}, false);
function sData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function sTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}