const Location = (props) => {
  const { location, type } = props;
  return (
    <div className="location">
      <h2>
        Type:
        {type}
      </h2>
      <h3>
        Location:
        {location}
      </h3>
    </div>
  );
};

export default Location;
