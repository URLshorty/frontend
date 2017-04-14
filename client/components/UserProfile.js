import React from 'react'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      usernameUpdateField: false,
      emailUpdateField: false,
      username: '',
      email: '',
      created_at: ' ', // mandatory space so not undefined
    }
  }

  componentWillMount() {
    const path = this.props.location.pathname
    // parens are regexp capture
    const id = path.match(/users\/(\d+)/)[1]
    fetch(`${process.env.API_URL}/api/users/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // handle this second error at api
        if (json.error || json.name === "error") {
          this.props.setCurrentModal({
            name: "messageModal",
            message: "Sorry. Page not found.",
          })
        } else {
          this.setState({
            ...this.state,
            username: json.username,
            email: json.email,
            created_at: json.created_at,
        })
        }
      })
      .catch((er) => console.log(er))
  }

  newUsernameSubmit(e) { // DRY this
    e.preventDefault(e)
    this.props.updateUserData({
      newUsername: this.refs.username.value
    })
    this.setState({
      ...this.state,
      usernameUpdateField: false,
    })
  }

  newEmailSubmit(e) {
    e.preventDefault(e)
    this.props.updateUserData({
      newEmail: this.refs.email.value
    })
    this.setState({
      ...this.state,
      emailUpdateField: false,
    })
  }

  enableInputFields(field) {
    this.setState({
      ...this.state,
      [field]: !this.state[field],
    })
  }

  uploadModal() {
    this.props.setCurrentModal({name: "pictureUploadModal"})
  }

  render() {
    return (
      <div id="user-profile">
        <div id="user-pic"></div>
        <button onClick={this.uploadModal.bind(this)}>UPLOAD</button>
        <div id="user-data">

          {/* DRY this */}
          { !this.state.usernameUpdateField ? (

            <div>
              <div id="username">
                <span>Username</span><br />
                <span>{this.state.username}</span>
              </div>

              <button onClick={this.enableInputFields.bind(this, "usernameUpdateField")}>EDIT</button>
            </div>

          ) : (

            <div>

              <form id="update-username-form" onSubmit={this.newUsernameSubmit.bind(this)}>
                <input
                  autoFocus
                  id="usernameUpdateField"
                  type="text"
                  ref="username"
                  placeholder={this.state.username}
                />
              <input type="submit" hidden />

              </form>


              <button onClick={this.enableInputFields.bind(this, "usernameUpdateField")}>Cancel</button>
              <button onClick={this.newUsernameSubmit.bind(this)}>Update</button>


            </div>

          )}

          { !this.state.emailUpdateField ? (

            <div>
              <div id="user-email">
                <span>Email</span><br />
                <span>{this.state.email}</span>
              </div>

              <button onClick={this.enableInputFields.bind(this, "emailUpdateField")}>EDIT</button>
            </div>

          ) : (

            <div>

              <form id="update-email-form" onSubmit={this.newEmailSubmit.bind(this)}>
                <input
                  autoFocus
                  id="emailUpdateField"
                  type="text"
                  ref="email"
                  placeholder={this.state.email}
                />
                <input type="submit" hidden />


              </form>


              <button onClick={this.enableInputFields.bind(this, "emailUpdateField")}>Cancel</button>
              <button onClick={this.newEmailSubmit.bind(this)}>Update</button>

            </div>

          )}

          <div id="user-created-date">
            <span>User Since</span><br />
            <span>
              {this.state.created_at.slice(0, this.state.created_at.indexOf('T'))}
            </span>
          </div>

          <div id="most-popular-link">
            <span>most popular link</span><br />
            <span>www.g.com</span><br />
            <span>www.google.com</span>
          </div>

        </div>
      </div>
    )
  }
}
