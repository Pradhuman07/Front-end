var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var btn3 = document.querySelector("#btn3")
var box = document.querySelector(".box")

//yaha mt bnana x,y,z kyoki fir wo bss ek bar bnke rhjaenge button ke click pe unki values bar bar change nhi hogi

btn1.addEventListener("click",function(){
    // setInterval(function(){
        var x = Math.floor(Math.random()*256)
        var y = Math.floor(Math.random()*256)
        var z = Math.floor(Math.random()*256)
    
        // console.log(x);  //range = [0,255]
        // console.log(y);
        // console.log(z);
    
        box.style.backgroundColor = `rgb(${x},${y},${z})`
    // },300)
})

btn2.addEventListener("click",function(){
    var x = Math.floor(Math.random()*256)
    var y = Math.floor(Math.random()*256)
    var z = Math.floor(Math.random()*256)
    
    box.style.height = `${x}px`
    box.style.width = `${y}px`
    box.style.borderRadius = `${z}px`
})

btn3.addEventListener("click",function(){
    setInterval(function(){
        var x = Math.floor(Math.random()*256)
        var y = Math.floor(Math.random()*256)
        var z = Math.floor(Math.random()*256)
        
        box.style.backgroundColor = `rgb(${x},${y},${z})`
        
        box.style.height = `${x}px`
        box.style.width = `${y}px`
        box.style.borderRadius = `${z}px`
    },500)
})
