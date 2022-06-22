import store from '../redux/configureStore';
import { fetchAllSuccess } from '../redux/world/world';

const mocked = [
  {
    name: {
      common: 'Germany',
      official: 'Federal Republic of Germany',
    },
    latlng: [23, 242],
    continents: ['Europe'],
  },
  {
    name: {
      common: 'China',
      official: "People's Republic of China",
    },
    latlng: [23, 242],
    continents: ['Asia'],
  },
  {
    name: {
      common: 'Senegal',
      official: 'Republic of Senegal',
    },
    latlng: [23, 242],
    continents: ['Africa'],
  },
  {
    name: {
      common: 'Guam',
      official: 'Guam',
    },
    latlng: [23, 242],
    continents: ['Oceania'],
  },
  {
    name: {
      common: 'Colombia',
      official: 'Republic of Colombia',
    },
    latlng: [23, 242],
    continents: ['South America'],
  },
  {
    name: {
      common: 'Caribbean Netherlands',
      official: 'Bonaire, Sint Eustatius and Saba',
    },
    latlng: [23, 242],
    continents: ['North America'],
  },
];

describe('Store', () => {
  it('All Reducer Has correct state', () => {
    store.dispatch(fetchAllSuccess(mocked));
    expect(store.getState().allReducer.continents.europe).toHaveLength(1);
    expect(store.getState().allReducer.continents.asia).toHaveLength(1);
    expect(store.getState().allReducer.continents.africa).toHaveLength(1);
    expect(store.getState().allReducer.continents.northamerica).toHaveLength(1);
    expect(store.getState().allReducer.continents.southamerica).toHaveLength(1);
    expect(store.getState().allReducer.continents.oceania).toHaveLength(1);
  });
});
