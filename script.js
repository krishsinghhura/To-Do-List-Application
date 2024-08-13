let container=document.querySelector(".container");
let add=document.querySelector(".adding button");

add.addEventListener("click",()=>{
    let input=document.querySelector(".adding input").value;
    let inputbox=document.querySelector(".adding input");
    if (input == ''){
        alert("You cannot add an empty task");
    } else{
        elCreation(input);
        inputbox.value='';
    }
})

function elCreation(input){
    let el=document.createElement("div");
    el.setAttribute("class","taskWhole");
    el.innerHTML='<div class="taskAdd"> <pre><img src=/unchecked.png> '+input+'</pre> </div> <button class="cross">x</button>';
    container.append(el);
}

let taskWhole= document.querySelector(".taskWhole");
container.addEventListener("click", function(e){
    if(e.target.tagName==="PRE"){
        e.target.classList.toggle("checked");
        let img=document.querySelector(".checked img");
        console.log(img);   
        img.setAttribute("src","/checked.png");
    } else if(e.target.className==="cross"){
        e.target.parentElement.remove();
    }
})