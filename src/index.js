import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import { getUser } from './redux/actions/userAction';


window.store = store;

var moment = require('moment');

window.moment = moment;

if (sessionStorage.getItem('auth')) {
  var data = sessionStorage.getItem('auth')
  store.dispatch({ type: 'SET_USER', user: JSON.parse(data) })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept()
}