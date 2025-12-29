const inputBox = document.getElementById("text");
const content =document.getElementById("list");

function addlist(){
    if(inputBox.value ==='')
    {
        alert(" add something you idiot !");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
list.addEventListener("click", function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();

    }

}, false);
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showData(){
list.innerHTML=localStorage.getItem("data");
}
showData();