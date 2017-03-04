import React from 'react';

import Header from './Header';
import ModalConductor from './ModalConductor';


export default class Main extends React.Component {
  // ES2015 provides a default class constructor if one is not specified.

  render() {
    return (
      <div id="main">

        <ModalConductor currentModal={this.props.currentModal} />

        <Header setCurrentModal={this.props.setCurrentModal}/>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)} {/* study what's going on here more */}

        <div id="footer">Thanks for visiting!</div>

      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
};
