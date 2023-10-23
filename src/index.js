import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux Imports:
import { Provider } from 'react-redux';
// Import Config Function of App Store
import {createAppStore} from './store/config/storeConfig';


const root = ReactDOM.createRoot(document.getElementById('root'));
// We create the App Store
let appStore = createAppStore();

root.render(
// Se aumento provider es porposionar un store a toda nuestra aplicacion
  <Provider store={appStore}>

 <React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
