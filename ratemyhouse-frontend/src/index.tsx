import App from './components/App';
import * as serviceWorker from './serviceWorker';

import React from 'react'
import Header from './components/Header';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga';


import AppWrapper from './components/AppWrapper';

import rootSaga from './sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
        <Header>
      Text
    </Header>
    <AppWrapper>
      <App />
    </AppWrapper>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
