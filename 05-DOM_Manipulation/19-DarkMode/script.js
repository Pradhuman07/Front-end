// localStorage.setItem('theme','light');       // ek bar likhke hata dena wrna wps light hojaegi reload krne pr
// localStorage.setItem('icon','ri-moon-fill')  // ek bar likhke hta dena wrna reload krne pr dark theme me bhi moon hi dikhega

var main = document.querySelector('.main');
main.setAttribute('id',localStorage.getItem('theme'));   //jo last time thi whi ajaegi

var i = document.querySelector('.main i');
i.setAttribute('class',localStorage.getItem('icon'))

i.addEventListener("click",function(){
    if(localStorage.getItem('theme')=='light'){
        localStorage.setItem('theme','dark')
        localStorage.setItem('icon','ri-sun-fill')
        main.setAttribute('id',localStorage.getItem('theme'))
        i.setAttribute('class',localStorage.getItem('icon'));
    }
    else if(localStorage.getItem('theme')=='dark'){
        localStorage.setItem('theme','light')
        localStorage.setItem('icon','ri-moon-fill')
        main.setAttribute('id',localStorage.getItem('theme'))
        i.setAttribute('class',localStorage.getItem('icon'))
    }
})