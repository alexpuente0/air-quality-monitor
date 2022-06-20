import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continent" element={<Home />} />
        <Route path="/:continent/:country" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
