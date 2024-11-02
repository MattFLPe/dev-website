import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/home.css'
import './components/navbar.css';
import NavigationBar from './components/navbar';
import Home from './components/home.js'
import Resume from './components/resume.js';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/resume.js" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
