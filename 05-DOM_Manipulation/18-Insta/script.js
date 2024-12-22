var arr = [
    {
        profilePhoto : "https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1604883781245-0aca44fff711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1670336863504-b4dc0a9cd9cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto :"https://images.unsplash.com/photo-1670337948900-4e959a25de9d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1604883781245-0aca44fff711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1604883781245-0aca44fff711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1670336863504-b4dc0a9cd9cc?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        statusPhoto : "" 
    }    
]

var sum = ``;

arr.forEach(function(elem){
    sum += `            <div class="story">
                <img src=${elem.profilePhoto} alt="">
            </div>`
})

var storiyan = document.querySelector('.storiyan')
storiyan.innerHTML = sum