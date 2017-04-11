import React from 'react'

import NewURLForm from './NewURLForm'
import URLsListBox from './URLsListBox'
import ChatBox from './ChatBox'

export default class Home extends React.Component {

  render() {
    return (
      <div id="home">

        <NewURLForm
          inputURL={this.props.inputURL}
          inputURLs={this.props.inputURLs}
          enableSubmitNewURL={this.props.enableSubmitNewURL}
        />

        <div id="home-display-boxes">

          <URLsListBox
            className="most-visited-list"
            title="Most Visited Links"
            setAddress="topVisitedUrls"
            api={this.props.api}
            updateTopTrendingURLs={this.props.updateTopTrendingURLs}
          />

          <URLsListBox
            className="most-shortened-list"
            title="Most Shortened"
            setAddress="topRequestedUrls"
            api={this.props.api}
            updateTopRequestedURLs={this.props.updateTopRequestedURLs}
          />

          <ChatBox
            chatMessages={this.props.chatMessages}
            addMessageToChat={this.props.addMessageToChat}
          />

        </div>

      </div>
    )
  }
}
