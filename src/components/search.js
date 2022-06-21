import PropTypes from 'prop-types';
import './styles/searchBar.scss';

const Search = ({ handleSearch, data }) => (
  <input
    className="search"
    type="search"
    value={data}
    onChange={handleSearch}
    placeholder="Search Continents"
  />
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};

export default Search;
