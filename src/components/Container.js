import { useSelector } from 'react-redux';

const Container = () => {
  const countries = useSelector((state) => state.countries);

  const printCountries = () => {
    console.log(Object.keys(countries));
  };

  return (
    <div>
      <h1>Im the container</h1>
      <button type="button" onClick={printCountries}>
        Print
      </button>
    </div>
  );
};

export default Container;
