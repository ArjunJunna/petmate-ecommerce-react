import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './Context/dataContext';
import { AuthProvider } from './Context/authContext';

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataContextProvider>
        <Router>
          <App />
        </Router>
      </DataContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
