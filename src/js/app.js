import { getWeather } from "./modules/data";
import { input, button, renderLocation, renderForecastWeather, renderTodaysWeather } from "./dom";
import './../css/app.css';

const render = async (loc) => {
    const weatherData = await getWeather(loc);
    const { location, todaysWeather, forecast } = weatherData;
    renderLocation(location);
    renderTodaysWeather(todaysWeather);
    renderForecastWeather(forecast);
}

button.addEventListener("click", () => {
    if (input.value) {
        render(input.value);
        input.value = "";
    }
});

input.addEventListener("keypress", (e) => {
    if (input.value && e.key === "Enter") {
        render(input.value);
        input.value = "";
    }
});

const initApp = async () => {
    render("new york city");
}

initApp();