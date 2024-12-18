var arr = [
    {
        profilePhoto : "https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rashi Thakur",
        uploadTime : "15 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Preeti Mehta",
        uploadTime : "20 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1617047671901-34035b399153?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Neha Chandel",
        uploadTime : "35 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1610441995419-a673724a8224?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rani Patel",
        uploadTime : "4 hrs ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rashi Thakur",
        uploadTime : "15 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Preeti Mehta",
        uploadTime : "20 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1617047671901-34035b399153?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Neha Chandel",
        uploadTime : "35 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1610441995419-a673724a8224?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rani Patel",
        uploadTime : "4 hrs ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1580983222866-a16bc7f1cdc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rashi Thakur",
        uploadTime : "15 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Preeti Mehta",
        uploadTime : "20 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1617047671901-34035b399153?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Neha Chandel",
        uploadTime : "35 minutes ago"
    },
    {
        profilePhoto : "https://images.unsplash.com/photo-1610441995419-a673724a8224?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        fullName : "Rani Patel",
        uploadTime : "4 hrs ago"
    }
]

var statusContainer = ''

arr.forEach(function(elem){
    statusContainer += `            <div class="status">
                <img src=${elem.profilePhoto} alt="">
                <div class="data">
                    <h2>${elem.fullName}</h2>
                    <h4>${elem.uploadTime}</h4>
                </div>
            </div>`
})

var allStatus = document.querySelector('.allStatus')

allStatus.innerHTML = statusContainer