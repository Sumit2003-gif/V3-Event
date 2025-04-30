// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './Event Project/redux login/store'
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import store from './Event Project/redux login/store'
import { BrowserRouter } from "react-router-dom";
import CreateNavbar from "./Event Project/createNacbar";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CreateNavbar/>
    </BrowserRouter>
  </Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
