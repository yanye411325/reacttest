import {legacy_createStore as createStore} from 'redux'
import { applyMiddleware } from 'redux';
import rootReducer from './reducer'
// import middle from './middle'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store