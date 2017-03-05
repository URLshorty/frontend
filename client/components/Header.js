import React from 'react'
import { Link, IndexLink } from 'react-router'

import NavLink from './NavLink'

export default class Header extends React.Component {

  showModal(modalName) {
    this.props.setCurrentModal(modalName)
  }

  render() {
    return (
      <div id="header">
        
        <div id="nav-bar">
          <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
          <NavLink onClick={this.showModal.bind(this, "loginModal")} className="nav-link" activeClassName="active">Login</NavLink>
          <NavLink onClick={this.showModal.bind(this, "signUpModal")} className="nav-link" activeClassName="active">Sign Up</NavLink>
          <NavLink to="/users/random-username" className="nav-link" activeClassName="active">Random User Profile</NavLink>
        </div>

        <h1 className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </h1>

      </div>
    )
  }
}
