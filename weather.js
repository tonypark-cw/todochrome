const weather = document.querySelector(".js-weather");


const COORDS = "coords";

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj= {
        latitude,
        longitude,
    }
    saveCoords(coordObj);
}


function saveCoords(coordObj){
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoError(e){
    console.log(e);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        const lat = parsedCoords.latitude;
        const lon = parsedCoords.longitude;
        getWeather(lat, lon);
    }
}

function init(){
    loadCoords();
}


function getWeather(lat , lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        const temperature = data.main.temp;
        const place = data.name;        
        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        console.log(icon);
        const iImg = new Image();
        iImg.src = icon;
        weather.innerHTML =`${temperature} @ ${place}`;
        weather.appendChild(iImg);
    });
}

init();
