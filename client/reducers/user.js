function user(state={}, action) {
  switch(action.type) {
    case 'UPDATE_USER_DATA':
      if ( action.updateObj.newUsername ) {
        return ({
          ...state,
          username: action.updateObj.newUsername,
        })
      } else if ( action.updateObj.newEmail ) {
        return ({
          ...state,
          email: action.updateObj.newEmail,
        })
      }
    case 'SET_USER':
      return ({...action.user})
    default:
      return state;
  }
}

export default user;
