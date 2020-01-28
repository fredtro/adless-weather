import axios from 'axios';

/**
 * create auth api instance
 */
export const api = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL || 'http://localhost:3000',
});

export const search = ({ city, country } = {}) =>
    api.get('/search', { params: { city, country } }).then(response => response.data);
