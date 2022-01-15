document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city){
    const key = "8b0d1e31e286ec235fba8e3a8345ece8";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            //convert data to json
        return resp.json();
        })
        .then(function (data){
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
        })
}
function cityWeather(event) {
    weatherDataFetch("Tartu");
}

function drawWeather (data){
    let celsius = Math.round(parseFloat(data.main.temp)-273.15);
    let description = data.weather[0].description;
    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celsius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}
