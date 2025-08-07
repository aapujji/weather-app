const API_KEY = "FYDKFT3G7HPBF5G48DHADBD8K";

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`, {mode: 'cors'})
    const data = await response.json();
    console.log(data);
}

export {
    getWeather
}