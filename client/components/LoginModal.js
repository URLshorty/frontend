import React from 'react'

export default class LoginModal extends React.Component {

  loginSubmit(e) {
    e.preventDefault()
    console.log(this.refs.username.value)
  }

  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal">

          <div className="modal-header">
            <h1 className="login">Log In</h1>
          </div>

          <div className="modal-content">

            <form id="login-form" onSubmit={this.loginSubmit.bind(this)}>

              <input
                id="usernameField"
                type="text"
                ref="username"
                placeholder="username"
              />

              <input
                id="password"
                type="password"
                ref="email"
                placeholder="password"
              />

              <input type="submit" />

            </form>

          </div>

          <div className="modal-footer" />

        </div>
      </div>
    )
  }
}
