import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SecondPage from './SecondPage';
import FirstButtonPage from './FirstPage';
import cutie from './assets/cutie.gif'
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <div className="App">
              <div className="content">
                <img
                  src={cutie} // Updated placeholder URL for larger image
                  alt="Placeholder"
                  className="centered-image"
                />
                <div className="button-container">
                  <Link to="/first-button-page">
                    <button className="button button-red">Heck No</button>
                  </Link>
                  <Link to="/second-page">
                    <button className="button button-green">Yes</button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        {/* Route for the first button page */}
        <Route path="/first-button-page" element={<FirstButtonPage />} />
        {/* Route for the second page */}
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;