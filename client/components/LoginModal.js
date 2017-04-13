import React from 'react'

export default class LoginModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notification: ""
    }
  }

  loginSubmit(e) {
    e.preventDefault()
    fetch(`${process.env.API_URL}/api/login?username=${this.refs.username.value}&password=${this.refs.password.value}`, {method: 'POST'})
      .then((response) => {
        return response.json()
      }).then((json) => {
        if (json.error) {
          console.log(json.error)
          this.setState({notification: "Ooops, something went wrong. Please try again."})
        } else {

          console.log('cookies: '+document.cookie)

          this.props.setUser(json)
          this.props.setCurrentModal(null)
        }
      })
      .catch((er) => {
        console.log(er)
        this.setState({notification: "Ooops, something went wrong. Please try again."})
      })
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
                required
              />

              <input
                id="password"
                type="password"
                ref="password"
                placeholder="password"
                required
              />

              <input type="submit" />

            </form>

            <div className="modal-notification">{this.state.notification}</div>

          </div>

          <div className="modal-footer" />

        </div>
      </div>
    )
  }
}
