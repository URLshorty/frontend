import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/rootReducer';

// create an object for the default state
// this is where data is imported for initial state
import trendingURLs from './data/trendingURLs'
import requestedURLs from './data/requestedURLs'
import chatMessages from './data/sampleChat'
import user from './data/sampleUser'

// any changes here need to be added in ./ReduxConnection.js too
const defaultState = {
  inputURLs: {
    urls: [],
    submitNewEnabled: false, // use React state for ephemeral stuff like this
  },
  topTrendingURLs: trendingURLs,
  topRequestedURLs: requestedURLs,
  chatMessages: chatMessages,
  userData: {
    id: user.id,
    username: user.username,
    email: user.email,
    is_admin: user.is_admin,
    created_at: user.created_at,
  }, 
}

// last arg enables Redux Devtools Chrome extension store enhancement (lots of enhancements available) - linter has to be ok with those trailing underscores
// CAUTION: right now actions in redux devtools queue may be replayed on hot reload
const store = createStore(rootReducer,  defaultState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export const history = syncHistoryWithStore(browserHistory, store);

// enable Hot Reloading of reducers
if(module.hot) {
  module.hot.accept('./reducers/rootReducer',() => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
