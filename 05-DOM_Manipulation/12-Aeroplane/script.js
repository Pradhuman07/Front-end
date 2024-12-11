var img = document.querySelector('img')

var directionX = 0
var directionY = 0

document.addEventListener('keydown',function(dets){
    // console.log(dets.code);
    if(dets.code === 'ArrowRight' && directionX<82){
        directionX++;
        // console.log(directionX);
        img.style.left = directionX + '%'
    }
    else if(dets.code === 'ArrowLeft' && directionX>0){
        directionX--;
        img.style.left = directionX + '%'
    }
    else if(dets.code === 'ArrowDown' && directionY<90){
        // console.log(directionY);
        directionY++;
        img.style.top = directionY + '%'
    }
    else if(dets.code === 'ArrowUp' && directionY>0){
        directionY--;
        img.style.top = directionY + '%'
    }

})