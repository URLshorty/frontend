function currentModal(state = {}, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return {...action.modalObj}
    default:
      return state
  }
}

export default currentModal
