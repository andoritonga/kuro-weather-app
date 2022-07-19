import '../component/weather-result.js';
import '../component/weather-search.js';
import '../index.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("weather-search");
    const weatherResultElement = document.querySelector("weather-result");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchWeather(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        weatherResultElement.cities = results;
    };

    const fallbackResult = message => {
        weatherResultElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
}

export default main;