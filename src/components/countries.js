import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import worldmap from '../assets/worldmap.png';
import countryToPath from './path';
import fetchCountryPollution from '../redux/pollution/pollution';
import './styles/countries.scss';

const Countries = () => {
  const continents = useSelector((state) => state.allReducer.continents);

  const [currentContinent, setCurrentContinent] = useState(null);

  useEffect(() => {
    const current = window.location.href.slice(
      window.location.href.lastIndexOf('/') + 1,
    );
    setCurrentContinent(current);
  }, []);

  const dispatch = useDispatch();
  const handleClick = ({ id, textContent }) => {
    dispatch(fetchCountryPollution(id.split(' '), textContent));
  };

  return (
    <>
      <section className="heading">
        <img
          className="placeholder"
          src={worldmap}
          alt="Placeholder"
        />
        <h1>
          {continents[currentContinent]
            && continents[currentContinent][0].continents.toUpperCase()}
          <br />
          <span>
            {continents[currentContinent]
              && continents[currentContinent].length}
          </span>
        </h1>
      </section>
      <h2 className="title">Countries:</h2>
      <ul className="countries-grid">
        {continents[currentContinent]
          && continents[currentContinent].map(({ name, latlng }) => (
            <li key={name.common}>
              <NavLink
                id={`${latlng[0]} ${latlng[1]}`}
                to={countryToPath(name.common)}
                onClick={(event) => handleClick(event.target)}
              >
                {name.common}
              </NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Countries;
