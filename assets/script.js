const urlBase =`https://api.openweathermap.org/data/2.5/weather`
const API_KEY= 'e0954f95d06e51fcc6606a8b88486caf'
const diffKelvin = 273.15;


document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        //llamado a la API
        fetchWeather(city)
    }else{
        alert('Ingrese una ciudad Valida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}
function showWeatherData(data){
    const divInformacion = document.getElementById('informacion')
    divInformacion.innerHTML -''

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2')
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement('h3')
    tempInfo.textContent = `The Temperature is: ${Math.floor(temp - diffKelvin)}, The humidity is: ${humidity}, ${description}`

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png` //se pone url 

    divInformacion.appendChild(cityInfo)
    divInformacion.appendChild(tempInfo)
    divInformacion.appendChild(iconInfo)
    }