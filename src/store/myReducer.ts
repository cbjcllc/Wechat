import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { messageReducer } from './message'
import { userReducer } from './user'
import { chatroomReducer } from './chatroom'

const rootReducer = combineReducers({
  message: messageReducer,
  user: userReducer,
  chatroom: chatroomReducer,
})

const persistConfig = {
  key: 'lccbjc.com/chatroom',
  storage,
}

const finalCreateStore = () => {
  return createStore(
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk, createLogger()))
  )
}

export const store = finalCreateStore()
