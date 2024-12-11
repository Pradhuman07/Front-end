// var btn = document.querySelector('button')  
// console.log(btn.innerHTML); //Red

 //You can see(by console log) , that the above selects only the first button tag present in the html document

//-------------------------------------------------------------------------

// var btnss = document.querySelectorAll('button')
// console.log(btnss);     //NodeList(5) [button, button, button, button, button]  
//Nodelist is like array only ..you can apply all operations as in array

//---------------------------------------------------------------------------

var btnss = document.querySelectorAll('button')
var body = document.querySelector('body')

btnss.forEach(function(particularBtn){
    particularBtn.addEventListener('click',function(){
        body.style.backgroundColor = particularBtn.innerHTML  //css is case insensitive i.e Red === red
    })
})