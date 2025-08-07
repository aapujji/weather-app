import { getWeather } from "./modules/data";
import { renderForecastWeather, renderTodaysWeather } from "./dom";
import './../css/app.css';

const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    if (input.value) getWeather(input.value, 7);
});

async function initApp() {
    const weatherData = await getWeather("new york city", 7);
    const today = weatherData.todaysWeather;
    const forecast = weatherData.forecast;

    // console.log(today);

    console.log(forecast);

    renderTodaysWeather(today);
    forecast.map((day) => renderForecastWeather(day));
}

initApp();