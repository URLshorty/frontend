import React from 'react';

import Header from './Header';


export default class Main extends React.Component {
  // ES2015 provides a default class constructor if one is not specified.

  render() {
    return (
      <div id="main">

        <Header />

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)} {/* study what's going on here more */}

        <div id="footer"><div>Thanks for visiting!</div></div>

      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
};
