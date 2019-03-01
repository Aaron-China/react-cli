import { combineReducers } from 'redux'

import user from './user'

const rootReducer = {
  user,
}

export const createReducer = asyncReducers => combineReducers({
  ...rootReducer,
  ...asyncReducers,
})

export default combineReducers(rootReducer)