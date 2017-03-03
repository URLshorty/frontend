import React from 'react'

export default class ChatBox extends React.Component {

  componentDidMount() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight
  }

  handleSubmit(e) {
    e.preventDefault()
    document.getElementById("chat-window").innerHTML += `<p>${this.refs.message.value}</p>`
    this.scrollToBottom()
    this.refs.message.value = ""
  }

  render() {
    return (
      <div id="chat-box">
        <div id="chat-window">{this.props.chatMessages.map((x,i)=> <p key={i} >{x}</p> )}</div>
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
