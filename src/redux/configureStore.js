import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './Data/Countries';

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
