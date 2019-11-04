import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_ALL } from '../actions/typeOf'
const initial_state = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
}
export default (state = initial_state, action) => {
  switch (action.type) {
    case USER_LOADED_SUCCESS:
      return { ...state, isAuthenticated: true, loading: false, user: action.payload }
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return { ...state, ...action.payload, isAuthenticated: true, loading: false }
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', action.payload.token)
      return { ...state, ...action.payload, isAuthenticated: true, loading: false }
    }
    case LOGOUT:
    case REGISTER_FAIL:
    case USER_LOADED_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem('token')
      return { ...state, token: null, isAuthenticated: false, loading: false }
    default:
      return state
  }
}