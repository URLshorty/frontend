import React from 'react'

import sampleChat from '../data/sampleChat'

export default class ChatBox extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    document.getElementById("chat-window").innerHTML += `<p>${this.refs.message.value}</p>`
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight
    this.refs.message.value = "";
  }

  render() {
    return (
      <div id="chat-box">
        <div id="chat-window">{sampleChat.map((x)=> <p>{x}</p> )}</div>
        <form 
          onSubmit={this.handleSubmit.bind(this)}
          id="message-form"
        >
          <input 
            type="text" 
            ref="message" 
            placeholder="type message here"
          />

          <input type="submit" hidden />

        </form>
      </div>
    );
  }
}
