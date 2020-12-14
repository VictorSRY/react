import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import counter from './store/reducer/counter';
import result from './store/reducer/result';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mainReducer =combineReducers({count:counter,result:result})
const logger = store=>{
  return next=>{
    return action =>{
      console.log("middle", action)
      const result=next(action)
      console.log("middle middle", store.getState())
      return result
    }
  }
}
const store = createStore(mainReducer,composeEnhancers(applyMiddleware(logger,thunk)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
