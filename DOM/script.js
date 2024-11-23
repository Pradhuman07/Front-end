let h1 = document.querySelector("h1");
h1.textContent = "Pui Pui"
h1.style.color = "red";
h1.innerHTML = "<i> maut ka nagin dance </i>"

let a = document.querySelector("a");
a.setAttribute("href" , "https://www.sheryians.com")

let button = document.getElementById("changeImageButton");

button.addEventListener("click", function() {
    let image = document.getElementById("myImage");
    image.src = "https://images.unsplash.com/photo-1720048169970-9c651cf17ccd?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
});