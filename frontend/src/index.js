import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import store from './store/index'
import { Provider } from 'react-redux'
import configStore from './store/index'
import { PersistGate } from 'redux-persist/integration/react'


const { store, persistor } = configStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
