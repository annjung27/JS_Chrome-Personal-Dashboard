const API_KEY = "814dee7c3f1abc322329dad648311e9c";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position)
    console.log("You are living in", lat, lon);
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
            
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`; 
        city.innerText = `@ ${data.name}`;
        
    });
}

function onGeoError(){
    alert("Can't find you, No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);