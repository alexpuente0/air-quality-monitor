/* eslint-disable */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAirData } from '../redux/Data/Countries'
import LocationList from './LocationList';

const Container = (props) => {
  const countries = useSelector((state) => state.countries);

  const { continent, country } = props;

  const dispatch = useDispatch();
  let filteredCountries;

  if(continent && !country) {
    filteredCountries = countries[continent];
  }

   useEffect(() => {
     const countriesHaveAQI = filteredCountries?.some((country) => country.aqi);
     if (filteredCountries && !countriesHaveAQI)
       dispatch(getAirData(filteredCountries));
   }, [dispatch, filteredCountries]);
   
  if (country) {
    return (
      <div>
        <LocationList location={country} type="detail" />
      </div>
    );
  }
  if (continent) {
    return (
      <div className="container">
        <div>
          <LocationList location={continent} type="detail" />
        </div>
        <div>
          <LocationList countries={filteredCountries} type="list" />
        </div>
      </div>
    );
  }
  return (
    <div className="continents">
      <Link to="/AF">Africa</Link>
      <Link to="/AS">Asia</Link>
      <Link to="/EU">Europe</Link>
      <Link to="/NA">North America</Link>
      <Link to="/OC">Oceania</Link>
      <Link to="/SA">South America</Link>
      <Link to="/AN">Antartica</Link>
    </div>
  );
};

export default Container;
