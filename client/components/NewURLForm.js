import React from 'react';
import NewURLsList from './NewURLsList';

export default class NewForm extends React.Component {

  handleSubmit(e) {
    console.log("handleSubmit() called");
    e.preventDefault();
    const inputURL = this.refs.inputURL.value;
    if ( inputURL.length > 0 ) {
      this.refs.inputURL.value = "";
      this.props.enableSubmitNewURL(false);
      this.props.inputURL(inputURL);
    } 
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
    );
  }
}
