import React from 'react'

export default class signUpModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notification: ""
    }
  }

  signUpSubmit(e) {
    e.preventDefault()
    if (this.verifyInputs()) return

    fetch(`${process.env.API_URL}/api/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value,
        email: this.refs.email.value,
        is_admin: 0,
      }),
      })
      .then((response) => {
        return response.json()
      }).then((json) => {
        if (json.error) {
          if ( JSON.parse(json.error).constraint && JSON.parse(json.error).constraint === "users_username_unique") {
            this.setState({notification: "I'm sorry, looks like that username is taken already. Please try again."})
          } else {
            this.setState({notification: "Ooops, something went wrong. Please try again."})
          }
        } else {
          this.props.setUser(json)
          this.login(json.username, this.refs.password.value)
          this.props.setCurrentModal(null)
        }
      })
      .catch((er) => {
        console.log({loginError: er})
        this.setState({notification: "Ooops, something went wrong. Please try again."})
      })
  }

  login(username, password) {
    // consider handling login together with signup
    // at API or refactor
    fetch(`${process.env.API_URL}/api/login?username=${username}&password=${password}`, {
      method: 'POST',
      credentials: 'include',
    })
    .catch(e => {
      this.setState({
        notification: "Ooops, something went wrong. Please try again."
      })
    })
  }

  verifyInputs() {
    let invalid = false
    if ( this.refs.password.value != this.refs.confirmPassword.value ) {
      this.setState({notification: "Ooops, Those passwords don't seem to match."})
      invalid = true
    }
    return invalid
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
                required
                id="usernameField"
                type="text"
                ref="username"
                placeholder="username"
              />

              <input
                required
                id="email"
                type="text"
                ref="email"
                placeholder="email"
              />

              <input
                required
                id="password"
                type="password"
                ref="password"
                placeholder="password"
              />

              <input
                required
                id="confirm-password"
                type="password"
                ref="confirmPassword"
                placeholder="confirm password"
              />

              <input type="submit" />

            </form>

            <div className="modal-notification">{this.state.notification}</div>

          </div>

          <div className="modal-footer"></div>

        </div>
      </div>
    )
  }
}
