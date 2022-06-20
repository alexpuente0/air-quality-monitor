import PropTypes from 'prop-types';

const Location = (props) => {
  const { location, type, aqi } = props;
  return (
    <div className={`location-${type}`}>
      <h3>{location}</h3>
      <p>{aqi}</p>
    </div>
  );
};

export default Location;

Location.propTypes = {
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  aqi: PropTypes.number.isRequired,
};
