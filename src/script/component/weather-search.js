class WeatherBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
            padding: 16px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            top: 10px;
            background-color: darkcyan;
            margin-top: 20px;
        }
       
        .search-container > input {
            width: 80%;
            padding: 14px;
            border-radius: 10px;
            border:2px solid black;
            font-weight: bold;
            position: center;
            margin: auto;
            background-color: vanila;
        }
       
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid black;
        }
       
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
       
        .search-container >  input::placeholder {
            color: cornflowerblue;
            font-weight: normal;
        }
       
        .search-container > button {
            width: 80%;
            margin: auto;
            margin-top: 5px;
            cursor: pointer;
            position: center;
            padding: 14px;
            background-color: darkturquoise;
            color: black;
            border-radius: 10px;
            border: 2px solid black;
            text-transform: uppercase;
            font-weight: 500;
        }
        
        .search-container > button:hover{
            font-weight: bolder;
        }
       
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
       
            .search-container > input {
                width: 70%;
                margin-bottom: 5px;
            }
       
            .search-container > button {
                width: 70%;
            }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Input: City Name / City Name, State (Optional) / City Name, State, Country (Optional)"  id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Find Current Weather</button>
        </div>
        `;
        
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("weather-search", WeatherBar);