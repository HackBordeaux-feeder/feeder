import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


console.log('ENVS', process.env)

console.log('ENVS API', process.env.API_URL)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
