import React from 'react'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameUpdateField: false,
      emailUpdateField: false,
    }
  }

  newUsernameSubmit(e) { // look at DRY here
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
    if (this.state[field]) {
      document.getElementById(field).focus(); // why doesn' this do anything, here or in the devtools console?
      document.getElementById(field).select(); // ""
    }
  }

  uploadModal() {
    this.props.setCurrentModal("pictureUploadModal")
  }

  render() {
    return (
      <div id="user-profile">
        <div id="user-pic"></div>
        <button onClick={this.uploadModal.bind(this)}>UPLOAD</button>
        <div id="user-data">

          {/* possible refactor for DRY */}
          { !this.state.usernameUpdateField ? (

            <div>
              <div id="username">
                <span>Username</span><br />
                <span>{this.props.userData.username}</span>
              </div>

              <button onClick={this.enableInputFields.bind(this, "usernameUpdateField")}>EDIT</button>
            </div>

          ) : (

            <div>

              <form id="update-username-form" onSubmit={this.newUsernameSubmit.bind(this)}>
                <input
                  id="usernameUpdateField"
                  type="text"
                  ref="username"
                  placeholder={this.props.userData.username}
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
                <span>{this.props.userData.email}</span>
              </div>

              <button onClick={this.enableInputFields.bind(this, "emailUpdateField")}>EDIT</button>
            </div>

          ) : (

            <div>

              <form id="update-email-form" onSubmit={this.newEmailSubmit.bind(this)}>
                <input
                  id="emailUpdateField"
                  type="text"
                  ref="email"
                  placeholder={this.props.userData.email}
                />
                <input type="submit" hidden />


              </form>


              <button onClick={this.enableInputFields.bind(this, "emailUpdateField")}>Cancel</button>
              <button onClick={this.newEmailSubmit.bind(this)}>Update</button>

            </div>

          )}

          <div id="user-created-date">
            <span>User Since</span><br />
            <span>{this.props.userData.created_at}</span>
          </div>

          <div id="most-popular-link">
            <span>most popular link</span><br />
            <span>www.g.com</span><br />
            <span>www.google.com</span>
          </div>

        </div>
      </div>
    );
  }
}
