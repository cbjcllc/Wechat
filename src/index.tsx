import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import reportWebVitals from './reportWebVitals'
import { Routes } from './routes'
import { store } from './store/store'

import 'antd/dist/antd.css'
import 'animate.css'

import './default.scss'
import './index.css'

const Root = () => {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
