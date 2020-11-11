import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './components/index.css';
import Marshrut from './components/Auth/Marshrut';
import * as serviceWorker from './components/serviceWorker';
import allreducers from '../src/redux/reducers'
const store = createStore(allreducers)
render((
  <Provider store={store}>
  <BrowserRouter>
    <Marshrut />
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
