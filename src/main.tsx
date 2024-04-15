import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap CSS
import './main.css'; //my CSS needs to be imported after the bootstrap CSS


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
