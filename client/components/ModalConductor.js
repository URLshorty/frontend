import React from 'react'

import LoginModal from './LoginModal.js'
import SignUpModal from './SignUpModal.js'
import PictureUploadModal from './PictureUploadModal.js'
import MessageModal from './MessageModal.js'

export default class ModalConductor extends React.Component {

  renderModal(modal) {
    // refactor this switch
    switch (this.props.currentModal.name) {
      case 'loginModal':
        this.setCloseModal()
        // class set here on React DOM not responsive to its CSS, As a result modal-backdrop el is in LoginModal etc. (research)
        return <LoginModal className="modal-backdrop"
          user={this.props.user}
          setUser={this.props.setUser}
          setCurrentModal={this.props.setCurrentModal} />
      case 'pictureUploadModal':
        this.setCloseModal()
        return <PictureUploadModal
          setCurrentModal={this.props.setCurrentModal}
          user={this.props.user} />
      case 'signUpModal':
        this.setCloseModal()
        return <SignUpModal
          user={this.props.user}
          setUser={this.props.setUser}
          setCurrentModal={this.props.setCurrentModal} />
      case 'messageModal':
        this.setCloseModal()
        return <MessageModal
          message={this.props.currentModal.message} />
      default:
        return null
    }
  }

  setCloseModal() {
    window.onclick = (e) => {
      let modalBackdrop = document.getElementsByClassName("modal-backdrop")[0]
      if (e.target === modalBackdrop) {
        this.props.setCurrentModal(null)
      }

    }
  }

  render() {
    return (
      <div>
        {this.renderModal(this.props.currentModal)}
      </div>
    )
  }
}
