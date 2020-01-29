/**
 * creates data rows from weatherdata
 * @param weatherData
 * @returns {({name: string, value: *}|{name: string, value: string}|{name: string, value: string}|{name: string, value: string}|{name: string, value: string})[]}
 */
export const createRows = weatherData => [
    { name: 'City', value: weatherData.name },
    { name: 'Country', value: weatherData.sys.country },
    { name: 'Temp.', value: `${weatherData.main.temp} C°` },
    { name: 'Temp. feels like', value: `${weatherData.main.feels_like} C°` },
    { name: 'Temp. min', value: `${weatherData.main.temp_min} C°` },
    { name: 'Temp. max', value: `${weatherData.main.temp_min} C°` },
];

/**
 * Map searchquery to searchparameter
 * @param query
 * @returns {*}
 */
export const mapQueryToSearchParams = query => {
    const queryParts = query.split(',', 2);

    return queryParts.length > 1
        ? { city: queryParts[0].trim(), country: queryParts[1].trim() }
        : { city: queryParts[0].trim() };
};
