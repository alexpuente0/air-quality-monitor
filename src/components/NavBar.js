import { useNavigate } from 'react-router-dom';
import {
  IoCloseSharp,
  IoChevronBackSharp,
  IoContrastOutline,
} from 'react-icons/io5';
import { useState } from 'react';
import './styles/navBar.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState({
    color: [' Magenta', ' Cyan'],
    isMagenta: true,
  });

  const handleTheme = () => {
    if (theme.isMagenta) {
      document.documentElement.style.setProperty('--primary-color', '#2a4476');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#2a4476',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#3d60a4');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#3d60a4',
      );
    } else {
      document.documentElement.style.setProperty('--primary-color', '#7a183e');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#ad0247',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#ac144e');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#ac144e',
      );
    }
    setTheme({ ...theme, isMagenta: !theme.isMagenta });
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <IoChevronBackSharp
            className="nav-icon"
            onClick={() => navigate(-1)}
          />
        </li>
        <li className="nav-item">Air Quality World Monitor</li>
        <li>
          <IoContrastOutline
            data-testid="icon"
            className="nav-icon"
            onClick={() => setModalVisible(!modalVisible)}
          />
        </li>
      </ul>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <button className="theme" onClick={handleTheme} type="button">
              Change Theme to
              {theme.isMagenta ? theme.color[1] : theme.color[0]}
            </button>
            <IoCloseSharp
              className="close"
              onClick={() => setModalVisible(!modalVisible)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
