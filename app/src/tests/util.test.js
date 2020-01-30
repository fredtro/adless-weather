import { mapQueryToSearchParams } from '../util';

test('map query to search params', () => {
    expect(mapQueryToSearchParams('berlin')).toEqual({ city: 'berlin' });
    expect(mapQueryToSearchParams('berlin, de')).toEqual({ city: 'berlin', country: 'de' });
    expect(mapQueryToSearchParams('berlin,')).toEqual({ city: 'berlin' });
    expect(mapQueryToSearchParams('')).toEqual({});
});
