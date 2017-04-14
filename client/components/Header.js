import React from 'react'
import { Link, IndexLink } from 'react-router'

import NavLink from './NavLink'

export default class Header extends React.Component {

  showModal(modalName) {
    this.props.setCurrentModal(modalName)
  }

  logout() {
    fetch(`${process.env.API_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    this.props.setUser({
      id: null,
      username: null,
      is_admin: null,
    })
  }

  render() {
    return (
      <div id="header">

        <div className="logo">
          <Link to="/"><span>URL</span>.shorty</Link>
        </div>

        <div id="nav-bar">
          <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>

          { !this.props.user.id &&
            <NavLink onClick={this.showModal.bind(this, {name: "loginModal"})} className="nav-link" activeClassName="active">Login</NavLink>
          }

          { !this.props.user.id &&
            <NavLink onClick={this.showModal.bind(this, {name: "signUpModal"})} className="nav-link" activeClassName="active">Sign Up</NavLink>
          }

          { this.props.user.id &&
            <NavLink to={`/users/${this.props.user.id}`} className="nav-link" activeClassName="active">{`${this.props.user.username}'s Profile`}</NavLink>
          }

          { this.props.user.id &&
            <NavLink onClick={this.logout.bind(this)} className="nav-link" activeClassName="active">Logout</NavLink>
          }

           <NavLink onClick={this.showModal.bind(this, {name: "messageModal", message: "laksdhfklsadjfh"})} className="nav-link" activeClassName="active">test</NavLink>

        </div>

      </div>
    )
  }
}
