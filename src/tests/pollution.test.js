import store from '../redux/configureStore';
import { fetchCountryPollutionSuccess } from '../redux/pollution/pollution';

const Mocked = {
  countryName: 'NIGERIA',
  coord: {
    lon: 9.082,
    lat: 8.6753,
  },
  list: [
    {
      main: {
        aqi: 2,
      },
      components: {
        co: 447.27,
        no: 0.05,
        no2: 0.77,
        o3: 31.11,
        so2: 0.27,
      },
    },
  ],
};

describe('Store', () => {
  it('Country Pollution Reducer Has correct state', () => {
    store.dispatch(fetchCountryPollutionSuccess(Mocked));
    expect(
      store.getState().countryPollutionReducer.countryPollution.countryName,
    ).toBe('NIGERIA');
  });
});
