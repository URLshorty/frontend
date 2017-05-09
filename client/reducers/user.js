function user(state={}, action) {
  switch(action.type) {

    case 'UPDATE_USER_DATA':
      if ( action.updateObj.newUsername ) {

        let updatedUser = {
          ...state,
          username: action.updateObj.newUsername,
        }

        updateLocalStorageUser(updatedUser)
        return (updatedUser)
      }

    case 'SET_USER':
      let user = {...action.user}

      updateLocalStorageUser(user)
      return (user)

    case 'CLEAR_USER':
      let cleared = {
        id: null,
        username: null,
        is_admin: null,
        picture_id: null,
      }

      updateLocalStorageUser(cleared)
      return (cleared)

    default:
      return state;
  }
}

function updateLocalStorageUser(userData) {
  const tokenString = JSON.stringify(userData)
  localStorage.authToken = tokenString
}

export default user;
