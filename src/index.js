import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fragment>
      <Home />
      <ToastContainer />
    </Fragment>
  </React.StrictMode>
);
