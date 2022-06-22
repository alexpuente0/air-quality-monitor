import { useSelector } from 'react-redux';
import { useState } from 'react';
import Template from './headImage';
import Continents from './continents';
import Search from './search';
import './styles/home.scss';

const Home = () => {
  const state = useSelector((state) => state.allReducer);
  const AIR_QUALITY = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className="main">
      {state.loading ? (
        <div data-testid="spinner" className="ring" />
      ) : (
        <>
          {' '}
          <Template />
          <h1 className="title">Air Quality levels:</h1>
          <ul className="air-quality">
            {AIR_QUALITY.map((quality, index) => (
              <li key={quality}>
                <p>{quality}</p>
                <small>
                  Index:
                  {` ${index + 1}`}
                </small>
              </li>
            ))}
          </ul>
          <Search handleSearch={handleSearch} data={value} />
          <Continents data={value} />
        </>
      )}
    </main>
  );
};
export default Home;
