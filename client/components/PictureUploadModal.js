import React from 'react'
import Dropzone from 'react-dropzone'

export default class PictureUploadModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notification: '',
      files: [],
    }
  }

  // must bind
  onDrop(acceptedFiles, rejectedFiles) {
    if ( acceptedFiles.length > 0 ) {
      this.uploadPhoto(acceptedFiles[0])
      this.props.setCurrentModal(null)
    } else if ( rejectedFiles.length > 0 ) {
      this.setState({
        notification: 'Uh oh. Sorry about that. Something went wrong. Be sure to upload a picture format file that\'s less than 500KB.',
        files: acceptedFiles,
      })
    }
  }

  uploadPhoto(photo) {
    let fd = new FormData()
    fd.append('file', photo)
    fetch(`${process.env.API_URL}/api/users/${this.props.profileNumber}`, {
        method: 'PATCH', // must be caps
        credentials: 'include',
        body: fd,
      })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        if ( json.error && json.error === "No user logged in." ||
             json.error && json.error === "Session expired." ) {
          this.props.setUser({
            id: null,
            username: null,
            is_admin: null,
          })
          this.props.setCurrentModal({
            name: "messageModal",
            message: "Ooops. Looks like your session may have timed out. Please log in again",
          })
        }
        this.props.toggleHook()
      })
      .catch((er) => {
        this.props.setCurrentModal({
          name: "messageModal",
          message: "Sorry about that. Something went wrong.",
        })
      })
  }

  render() {
    return (
      <div className="modal-backdrop">
        <div className="modal">

          <div className="modal-header">
            <h1 className="login">Upload Picture</h1>
          </div>

          <div className="modal-content">

            <Dropzone
              className="dropzone"
              activeClassName="dropzone-active"
              onDrop={this.onDrop.bind(this)}
              multiple={false}
              maxSize={512000}
              accept="image/*" >
              <p>
                Drag a profile picture into this box.
              </p>
              <p>
                Or click to browse your computer.
              </p>


            </Dropzone>

          <div className="modal-notification">{this.state.notification}</div>

          </div>

          <div className="modal-footer"></div>

        </div>
      </div>
    );
  }
}
