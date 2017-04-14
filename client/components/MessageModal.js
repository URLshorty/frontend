import React from 'react'

export default class MessageModal extends React.Component {

  render() {
    let style = {'text-align': 'center'}
    return (
      <div>
        <div className="modal-backdrop">
          <div className="modal">

            <div className="modal-header">
            </div>

            <div className="modal-content" style={style}>
              {this.props.message}
            </div>

            <div className="modal-footer" />

          </div>
        </div>
      </div>
    )
  }
}
