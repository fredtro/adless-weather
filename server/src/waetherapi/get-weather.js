export default function makeGetWeatherData(api) {
    return async function getWeatherData({ city, country } = {}) {
        if (!city) {
            throw { code: 400, message: 'You must supply a city' };
        }

        try {
            return await api
                .get(`/weather`, { params: { q: [city, country].join(',') } })
                .then(response => response.data);
        } catch (e) {
            throw e.response.data !== undefined ? e.response.data : { code: 400, message: 'Unknown error occured.' };
        }
    };
}
