import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root')
);
