import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import UserProvider from './context/UserProvider'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
  {/* <React.StrictMode> */}
      <App />
  {/* </React.StrictMode> */}
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
