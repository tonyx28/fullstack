import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => {dispatch(receiveCurrentUser(null)); dispatch(clearErrors())})
);

export const loadDemo = (user) => dispatch => (
  APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
