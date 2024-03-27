console.log("main.jsx");
import React from 'react'
//import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {render } from 'react-dom';
//import './index.css'
const root = document.getElementById("root");
render(<App />, root);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/