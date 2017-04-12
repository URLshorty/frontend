import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import inputURLs from './inputURLs'
import chatMessages from './chatMessages'
import userData from './userData'
import currentModal from './currentModal'

const rootReducer = combineReducers({
  inputURLs,
  chatMessages,
  userData,
  currentModal,
  routing: routerReducer,
})

export default rootReducer
