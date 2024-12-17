var arr = [
    {
        model : 'Samsung',
        price : 50000,
        quantity : 43
    },
    {
        model : 'Iphone',
        price : 70000,
        quantity : 64
    },
    {
        model : 'OnePlus',
        price : 10000,
        quantity : 54
    },
]

var totBill = 0

arr.forEach(function(elem){
    totBill += elem.price * elem.quantity
})

console.log(totBill);