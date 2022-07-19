import './weather-item.js';
class WeatherResult extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set cities(cities) {
        this._cities = cities;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;    
    }
    render() {
        this.shadowDOM.innerHTML = "" ;
        this._cities.forEach(city => {
            const cityItemElement = document.createElement("weather-item");
            cityItemElement.city = city
            this.shadowDOM.appendChild(cityItemElement);
        })
    }
}

customElements.define("weather-result", WeatherResult);