import React from 'react'

export default class ChatBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatEnabled: false,
    }
  }

  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom() {
    document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight
  }

  masking() {
    if (this.state.chatEnabled) {
      return "no-chat-mask"
    } else {
      return "chat-mask"
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addMessageToChat(this.refs.message.value)
    this.refs.message.value = ""
  }

  render() {
    return (
      <div className={`chat-box ${this.masking()}`}>
        <div id={this.masking()}>
          <div id="user-icon"></div>
          <h4>Please sign in to use chat.</h4>
        </div>

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

          <input type="submit" />

        </form>
      </div>
    );
  }
}
