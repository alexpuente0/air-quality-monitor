import PropTypes from 'prop-types';
import Location from './Location';

const LocationList = (props) => {
  const { location, type, countries } = props;

  if (countries) {
    return (
      <div className="countries-list">
        {countries.map((country) => (
          <Location key={country.name} location={country.name} aqi={country.aqi} />
        ))}
      </div>
    );
  }

  return (
    <div className={type}>
      <Location location={location} type={type} />
    </div>
  );
};

export default LocationList;

LocationList.propTypes = {
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      aqi: PropTypes.number.isRequired,
      iso2: PropTypes.string.isRequired,
    }),
  ).isRequired,
  cities: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        aqi: PropTypes.number.isRequired,
      }),
    ),
  }).isRequired,
};
