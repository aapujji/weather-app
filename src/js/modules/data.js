const API_KEY = "FYDKFT3G7HPBF5G48DHADBD8K";

async function getWeather(location = "seaford", days = "7") {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, {mode: 'cors'});
    const data = await response.json();
    let todaysWeather = {};
    let forecast = [];
    for (let i = 0; i < days; i++) {
        const day = data.days[i];
        let weather = {
            temp: Math.round(day.temp),
            minTemp: Math.round(day.tempmin),
            maxTemp: Math.round(day.tempmax),
            iconName: day.icon,
            description: day.description,
        };
        if (i === 0) {
            todaysWeather = weather;
        } else {
            forecast.push(weather);
        }
    }

    return {
        location,
        todaysWeather,
        forecast,
    };
}

export {
    getWeather,
}