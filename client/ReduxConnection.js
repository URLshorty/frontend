import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreators'
import Main from './components/Main'

// connect will connect the data from the store into whatever level component needed
// MAKE THIS STATE MATCH STORE STATE FOR THE WIN
function mapStateToProps(state) {
  return {
    api: state.api,
    inputURLs: state.inputURLs, // has bool in it (KEEP IT FLAT FOR THE WIN)
    topTrendingURLs: state.topTrendingURLs,
    chatMessages: state.chatMessages,
    userData: state.userData,
    currentModal: state.currentModal,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const ReduxConnection = connect(mapStateToProps, mapDispatchToProps)(Main)

export default ReduxConnection
