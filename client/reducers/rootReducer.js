import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import inputURLs from './inputURLs'
import chatMessages from './chatMessages'
import currentModal from './currentModal'
import user from './user'

const rootReducer = combineReducers({
  user,
  inputURLs,
  chatMessages,
  currentModal,
  routing: routerReducer,
})

export default rootReducer
