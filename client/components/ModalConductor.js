import React from 'react'

import TestModal from './TestModal.js'

export default class ModalConductor extends React.Component {

  renderModal(modal) {
    switch (this.props.currentModal) {
      case 'login':
        return <TestModal />

      default:
        // return null
        <div>yds</div>
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
