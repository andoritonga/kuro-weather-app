class WeatherItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set city(city) {
        this._city = city;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
            border-radius: 20px;
            overflow: hidden;
        }
       
        .weather-report {
            padding: 24px;
        }
       
        .weather-report > h2 {
            font-weight: bold;
        }

        .weather-report > p {
            margin: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }

        h3 {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 21px;
            padding : 24px;
        }

        h3:hover{
            background-color: darkturquoise;
        }
        </style>
        <div class="weather-report">
            <article>
                <h2>${this._city.city_name}</h2>
                <p>${this._city.timezone}</p>
                <section>
                    <h3>Current Status: ${this._city.weather.description}</h3>
                    <h3>Temperature: ${this._city.temp}˚C</h3>
                    <h3>Wind Speed: ${this._city.wind_spd} m/s</h3>
                    <h3>Wind Direction: ${this._city.wind_dir}˚</h3>
                    <h3>Cloud Coverage: ${this._city.clouds}%</h3>
                    <h3>UV Index (0-11+): ${this._city.uv}</h3>
                    <h3>Sunrise Time: ${this._city.sunrise} UTC+0</h3>
                    <h3>Sunset Time: ${this._city.sunset} UTC+0</h3>
                </section>
            </article>
        </div>`;
    }
}

customElements.define("weather-item", WeatherItem);

