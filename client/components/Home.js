import React from 'react'

import NewURLForm from './NewURLForm'
import URLsListBox from './URLsListBox'
import ChatBox from './ChatBox'

export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mostShortened: [],
      mostVisited: [],
    }
    this.fetchUrlsList('most-shortened')
    this.fetchUrlsList('most-visited')
  }

  fetchUrlsList(setAddress) {
    fetch(`${process.env.API_URL}/api/${setAddress}`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        if (setAddress === "most-shortened") {
          console.log(this)
          this.setState({
            ...this.state,
            mostShortened: json,
          })
        } else if (setAddress === "most-visited") {
          this.setState({
            ...this.state,
            mostVisited: json,
          })
        }
      })
      .catch((er) => console.log(er)) // start using this https://github.com/visionmedia/debug
  }

  render() {
    return (
      <div id="home">

        <NewURLForm
          inputURL={this.props.inputURL}
          inputURLs={this.props.inputURLs}
          enableSubmitNewURL={this.props.enableSubmitNewURL}
          fetchUrlsList={this.fetchUrlsList.bind(this)}
          leastMostShortened={(() => {
              let least = this.state.mostShortened[this.state.mostShortened.length-1]
              if (least) {
                return least.requests
              }
              return 0
            })()
          }
        />

          {/*
          leastMostVisited={(() => {
              let least = this.state.mostVisited[this.state.mostVisited.length-1]
              if (least) {
                return least.visits
              }
              return 0
            })()
          }
        */}

        <div id="home-display-boxes">

          <URLsListBox
            className="most-visited-list"
            title="Most Visited Links"
            urlsList={this.state.mostVisited}
          />

          { /* will have to continuously check in for most visited
          list updates */ }
          <URLsListBox
            className="most-shortened-list"
            title="Most Shortened"
            urlsList={this.state.mostShortened}
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
