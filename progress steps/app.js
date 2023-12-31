const progress = document.querySelector(".progress")
const circles = document.querySelectorAll(".circle")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

let curentActive = 1;

next.addEventListener("click", () =>{
    curentActive++;
    if(curentActive > circles.length){
        curentActive = circles.length
    }

    update()
})

prev.addEventListener("click", () =>{
    curentActive--;
    if (curentActive < 1){
         curentActive = 1
    }
    
    update()
})

function update(){
    circles.forEach((circle,index) =>{
        if(index < curentActive){
            circle.classList.add("active")
        } else{circle.classList.remove("active")}

    })
    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(curentActive === 1){
        prev.disabled = true
    } else if(curentActive === circles.length){
        next.disabled = true
    } else{
        next.disabled = false
        prev.disabled = false

    }

}