var friends = [
    {
        name: 'Sarthak',
        wt : 69
    },
    {
        name: 'Harsh',
        wt : 50
    },
    {
        name: 'Harshi',
        wt : 45
    },
    {
        name: 'Ajay',
        wt : 67
    },
    {
        name: 'Patel',
        wt : 98
    },
    {
        name: 'Akarsh',
        wt : 99
    },
    {
        name: 'Anuj',
        wt : 69
    },
]

var totWt = 0;

friends.forEach(function(elem){
    totWt += elem.wt
})

console.log("Total wt = " + totWt);

if(totWt<500) console.log("Lift se jaa skte h");
else console.log("Nhi jaa skte");