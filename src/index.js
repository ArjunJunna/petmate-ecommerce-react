import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './Context/dataContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <Router>
        <App />
      </Router>
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
