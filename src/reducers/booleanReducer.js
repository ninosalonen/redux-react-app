const booleanReducer = (state = true, action) => {
  switch (action.type) {
    case 'SWITCH':
      return !state
    default:
      return true
  }
}

export default booleanReducer
