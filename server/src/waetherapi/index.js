import makeGetWeatherData from './get-weather';
import axios from 'axios';
import { setupCache, setup, RedisStore } from 'axios-cache-adapter';
import redis from 'redis';

const apiKey = process.env.OPENWEATHERMAP_APIKEY || 'cfe6067a096245bb03fe7887bd6de7e8';
const apiBaseUrl = process.env.OPENWEATHERMAP_BASEURL || 'http://api.openweathermap.org/data/2.5';
const redisDSN = process.env.REDIS_DSN || 'redis://redis-cache';

axios.defaults.params = {};
axios.defaults.params['appid'] = apiKey;

//setup redis caching
const client = redis.createClient({
    url: redisDSN,
});
const store = new RedisStore(client);
const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    store,
});
const api = axios.create({
    baseURL: apiBaseUrl,
    adapter: cache.adapter,
});

api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['appid'] = apiKey;
    config.params['units'] = 'metric';
    return config;
});

export const getWeatherData = makeGetWeatherData(api, {
    cache: {
        maxAge: 2 * 60 * 1000, // 2 min
        exclude: { query: false },
    },
});
