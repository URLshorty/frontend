import React from 'react'

export default class signUpModal extends React.Component {

  signUpSubmit(e) {
    e.preventDefault()
    console.log(this.refs.username.value)
  }

  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal">

          <div className="modal-header">
            <h1 className="login">Sign Up</h1>
          </div>

          <div className="modal-content">

            <form id="login-form" onSubmit={this.signUpSubmit.bind(this)}>

              <input 
                id="usernameField"
                type="text" 
                ref="username" 
                placeholder="username"
              />

              <input 
                id="email"
                type="text" 
                ref="email" 
                placeholder="email"
              />

              <input 
                id="password"
                type="password" 
                ref="email" 
                placeholder="password"
              />

              <input 
                id="confirm-password"
                type="password" 
                ref="confirm-password" 
                placeholder="confirm password"
              />

              <input type="submit" />

            </form>

          </div>

          <div className="modal-footer"></div>

        </div>
      </div>
    );
  }
}
