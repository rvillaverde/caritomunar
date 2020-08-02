import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../types/auth'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const userLoggedIn = (user, token) => ({
  type: USER_LOGGED_IN,
  user,
  token
})

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
})

export const login = ({ user, token }) => (dispatch) => {
  dispatch(userLoggedIn(user, token))
  cookies.set('token', token)
}

export const logout = () => (dispatch) => {
  dispatch(userLoggedOut())
  cookies.remove('token')
}
