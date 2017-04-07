import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import inputURLs from './inputURLs'
import topTrendingURLs from './topTrendingURLs'
import topRequestedURLs from './topRequestedURLs'
import chatMessages from './chatMessages'
import userData from './userData'
import currentModal from './currentModal'

const rootReducer = combineReducers({
  api: (state = {}) => state, // to be pure & http://stackoverflow.com/a/33678198
  inputURLs,
  topTrendingURLs,
  topRequestedURLs,
  chatMessages,
  userData,
  currentModal,
  routing: routerReducer,
})

export default rootReducer
