import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, RouterContext, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from '../shared/store/configureStore'
import reducers from '../shared/reducer'
import AppRouter from '../shared/routes'

const debug = require('debug')("App:Client")
debug('Store configure is started..')

let store

if ( window.__REDUX_STORE__ ) {
  store = configureStore(window.__REDUX_STORE__)
} else {
  store = configureStore()
}

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#content')
);

debug('Done client config')

