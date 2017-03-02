import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import inputURLs from './inputURLs';
import topTrendingURLs from './topTrendingURLs';
import topRequestedURLs from './topRequestedURLs';

const rootReducer = combineReducers({
  inputURLs, 
  topTrendingURLs, 
  topRequestedURLs, 
  routing: routerReducer 
});

export default rootReducer;
