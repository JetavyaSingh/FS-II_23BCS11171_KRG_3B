import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-brand">My React App</div>
          <ul className="nav-links">
            <li>
              <NavLink to="/Home" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
