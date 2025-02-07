import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/navbar';
import About from './Components/about';
import Header from './Components/header';
import HardSkills from './Components/hardskills';
import SoftSkills from './Components/softskills';
import Projects from './Components/projects';
import Contacts from './Components/contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/hard-skills" element={<HardSkills />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

