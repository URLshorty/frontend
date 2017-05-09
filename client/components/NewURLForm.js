import React from 'react'
import NewURLsList from './NewURLsList'

export default class NewForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    const inputURL = this.refs.inputURL.value;
    if ( inputURL.length > 0 ) {
      this.refs.inputURL.value = ""
      this.props.enableSubmitNewURL(false)

      fetch(`${process.env.API_URL}/api/urls?address=${inputURL}`, {
        method: 'POST',
        credentials: 'include',
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        if ( json.error ) {
          this.props.setCurrentModal({
            name: 'messageModal',
            message: json.error,
          })
          this.logout()
        } else {
          this.props.inputURL({
            address: inputURL,
            shortened: json.newUserUrl.shortened,
            timesShortened: json.url.requests,
          })
          if (this.props.leastMostShortened <= json.url.requests) {
            this.props.fetchUrlsList('most-shortened')
          }
        }
      })
      .catch((er) => {
          this.props.setCurrentModal({
            name: 'messageModal',
            message: "" + er,
          })
      })

    }
  }

  logout() {
    fetch(`${process.env.API_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    this.props.clearUser()
  }

  checkSubmitEnabled() {
    this.refs.inputURL.value.length > 0 ? this.props.enableSubmitNewURL(true) : this.props.enableSubmitNewURL(false)
  }

  render() {
    return (
      <div>
        <form id="new-url-form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            ref="inputURL"
            placeholder="http://example.com"
            onChange={this.checkSubmitEnabled.bind(this)}
          />

          <input type="submit" value="Shorten" disabled={!this.props.inputURLs.submitNewEnabled} />

        </form>

        <NewURLsList {...this.props} />

      </div>
    )
  }
}
