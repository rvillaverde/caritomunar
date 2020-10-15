import authReducer from './auth'
import projectReducer from './project'
import presentationReducer from './presentation'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  presentation: presentationReducer
})

export default rootReducer
