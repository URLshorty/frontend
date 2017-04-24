import React from 'react'

import Header from './Header'
import ModalConductor from './ModalConductor'

export default class Main extends React.Component {

  componentWillMount() {
    this.mapAuthTokenToState()
  }

  mapAuthTokenToState() {
    if (document.cookie) {
      const cookieString = document.cookie.slice(document.cookie.indexOf("{"))
      const user = JSON.parse(cookieString)
      this.props.setUser(user)
    }
  }

  render() {
    return (
      <div id="main">

        <ModalConductor
          currentModal={this.props.currentModal}
          setCurrentModal={this.props.setCurrentModal}
          currentUser={this.props.user}
          setUser={this.props.setUser}
          clearUser={this.props.clearUser}
          toggleHook={this.props.toggleHook}
          profileNumber={
            (this.props.params && this.props.params.id) ? this.props.params.id : null
          } />

        <Header
          setCurrentModal={this.props.setCurrentModal}
          user={this.props.user}
          clearUser={this.props.clearUser}
          setUser={this.props.setUser} />

        {/* because just this.props.childen doesn't get you access to the children's props  */}
        {React.cloneElement(this.props.children, this.props)}

        <div id="footer">Thanks for visiting!</div>

      </div>
    )
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
}
