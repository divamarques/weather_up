import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5';
const appid = '2f1f79bf8459c411c34fad89380bb1cb';

export const weatherService = {
   getCities
}

function getCities(lat =0, lon = 0, cnt= 5){
  const options = {
    url:`${baseURL}/find`,
    params: {
      lat, 
      lon,
      cnt,
      units: 'metric',
      appid
    }
  }
  return axios(options);
}
