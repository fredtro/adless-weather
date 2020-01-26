export default function makeGetWeatherData(api) {
    return async function getWeatherData({ city, country } = {}) {
        if (!city) {
            throw new Error('You must supply a city');
        }

        try {
            return await api.get(`/weather`, { params: { q: city } }).then(response => response.data);
        } catch (e) {
            throw new Error(e.response);
        }
    };
}
