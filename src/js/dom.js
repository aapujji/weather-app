import WeatherModule from "./components/WeatherModule";

const todaysWeatherDiv = document.querySelector(".todays-weather");
const sevenDayForecastDiv = document.querySelector(".seven-day");


export const renderTodaysWeather = (data) => {
    todaysWeatherDiv.appendChild(WeatherModule(data));
}

export const renderForecastWeather = (data) => {
    sevenDayForecastDiv.appendChild(WeatherModule(data));
}