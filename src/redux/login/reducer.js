import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_MESSAGE } from "./types"

let INITIAL_STATE = {
  // data: {},
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true }
    case LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case LOGIN_FAIL:
      return { loading: false,  error: action.payload }
    case LOGOUT:
      return {}
    case CLEAR_MESSAGE:
      return { ...state, error: null }
    default:
      return state
  }
}
