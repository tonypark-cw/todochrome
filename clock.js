const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

init();

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = 
    `${hours < 10 ? "0"+hours: hours}:${minutes<10 ?"0"+minutes : minutes}:${seconds < 10 ? "0"+seconds: seconds}`;
}

function init(){
    setInterval(getTime, 1000);
}

function blur(){
    
}


