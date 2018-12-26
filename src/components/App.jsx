import React from 'react';
import '../assets/App.css';

const App = () => {
  return (
    <div className="container">
      <h1 id="title">This is a ReactJS with ParcelJS Boilerplate</h1>
      <h2 id="subtext">This is a subtext</h2>
      <span id="line" />
      <div id="instruction">
        <p>Edit src/components/App.jsx to start</p>
        <p>Edit src/assets/App.css to change styles</p>
      </div>
      <div id="react-logo" />
      <div id="information">
        <p>
          More information about ReactJS @
          <a className="link" href="https://reactjs.org/" target="_blank">
            Official ReactJS Website
          </a>
        </p>
        <p id="footer">
          You can know more about me @
          <a
            className="link"
            id="footer"
            href="https://godfreyzubiaga.github.io"
            target="_blank">
            My Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
