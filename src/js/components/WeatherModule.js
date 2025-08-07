import createUIElement from "../utils/createUIElement";

const WeatherModule = ({temp, minTemp, maxTemp, iconName, description}) => {
    const tempH2 = createUIElement("h2", {
        id: "todayTemp",
        textContent: temp,
    });
    const minTempH4 = createUIElement("h4", {
        id: "todayMinTemp",
        textContent: minTemp,
    });
    const maxTempH4 = createUIElement("h4", {
        id: "todayMaxTemp",
        textContent: maxTemp,
    });
    const otherTempsDiv = createUIElement("div",{},[minTempH4, maxTempH4]);
    const weatherIcon = createUIElement("img", {
        //src: `../../images/${iconName}.png`,
        alt: iconName,
    });
    const weatherDescription = createUIElement("p", {
        textContent: description,
    });
    const weatherDetails = createUIElement("div", {}, [weatherIcon, weatherDescription]);
    const weatherModule = createUIElement("div", {}, [tempH2, otherTempsDiv, weatherDetails]);
    return weatherModule;
}

export default WeatherModule;