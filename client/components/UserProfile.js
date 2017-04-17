import React from 'react'

import SingleFieldForm from './SingleFieldForm.js'

export default class UserProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      username: '',
      email: '',
      created_at: ' ', // mandatory space so not undefined
    }
  }

  componentWillMount() {
    this.retrieveData()
  }

  retrieveData() {
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
            id: json.id,
            username: json.username,
            email: json.email,
            created_at: json.created_at,
        })
        }
      })
      .catch((er) => console.log(er))
  }

  // executes in context (with props and state) of child
  newUsernameSubmit(e) {
    e.preventDefault()
    let url = `${process.env.API_URL}/api/users/${this.props.currentUser.id}?username=${this.refs.username.value}`
    fetch(url, {
        method: 'PATCH', // must be caps
        credentials: 'include',
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // handle second error at api
        if (json.error || json.name === "error") {
          this.props.setCurrentModal({
            name: "messageModal",
            message: "Sorry. Something went wrong.",
          })
        } else {
          // update user state in store
          this.props.updateUserData({
            newUsername: this.refs.username.value
          })
          // update user and field state on component
          this.setState({
            ...this.state,
            value: this.refs.username.value,
            usernameUpdateField: false,
          })
          this.toggleUpdateField()
        }
      })
      .catch((er) => {
        this.props.setCurrentModal({
          name: "messageModal",
          message: "" + er,
        })
      })
  }

  newEmailSubmit(e) {
    e.preventDefault()
    let url = `${process.env.API_URL}/api/users/${this.props.currentUser.id}?email=${this.refs.email.value}`
    fetch(url, {
        method: 'PATCH', // must be caps
        credentials: 'include',
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // handle second error at api
        if (json.error || json.name === "error") {
          this.props.setCurrentModal({
            name: "messageModal",
            message: "Sorry. Something went wrong.",
          })
        } else {
          // update user state in store
          this.props.updateUserData({
            newEmail: this.refs.email.value
          })
          // update user and field state on component
          this.setState({
            ...this.state,
            value: this.refs.email.value,
            usernameUpdateField: false,
          })
          this.toggleUpdateField()
        }
      })
      .catch((er) => {
        this.props.setCurrentModal({
          name: "messageModal",
          message: "" + er,
        })
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

          <SingleFieldForm
            name="username"
            value={this.state.username}
            profileId={this.state.id}
            currentUser={this.props.user}
            submit={this.newUsernameSubmit}
            setCurrentModal={this.props.setCurrentModal}
            updateUserData={this.props.updateUserData} />

        <SingleFieldForm
            name="email"
            value={this.state.email}
            profileId={this.state.id}
            currentUser={this.props.user}
            submit={this.newEmailSubmit}
            setCurrentModal={this.props.setCurrentModal}
            updateUserData={this.props.updateUserData} />

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
