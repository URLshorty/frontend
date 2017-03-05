import React from 'react'

import LoginModal from './LoginModal.js'
import PictureUploadModal from './PictureUploadModal.js'

export default class ModalConductor extends React.Component {

  renderModal(modal) {
    switch (this.props.currentModal) {
      case 'login':
        this.setCloseModal() // why doesn't this cause a memory leak
        // class set here on React DOM not responsive to its CSS, As a result modal-backdrop el is in LoginModal etc. (research)
        return <LoginModal className="modal-backdrop" /> 
      case 'pictureUploadModal':
        this.setCloseModal()
        return <PictureUploadModal />
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
