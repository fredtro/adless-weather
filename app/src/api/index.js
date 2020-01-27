import axios from 'axios';

/**
 * create auth api instance
 */
export const api = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL,
});

console.log(process.env.REACT_APP_WEATHER_API_BASE_URL);

export const search = ({ city, country } = {}) =>
    api.get('/health').then(response => response.data);
