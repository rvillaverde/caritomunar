import authReducer from './auth'
import projectReducer from './project'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
