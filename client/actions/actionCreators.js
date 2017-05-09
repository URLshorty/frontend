// does not hot reload

// User management
export function updateUserData(updateObj) {
  return {
    type: 'UPDATE_USER_DATA',
    updateObj,
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  }
}

export function clearUser(user) {
  return {
    type: 'CLEAR_USER',
    user,
  }
}

// URLs
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

// Modals
export function setCurrentModal(modalObj) {
  return {
    type: 'SET_MODAL',
    modalObj,
  }
}

export function toggleHook() {
  return {
    type: 'TOGGLE_HOOK',
  }
}

// Chat
export function addMessageToChat(message) {
  return {
    type: 'ADD_MESSAGE_TO_CHAT',
    message,
  }
}
