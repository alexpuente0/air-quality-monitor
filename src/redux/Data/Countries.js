import { createSlice } from '@reduxjs/toolkit';
import locations from './LocationData';

const initialState = locations;

const countriesSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
});

export const { getCountries, changeCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
