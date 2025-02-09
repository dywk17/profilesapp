import React from 'react';
import meme from './assets/wtf.jpeg'
import nana from './assets/wrong.gif'
function FirstButtonPage() {
  return (
    <div className="first-button-page">
      <div className="content">
        <div className="image-row">
          <img
            src={meme} // First image
            alt="First Image"
            className="centered-image"
          />
          <img
            src={nana} // Second image
            alt="Second Image"
            className="centered-image"
          />
        </div>
        <p className="message">You chose wrong! You need to go back!</p>
      </div>
    </div>
  );
}

export default FirstButtonPage;