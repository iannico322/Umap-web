import { configureStore } from '@reduxjs/toolkit'
import usersCredReducer from './userCredentials'
import userSearch  from './userSearch'
import umapRoomReducer  from './umapRoom'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig ={
  key:"root",
  version:1,
  storage,
}
const reducer = combineReducers({
  user: usersCredReducer,
  search : userSearch,
  room: umapRoomReducer,

})

const persistedReducer =  persistReducer(persistConfig,reducer)

export default configureStore({
  reducer: persistedReducer
})