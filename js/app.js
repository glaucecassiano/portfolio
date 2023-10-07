const imgs = document.getElementById("portifolio");
const img = document.querySelectorAll("#img imgcarrosel");


let idx = 0;

function carrossel(){
    id ++;

    if (idx > img.length -1){
        idx= 0; 
    }

    imgs.style.transform = `translateX(${ -idx * 800}px)`; 
}