import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css'; // Make sure this imports your Tailwind CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
