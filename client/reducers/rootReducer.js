import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import inputURLs from './inputURLs';

const rootReducer = combineReducers({inputURLs, routing: routerReducer });

export default rootReducer;
