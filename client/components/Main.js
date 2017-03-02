import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import URLsListBox from './URLsListBox';
import ChatBox from './ChatBox';

export default class Main extends React.Component {
  // ES2015 provides a default class constructor if one is not specified.

  render() {
    return (
      <div id="main">
        <div id="nav-bar">
          {/* <Link to="/" className="logo"><span>URL</span>.shorty</Link> */}
          <NavLink to="/#" className="nav-link" activeClassName="active">Login</NavLink>
        </div>

        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}

        <div id="home-display-boxes">
          <URLsListBox {...this.props} className="most-visited-list" />
          <URLsListBox {...this.props} className="most-shortened-list" />
          <ChatBox {...this.props} />
        </div>

        <div id="footer"><div>Thanks for visiting!</div></div>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
};
