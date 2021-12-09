import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';
import ContactState from './context/contact/ContactState';


const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
