const NavBar = (props) => {
  const { history } = props;
  const handleSubmit = (direction) => {
    direction === 'forward' ? history.goForward() : history.goBack();
  };

  return (
    <nav className="nav-bar">
      <button onClick={() => handleSubmit('forward')}>Back</button>
      <button onClick={() => handleSubmit()}>Forward</button>
    </nav>
  );
};

export default NavBar;
