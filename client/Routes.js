import React from 'react';

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
// binds react and redux (which can be used with anything not just react)
import { Provider } from 'react-redux';
// curly bracket for named export instead of default export, exported redux history instead of browserHistory
import store, { history } from './store';

// Import Components
import ReduxConnection from './ReduxConnection';
import NewURLForm from './components/NewURLForm';
// import SomeComponentEtc from './components/SomeComponentEtc';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={ReduxConnection}>
            <IndexRoute component={NewURLForm}></IndexRoute>
          </Route>
        </Router>
      </Provider>
    )
  }
}
            // <Route path="/some-other-component" component={SomeComponentEtc}></Route>
