const imgur = ['/img/1.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg']


let index = 0;

function slideshow(){
    if(index===imgur.length){
        index=0;
    }
    
    const vijay = document.querySelector('.vijay');    
    vijay.setAttribute('src',imgur[index]);
    
    /* console.log(index); */

    index++;

}
let show;
function stopcycle(){
    clearInterval(show);

}
function startcycle(){
    show = setInterval(slideshow, 2000);

}

 show = setInterval(slideshow, 2000);