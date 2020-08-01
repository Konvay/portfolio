import { combineReducers } from 'redux'
import * as faultReducer from './fault.reducers'

const allReducers = combineReducers({...faultReducer});

export default allReducers;