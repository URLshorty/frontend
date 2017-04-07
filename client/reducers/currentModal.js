function currentModal(state = {}, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return action.modal
    default:
      return state
  }
}

export default currentModal
