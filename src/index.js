import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//axios import
import axios from 'axios';

//import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import './index.css';
// redux
import { Provider } from 'react-redux';
import store from './store/index';

//toastify import
import 'react-toastify/dist/ReactToastify.css';


//axios config
//add this url before every axios call
//if a full url is provided, it will not be added
axios.defaults.baseURL = "http://localhost:3002/api";

axios.interceptors.request.use((config)=>{
  const token = localStorage.getItem('token');
  if(token){
    //if token saved in local storage, add it to the header
    config.headers["x-auth-token"] = token;
  }
  return config;
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
