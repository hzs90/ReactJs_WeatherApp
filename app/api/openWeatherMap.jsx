var axios = require('axios');

//fc6015eebc16f894113e7a5b7f585f75

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=fc6015eebc16f894113e7a5b7f585f75&units=metric';

module.exports = {
  getTemp(location){
    var encodedLocation = encodeURIComponent(location);
    var reqestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(reqestUrl).then((res) => {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error(res.data.message);
    })
  }
}
