import React from 'react';
import '../assets/App.css';

const App = () => {
  return (
    <div className="center">
      <h1>This is a ReactJS with ParcelJS Boilerplate</h1>
      <h2 id="subtext">This is a subtext</h2>
      <span id="line" />
      <div id="instruction">
        <p>Edit src/components/App.jsx to start</p>
        <p>Edit assets/src/App.css to style</p>
      </div>
      <div id="react-logo" />
      <p>
        More information about ReactJS @{' '}
        <a className="link" href="https://reactjs.org/" target="_blank">
          https://reactjs.org/
        </a>
      </p>
    </div>
  );
};

export default App;
