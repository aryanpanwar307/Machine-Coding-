let searchInput = document.querySelector(".search-bar input");
let searchBtn = document.querySelector(".search-bar button");
let weatherType = document.querySelector(".weather-image");


async function getWeather (cityName){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=534461efc9e2cef32eb672985c316328&units=metric`
    const response = await fetch(api);
    const data = await response.json();

    document.querySelector(".city-name .city").innerHTML = data.name;
    document.querySelector(".temprature .temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".other-details .wind .wind-text").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".other-details .humidity .humidity-text").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clouds") {
        weatherType.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear") {
        weatherType.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain") {
        weatherType.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherType.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist") {
        weatherType.src = "images/mist.png"
    }
    else{
        weatherType.src = "images/snow.png"
    }
    console.log(data);
}

searchBtn.addEventListener("click", ()=> {
    getWeather(searchInput.value);
})