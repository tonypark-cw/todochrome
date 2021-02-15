const body = document.querySelector("body");

const IMG_NUMBER = 5;
function handleImgLoad(){
    console.log("로딩 끝");
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber}.jpg`;
    image.onload = function(){
        image.classList.add("bgImage");
        body.appendChild(image);
    }

    // image.addEventListener("loadend", handleImgLoad);
}

function genRandomNumber(){
    return Math.floor(Math.random()*IMG_NUMBER) + 1;
}

function init(){
    const randNumb = genRandomNumber();
    paintImage(randNumb);
}

init();