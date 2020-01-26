import makeGetWeatherData from './get-weather';
import axios from 'axios';

const apiKey = process.env.OPENWEATHERMAP_APIKEY || 'cfe6067a096245bb03fe7887bd6de7e8';
const apiBaseUrl = process.env.OPENWEATHERMAP_BASEURL || 'http://api.openweathermap.org/data/2.5';

axios.defaults.params = {};
axios.defaults.params['appid'] = apiKey;

const api = axios.create({
    baseURL: apiBaseUrl,
});

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['appid'] = apiKey;
    config.params['units'] = 'metric';
    return config;
});

export const getWeatherData = makeGetWeatherData(api);
