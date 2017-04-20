function toggleHook(state={}, action) {
  switch(action.type) {
    case 'TOGGLE_HOOK':
      return !state
    default:
      return state
  }
}

export default toggleHook;
