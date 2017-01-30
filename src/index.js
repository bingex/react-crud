import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
