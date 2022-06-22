import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Countries from './components/countries';
import Details from './components/airStats';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:continent" element={<Countries />} />
        <Route path="/:continent/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
