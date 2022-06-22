import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CounterContextProvider } from './context/counterContext';
import { StockContextProvider } from './context/stockContext';
import store from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
  <StockContextProvider>
  <CounterContextProvider>
  {/* <Provider context={MyCounter} store={store}> */}
  <Provider store={store}>
   
    <App />
    
  </Provider>
  {/* </Provider> */}
  </CounterContextProvider>
  </StockContextProvider>
  ,
  document.getElementById('root')
);



