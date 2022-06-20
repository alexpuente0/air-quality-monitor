import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './Data/Countries';

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [thunk],
});
