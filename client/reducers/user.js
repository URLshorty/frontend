function user(state={}, action) {
  switch(action.type) {
    case 'UPDATE_USER_DATA':
      if ( action.updateObj.newUsername ) {
        return ({
          ...state,
          username: action.updateObj.newUsername,
        })
      }
    case 'SET_USER':
      return ({...action.user})
    case 'CLEAR_USER':
      return ({
        id: null,
        username: null,
        is_admin: null,
        picture_id: null,
      })
    default:
      return state;
  }
}

export default user;
