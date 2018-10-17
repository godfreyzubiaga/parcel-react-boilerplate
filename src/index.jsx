import React from 'react';
import { render } from 'react-dom';
import mountPoint from './utils/mountPoint';

const App = () => {
  return (
    <div>
      <h1>Start Here!</h1>
    </div>
  );
};

render(<App />, mountPoint());
