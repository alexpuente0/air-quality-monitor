import Location from '../Location/Location';

const LocationList = (props) => {
  const { location, type, countries } = props;
  console.log(type);

  if (countries) {
    return (
      <div className="countries-list">
        {countries.map((country) => (
          <Location key={country.name} location={country.name} />
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
