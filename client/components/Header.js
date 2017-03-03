import React from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default class Header extends React.Component {

  render() {
    return (
      <div id="header">
        
        <div id="nav-bar">
          <NavLink to="/#" className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="/users/random-username" className="nav-link" activeClassName="active">Random User Profile</NavLink>
        </div>

        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

      </div>
    )
  }
}
