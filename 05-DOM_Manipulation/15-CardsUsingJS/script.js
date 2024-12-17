var arr = [
    {
        name: 'Pradyuman',
        city: 'Raisen',
        age: 22,
        college: 'IIT'
    },
    {
        name: 'Mohit',
        city: 'Jabalpur',
        age: 21,
        college: 'NIT'
    },
    {
        name: 'Aadi',
        city: 'Agra',
        age: 19,
        college: 'LNCT'
    },
    {
        name: 'Vedant',
        city: 'Patna',
        age: 21,
        college: 'KIIT'
    }
]

var container = ``

arr.forEach(function(elem){
    container += `<div>
        <h1>${elem.name}</h1>
        <h2>${elem.age} , ${elem.city}</h2>
        <h3>${elem.college}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci necessitatibus voluptate cumque porro iste molestiae!</p>
    </div>`
})
var body = document.querySelector('body')
body.innerHTML = container  