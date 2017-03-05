function currentModal(state={}, action) {
  // console.log("state:")
  // console.log(state)
  // console.log("action:")
  // console.log(action)
  switch(action.type) {
    case 'SET_MODAL':
      return action.modal
    default:
      return state
  }
}

export default currentModal
