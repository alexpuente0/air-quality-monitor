import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import locations from './LocationData';

const initialState = locations;

export const getAirData = createAsyncThunk(
  'countries/getDgetAirData',
  async (filteredCountries) => {
    console.log('fetch activated');
    const promiseArray = filteredCountries.map((country) => fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${country.lat}&lon=${country.long}&appid=c693592b5863b61ad4b1c205a439ebcc`));
    const res = await Promise.all(promiseArray);
    const data = await Promise.all(res.map((response) => response.json()));
    return filteredCountries.map((country, i) => ({ ...country, aqi: data[i].list[0].main.aqi }));
  },
);

const countriesSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: {
    [getAirData.fulfilled]: (state, action) => {
      const keys = Object.keys(state);
      keys.forEach((key) => {
        if (state[key].length === action.payload.length) {
          state[key] = action.payload;
        }
      });
    },
  },
});

export default countriesSlice.reducer;
