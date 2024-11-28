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
        bulb.style.boxShadow = "20px 20px 100px yellow";
        switchh.style.backgroundColor = "Red"
    }
    else if( switchh.textContent === "OFF"){
        bulb.style.boxShadow = "1px 1px 10px yellow";
        bulb.style.backgroundColor = "Black";
        bulb.style.border = "1px white solid"
        body.style.backgroundColor = "Black";
        wire.style.backgroundColor = "White";
        switchh.textContent = "ON"
        switchh.style.border = "2px white solid"
        switchh.style.backgroundColor = "rgb(243, 24, 24, 0.1)";
    }

})

