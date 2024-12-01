let button = document.querySelector("button");
let h1 = document.querySelector("h1")

button.addEventListener("click",function(){
    if(button.textContent==="Add Friend"){
        h1.textContent = "Request sending..."
        h1.style.color = "Yellow"
        button.textContent = "Adding"
        
        setTimeout(function(){
            h1.textContent = "Friends"
            h1.style.color = "Green"
            button.textContent = "Remove Friend"
        },2000)
    }
    else{
        h1.textContent = "Request Sending.."
        h1.style.color = "Yellow"
        button.textContent = "Removing"
        
        setTimeout(function(){
            h1.textContent = "Stranger"
            h1.style.color = "Red"
            button.textContent = "Add Friend"
        },2000)
    }
})