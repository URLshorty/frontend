import React from 'react'

import LoginModal from './LoginModal.js'

export default class ModalConductor extends React.Component {

  renderModal(modal) {
    switch (this.props.currentModal) {
      case 'login':
        return <LoginModal />

      default:
        return null
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
