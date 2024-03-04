const apiKey ="";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
const searchbx = document.querySelector(".search input"),
    searcbtn = document.querySelector(".search button"),
    image = document.querySelector(".weather-icon"),
    weatherSec = document.querySelector(".weather");
async function checkWeather(city) {
    const response = await fetch((apiUrl + city + `&appid=${apiKey}`));
    
    if (response.status === 404) {
        document.querySelector(".err-txt").style.display = "block";
        weatherSec.style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    

        if (data.weather[0].main === "Clouds") {
            image.innerHTML = '<i class="ri-cloud-line"></i>';
        } else if (data.weather[0].main === "Rain") {
            image.innerHTML = '<i class="ri-rainy-line"></i>';
        } else if (data.weather[0].main === "Clear") {
            image.innerHTML = '<i class="ri-moon-clear-line"></i>';
        } else if (data.weather[0].main === "Drizzle") {
            image.innerHTML = '<i class="ri-drizzle-line"></i>';
        } else if (data.weather[0].main === "Mist") {
            image.innerHTML = '<i class="ri-mist-line"></i>';
        }

        weatherSec.style.display = "block";
        document.querySelector(".err-txt").style.display = "none";
    }
}
    
searcbtn.addEventListener("click", () => {
    checkWeather(searchbx.value);
})
