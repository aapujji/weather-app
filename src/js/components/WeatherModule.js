import createUIElement from "../utils/createUIElement";
import clearDay from "../../images/clear-day.png";
import partlyCloudy from "../../images/partly-cloudy-day.png";
import cloudyDay from "../../images/cloudy-day.png";
import rain from "../../images/rain.png";

const getIcon = (iconName) => {
    switch (iconName) {
        case "clear-day":
            return clearDay;
        case "partly-cloudy-day":
            return partlyCloudy;
        case "cloudy-day":
            return cloudyDay;
        case "rain":
            return rain;
        default:
            return clearDay;
    }
}

const WeatherModule = ({temp, minTemp, maxTemp, iconName, description}) => {
    const tempH3 = createUIElement("h3", {
        textContent: `${temp}${String.fromCharCode("176")}F`,
    });
    const minTempH4 = createUIElement("h4", {
        textContent: `${minTemp}${String.fromCharCode("176")}F`,
    });
    const maxTempH4 = createUIElement("h4", {
        textContent: `${maxTemp}${String.fromCharCode("176")}F`,
    });
    const otherTempsDiv = createUIElement("div",{
        class: "temp-range",
    },[minTempH4, maxTempH4]);
    const weatherIcon = createUIElement("img", {
        src: getIcon(iconName),
        alt: iconName,
    });
    const weatherDescription = createUIElement("p", {
        textContent: description,
    });
    const weatherDetails = createUIElement("div", {
        class: "weather-details",
    }, [weatherIcon, weatherDescription]);
    const weatherModule = createUIElement("div", {
        class: "weather-module",
    }, [tempH3, otherTempsDiv, weatherDetails]);
    return weatherModule;
}

export default WeatherModule;