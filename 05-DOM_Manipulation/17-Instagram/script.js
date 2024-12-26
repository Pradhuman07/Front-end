var users = [
    {
        dp : "https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        story : "https://images.unsplash.com/photo-1554894872-ab8a04e23d1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    },
    {
        dp : "https://images.unsplash.com/photo-1594583388647-364ea6532257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        story : "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    },
    {
        dp : "https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        story : "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    },
    {
        dp : "https://images.unsplash.com/photo-1525816017201-416a3ac88b1a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1577201866982-97ac098537e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    },
    {
        dp : "https://plus.unsplash.com/premium_photo-1664525632762-7b1559ad947a?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        story : "https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    },
    {
        dp : "https://images.unsplash.com/photo-1455637350775-730a9e5a8310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        story : "https://images.unsplash.com/photo-1546810764-bb43293395f3?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        username : ""
    }
]

var sum = '';

users.forEach(function(elem , idx){
    sum += `            <div class="story">
                <img id=${idx} src=${elem.dp} alt="">
            </div>`
})

var storiyan = document.querySelector(".storiyan");
storiyan.innerHTML = sum;

// Showing story 

var full = document.querySelector('.full')
var growth = document.querySelector('.growth')

storiyan.addEventListener('click',function(dets){
    var clicked_ki_id = dets.target.id;
    var story_to_be_shown = users[clicked_ki_id].story
    full.style.backgroundImage = `url(${story_to_be_shown})`
    full.style.display = 'block'
    
    var grow = 0;
    var mjburi = setInterval(function(){
        grow++;
        growth.style.width = grow + '%'
    },20)
    
    setTimeout(function(){
        full.style.display = 'none'
        clearInterval(mjburi)
    },2000)

})

