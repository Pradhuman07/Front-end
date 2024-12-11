var h1 = document.querySelector('h1')

document.addEventListener('keydown',function(dets){
    h1.innerHTML = dets.code            
})

//dets is a object ... dets.code == student.name

//dets is basically event .. for here keyboard event ['click' = pointer event , 'mousemove' = MouseEvent]

//.X , .code , .Y are the properties of the object(event)