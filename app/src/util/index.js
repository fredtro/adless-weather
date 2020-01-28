export const createRows = weatherData => [
    { name: 'City', value: weatherData.name },
    { name: 'Country', value: weatherData.sys.country },
    { name: 'Temp.', value: `${weatherData.main.temp} C°` },
    { name: 'Temp. feels like', value: `${weatherData.main.feels_like} C°` },
    { name: 'Temp. min', value: `${weatherData.main.temp_min} C°` },
    { name: 'Temp. max', value: `${weatherData.main.temp_min} C°` },
];
