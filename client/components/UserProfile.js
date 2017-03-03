import React from 'react'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameUpdateField: false,
      emailUpdateField: false,
    }
  }


  newValueSubmit(e) {
    e.preventDefault()
    console.log("user submit")
  }

  enableInputFields(field) {
    this.setState({
      ...this.state,
      [field]: !this.state[field],
    })
    if (this.state[field]) {
      document.getElementById(field).focus(); // why doesn' this do anything, here or in the devtools console?
      document.getElementById(field).select();
    }
  }

  render() {
    return (
      <div id="user-profile">
        <img id="user-pic"></img>
        <div id="user-data">
          
          {/* the two editable fields may by refactored for DRY */}
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

              <form id="update-username-form" onSubmit={this.newValueSubmit.bind(this)}>
                <input 
                  id="usernameUpdateField"
                  type="text" 
                  ref="username" 
                  placeholder={this.props.userData.username}
                />
                <input type="submit" hidden />


              </form>

              <button onClick={this.enableInputFields.bind(this, "usernameUpdateField")}>Cancel</button>

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

              <form id="update-email-form" onSubmit={this.newValueSubmit.bind(this)}>
                <input 
                  id="emailUpdateField"
                  type="text" 
                  ref="email" 
                  placeholder={this.props.userData.email}
                />
                <input type="submit" hidden />


              </form>

              <button onClick={this.enableInputFields.bind(this, "emailUpdateField")}>Cancel</button>

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
