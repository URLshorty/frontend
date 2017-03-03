import React from 'react'

export default class UserProfile extends React.Component {

  newUserSubmit(e) {
    e.preventDefault()
    console.log("user submit")
  }

  render() {
    return (
      <div id="user-profile">
        <img id="user-pic"></img>
        <div id="user-data">
          
          <div id="username">
            <span>Username</span><br />
            <span>{this.props.userData.username}</span>
          </div>
          <button>EDIT</button>

{/*          <form id="new-url-form" onSubmit={this.newUserSubmit.bind(this)}>
            <input 
              type="text" 
              ref="username" 
              placeholder={this.props.userData.username}
              disabled 
            />
            <input type="submit" hidden />
          </form>*/}

          <div id="user-email">
            <span>Email</span><br />
            <span>{this.props.userData.email}</span>
          </div>
          <button>EDIT</button>

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
