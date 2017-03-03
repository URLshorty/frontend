// does not hot reload

export function inputURL(inputURL) {
  console.log("actionCreator inputURL called, dispatching URL_INPUT")
  return {
    type: 'URL_INPUT', 
    inputURL,
  }
}

export function enableSubmitNewURL(bool) {
  console.log("actionCreator enableSubmitNewURL called")
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
