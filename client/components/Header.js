import React from 'react'

import NavLink from './NavLink';

export default class Header extends React.Component {

  render() {
    return (
      <div id="header">
        <div id="nav-bar">
          {/* <Link to="/" className="logo"><span>URL</span>.shorty</Link> */}
          <NavLink to="/#" className="nav-link" activeClassName="active">Login</NavLink>
        </div>
      </div>
    );
  }
}
