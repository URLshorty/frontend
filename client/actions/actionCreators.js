// does not hot reload

// could trigger a recheck on most shortened/visited urls lists
export function inputURL(inputURL) {
  return {
    type: 'URL_INPUT',
    inputURL,
  }
}

export function enableSubmitNewURL(bool) {
  return {
    type: 'ENABLE_SUBMIT_NEW_URL',
    allowed: bool,
  }
}

export function updateUserData(updateObj) {
  return {
    type: 'UPDATE_USER_DATA',
    updateObj,
  }
}

export function setCurrentModal(modal) {
  return {
    type: 'SET_MODAL',
    modal,
  }
}

export function addMessageToChat(message) {
  return {
    type: 'ADD_MESSAGE_TO_CHAT',
    message,
  }
}
