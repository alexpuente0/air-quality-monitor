import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import fetchAll, { allReducer } from './world/world';
import { countryPollutionReducer } from './pollution/pollution';

const reducer = combineReducers({
  allReducer,
  countryPollutionReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchAll());

export default store;
