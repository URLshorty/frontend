import React from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default class Header extends React.Component {

  loginModal() {
    this.props.setCurrentModal("login")
  }

  render() {
    return (
      <div id="header">
        
        <div id="nav-bar">
          {/* fix activeClass not working */}
          <NavLink onClick={this.loginModal.bind(this)} className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="/users/random-username" className="nav-link" activeClassName="active">Random User Profile</NavLink>
        </div>

        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

      </div>
    )
  }
}
