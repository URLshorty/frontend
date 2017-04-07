// reducers take the state and the action (keep in mind reducer composition)

// STATE HERE IS THE SPECIFIC PART OF STATE CORRESPONDING TO THE REDUCER
// FUNCTION NAME, MUST RETURN IN FORMAT COINCIDING WITH THAT IN STORE,
// NOT THAT IN REDUX CONNECTION! BUT KEEP THOSE FORMATS THE SAME FOR THE WIN!
function inputURLs(state = {}, action) {
  switch (action.type) {
    case 'URL_INPUT':
      console.log("reducer fired for URL_INPUT")
      return ({
        urls: [{url: action.inputURL}, ...state.urls],
        submitNewEnabled: state.submitNewEnabled,
      })
    case 'ENABLE_SUBMIT_NEW_URL':
      return ({
        urls: [...state.urls],
        submitNewEnabled: action.allowed,
      })
    default:
      return state
  }
}

export default inputURLs
