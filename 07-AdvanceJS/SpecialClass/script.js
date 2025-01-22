var button = document.querySelector('button')
var box = document.querySelector('.box')
var saved = document.querySelector('.saved')

let x, y, z;
let flag = false;

button.addEventListener('click', function () {
    flag = true;
    x = Math.floor(Math.random() * 256)
    y = Math.floor(Math.random() * 256)
    z = Math.floor(Math.random() * 256)
    console.log(x, y, z);
    box.style.backgroundColor = `rgb(${x},${y},${z})`;
})

box.addEventListener('click', function () {
    if (flag) {
        let palette = document.createElement('div');
        // palette.classList.add('col')   //Allows for manipulation of element's class content attribute
        palette.setAttribute('class','col')    //does the same work
        palette.style.backgroundColor = `rgb(${x},${y},${z})`
        saved.appendChild(palette)
        flag = false
    }
})