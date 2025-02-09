import React from 'react';
import cuteFlores from './assets/cuteflores.png'
import labu from './assets/labu.gif'
function SecondPage() {
  return (
    <div className="second-page">
      <div className="content">
        <img
          src={cuteFlores} // Replace with your image URL
          alt="Second Page Image"
          className="centered-image"
        />
        <img
            src={labu} // Second image
            alt="Second Image"
            className="centered-image"
          />
        <p className="message">Thank you for accepting! I love you, come celebrate and get your Labubu!</p>
      </div>
    </div>
  );
}

export default SecondPage;