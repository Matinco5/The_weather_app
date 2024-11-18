//selecting the needed html elements 
const tempearture = document.querySelector(".temp");
const humidity = document.querySelector(".humidity-value");
const cityName = document.querySelector(".city-name");
const speed = document.querySelector(".speed");
const searchBtn = document.querySelector(".search button");
const searchInput= document.querySelector(".search input");
const weatherCondition = document.querySelector(".main img");
const weather = document.querySelector(".weather")




async function checkWeather(){
    try{
        const apiKey = "a29d9ac5c8be357dbeb310567ddf3709";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchInput.value}` ;


        const response = await fetch(apiUrl + `&appid=${apiKey}`)
        const errorMessage = document.querySelector(".error-message")
        var data = await response.json();

        if(response.status === 404){
            errorMessage.style.display = "block"
            weather.style.display = "none"
        }
        else{
            console.log(data)
            tempearture.textContent = Math.floor(data.main.temp) + "°c";
            humidity.textContent = data.main.humidity + " %";
            cityName.textContent = data.name;
            speed.textContent = data.wind.speed + " Km/hr";
    
            if(data.weather[0].main === "Clear"){
                weatherCondition.src = "images/clear.png"
            }
                else if(data.weather[0].main === "Drizzle"){
                weatherCondition.src = "images/drizzle.png"
                }
                else if(data.weather[0].main === "Mist"){
                weatherCondition.src = "images/mist.png"
                }
                else if(data.weather[0].main === "Rain"){
                weatherCondition.src = "images/rain.png"
                }
                else if(data.weather[0].main === "Snow"){
                weatherCondition.src = "images/snow.png"
                }
                else if(data.weather[0].main === "Clouds"){
                weatherCondition.src = "images/clouds.png"
                }
            weather.style.display = "block"
            errorMessage.style.display = "none"
        }}

        catch{
            console.error(error, 'error')
        }
}
        
      
    

    searchBtn.addEventListener("click", function () {
        checkWeather()
        this.classList.add("special-bg")
        setTimeout(()=>{
            this.classList.remove("special-bg")
        }, 200)
    })
