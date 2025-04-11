import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArrowFun from './ArrowFunction/ArrowFunction';
import Assign from './assignment/Assignment';
import CallbackFun from './callbackFunction/CallbackFun';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ArrowFun/>
    <Assign/>
    <CallbackFun/>
  </React.StrictMode>
);

reportWebVitals();
