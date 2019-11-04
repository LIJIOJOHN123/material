import { SET_ALERT, REMOVE_ALERT, REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED_SUCCESS, USER_LOADED_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_ALL } from './typeOf'
import uuid from 'uuid'
import axios from 'axios'
import setToken from '../utils/setAuth'

export const setAlert = (msg, alertType) => async dispatch => {
 const id = uuid.v4()
 dispatch({ type: SET_ALERT, payload: { msg, alertType, id } })
 setTimeout(() => {
  dispatch({ type: REMOVE_ALERT, payload: id })
 }, 4000)
}
//load user
export const loadUser = () => async dispatch => {
 if (localStorage.token) {
  setToken(localStorage.token)
 }
 try {
  const res = await axios.get('http://localhost:8000/api/me')
  dispatch({ type: USER_LOADED_SUCCESS, payload: res.data })
 } catch (error) {
  dispatch({ type: USER_LOADED_FAIL })
 }
}

//register
export const register = formData => async dispatch => {
 try {
  const res = await axios.post('http://localhost:8000/api/register', formData)
  dispatch({ type: REGISTER_SUCCESS, payload: res.data })
  dispatch(loadUser())
 } catch (error) {
  const errors = error.res.data.errors

  if (errors) {
   errors.map(error => dispatch(setAlert(error.msg, 'danger')))
  }
  dispatch({ type: REGISTER_FAIL })
 }
}




//login
export const login = formData => async dispatch => {
 try {
  const res = await axios.post('http://localhost:8000/api/login', formData)
  dispatch({ type: LOGIN_SUCCESS, payload: res.data })
  dispatch(loadUser())
 } catch (error) {
  const errors = error.res.data.errors
  if (errors) {
   errors.map(error => dispatch(setAlert(error.msg, 'danger')))
  }
  dispatch({ type: LOGIN_FAIL })
 }
}

//logout

export const logOut = () => async dispatch => {
 dispatch({ type: LOGOUT })
}
export const logOutAll = () => async dispatch => {
 dispatch({ type: LOGOUT_ALL })
}



