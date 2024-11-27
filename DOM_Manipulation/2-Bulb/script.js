let bulb = document.querySelector(".bulb")
let switchh = document.querySelector(".switchh")
let body = document.querySelector("body")
let wire = document.querySelector(".wire")

switchh.addEventListener('click',()=>{
    if( switchh.textContent === "ON"){
        bulb.style.backgroundColor = "Yellow";
        bulb.style.border = "1px black solid"
        body.style.backgroundColor = "White";
        wire.style.backgroundColor = "Black";
        switchh.textContent = "OFF"
        switchh.style.border = "2px black solid"
    }
    else if( switchh.textContent === "OFF"){
        bulb.style.backgroundColor = "Black";
        bulb.style.border = "1px white solid"
        body.style.backgroundColor = "Black";
        wire.style.backgroundColor = "White";
        switchh.textContent = "ON"
        switchh.style.border = "2px white solid"
    }

})

