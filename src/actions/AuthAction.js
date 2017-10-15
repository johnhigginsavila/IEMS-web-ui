import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, RESET_AUTH_ERROR } from './types';
import { ROOT_URL } from '../api.config';

export function signinUser ({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/auth/signin`, {email, password})
    .then(response => {
      dispatch({type: AUTH_USER, payload:response.data.user});
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      browserHistory.push('/event-management');
    })
    .catch(() => {
      dispatch(authError('Bad login Info'));
    });
  }
}

export function signupUser ({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/auth/signup`, {email, password})
    .then(response => {
      dispatch({type: AUTH_USER, payload:response.data.user});
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      browserHistory.push('/event-management');
    })
    .catch(response => {
      dispatch(authError(response.data.error));
    })
  }
}

export function  signoutUser () {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function resetAuthError() {
  return {
    type: RESET_AUTH_ERROR
  }
}

