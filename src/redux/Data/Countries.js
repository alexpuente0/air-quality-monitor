import { createSlice } from '@reduxjs/toolkit';
import locations from './LocationData';

const initialState = locations;

const countriesSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
