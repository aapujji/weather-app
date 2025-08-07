import WeatherModule from "./components/WeatherModule";
import createUIElement from "./utils/createUIElement";

const todaysWeatherDiv = document.querySelector(".todays-weather");
const forecastContainer = document.querySelector(".forecast");
const daysSpan = document.querySelector(".days");
const locationSpan = document.querySelector(".location");
const input = document.querySelector("input");
const button = document.querySelector("button");

const renderLocation = (location) => {
    locationSpan.textContent = "";
    const formatted = location.split(" ").map((word) => {
        const uppercaseFirstChar = word.charAt(0).toUpperCase()
        const restOfWord = word.slice(1);
        return uppercaseFirstChar + restOfWord;
    }).join(" ");
    locationSpan.textContent = formatted;
}

const renderTodaysWeather = (data) => {
    todaysWeatherDiv.textContent = "";
    todaysWeatherDiv.appendChild(WeatherModule(data));
}

const renderForecastWeather = (data) => {
    forecastContainer.textContent = "";
    daysSpan.textContent = data.length;
    const forecastDiv = createUIElement("div", {
        class: "forecast-modules"
    });
    data.map((day) => {
        forecastDiv.appendChild(WeatherModule(day));
    });
    forecastContainer.appendChild(forecastDiv);
}

export {
    input,
    button,
    renderLocation,
    renderTodaysWeather,
    renderForecastWeather,
}