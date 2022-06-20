import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const NavBar = (props) => {
  const navigate = useNavigate();

  const { title } = props;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      ///
    }
  };
  return (
    <nav className="nav-bar">
      <button type="button" onClick={() => navigate(-1)}>{'<'}</button>
      <h1>{title}</h1>
      <div className="actions">
        <ul>
          <li>
            <SearchBar handleKeyDown={handleKeyDown} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: '',
};
