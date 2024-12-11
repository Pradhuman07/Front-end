var body = document.querySelector("body")
var btn = document.querySelector("button")

var Srcs = ['https://www.pngplay.com/wp-content/uploads/1/Butterfly-PNG-Transparent-Images.png',
            'https://www.pngplay.com/wp-content/uploads/1/Orange-Butterfly-PNG-HD-Quality.gif' ,
            'https://www.pngplay.com/wp-content/uploads/12/Dragonfly-Clip-Art-Transparent-File.png',
            'https://www.pngplay.com/wp-content/uploads/12/Slug-Transparent-Image.png',
            'https://www.pngplay.com/wp-content/uploads/12/Maggots-PNG-Photos.png',
            'https://www.pngplay.com/wp-content/uploads/12/Slug-Background-PNG.png',
            'https://www.pngplay.com/wp-content/uploads/1/Butterfly-PNG-Photo-Image.png',
            'https://www.pngplay.com/wp-content/uploads/7/Cricket-Insect-PNG-Background.png',
            'https://www.pngplay.com/wp-content/uploads/12/Slug-Free-PNG-Clip-Art.png',
            'https://www.pngplay.com/wp-content/uploads/12/Dragonfly-PNG-Photos.png'
]

btn.addEventListener("click",function(){
    var img = document.createElement('img')
    img.setAttribute('src',Srcs[Math.floor(Math.random()*10)])
    img.style.height = "100px"
    img.style.position = "absolute"
    img.style.left = Math.random()*85 + "%"
    img.style.top = Math.random()*85 + "%"
    // img.style.transform = `rotate(${Math.random()*60}deg)`
    body.appendChild(img)
})