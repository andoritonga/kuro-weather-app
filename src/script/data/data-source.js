class DataSource {
    static searchWeather(kota) {
        return fetch(`https://api.weatherbit.io/v2.0/current?city=${kota}&key=c9b7837a86364c8d8d3ab2730a4adf6a`)
        
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.data) {
                return Promise.resolve(responseJson.data);
            } else {
                return Promise.reject(`${kota} is not found`);
            }
        })
    }
 }
  
 export default DataSource;