function chatMessages(state={}, action) {
  switch(action.type) {
    case 'ADD_MESSAGE_TO_CHAT': 
      return [...state, action.message]
    default:
      return state
  }
}

export default chatMessages;
