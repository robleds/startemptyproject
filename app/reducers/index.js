import {combineReducers} from 'redux'
import * as AuthReducer from './r_auth'

export default combineReducers(Object.assign(
    AuthReducer,
))

