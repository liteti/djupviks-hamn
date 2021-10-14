import { getWeatherData } from "./utils.js";

let weatherData = getWeatherData();
weatherData.then(printWeather);

function printWeather(weatherData){
    const pElement = document.querySelector('#weather');
    let sentence = document.createElement('strong');
    sentence.innerHTML = "Under kommande timme är det " + weatherData + " grader varmt i Djupviks hamn.";
    pElement.appendChild(sentence);
}