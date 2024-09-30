const counterContainer = document.querySelector(".container");
const countDisplay = document.querySelector(".number");
const factor = document.getElementById("increment");

let count = 0;

counterContainer.addEventListener("click", event=>{

    
    let id = event.target.getAttribute("id");
    
    if(id == "add"){

        handleAdd(event);
        return;
    }

    if(id == "subtract"){

        handleSubtract(event);
        return;
    }

    if(id == "reset"){
        
        handleReset(event);
    }
})

function handleAdd(event){
    //get increment value and add it to count on every click
    count = Number(count) + Number(factor.value);
    countDisplay.innerText = count; 
}

function handleSubtract(event){
    count = Number(count) - Number(factor.value);
    countDisplay.innerText = count; 
}

function handleReset(event){
    countDisplay.innerText = 0;
    factor.value = 1;
}