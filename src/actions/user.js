import api from './api';

import {
  SET_USER,
  LOGOUT_USER,
} from '../constants';

export const logoutUser = () => async (dispatch) => {
  try {
    window.localStorage.removeItem('vs-jwt-token');
    return dispatch({
      type: LOGOUT_USER,
    });
  } catch ({ response }) {
    throw response;
  }
};

const setUser = user => ({
  type: SET_USER,
  user,
});
export const authenticateUser = (user, action = 'login') => async (dispatch) => {
  try {
    const { data: { user: profile, token } } = await api.post(`/auth/${action}`, { ...user });
    window.localStorage.setItem('vs-jwt-token', token);
    window.localStorage.setItem('vs-user-profile', profile);
    return dispatch(setUser(profile));
  } catch ({ response }) {
    throw response;
  }
};

export const authenticateFacebookUser = accessToken => async (dispatch) => {
  try {
    const { data: { user: profile, token } } = await api.get(`/auth/facebook?access_token=${accessToken}`);
    window.localStorage.setItem('vs-jwt-token', token);
    window.localStorage.setItem('vs-user-profile', profile);
    return dispatch(setUser(profile));
  } catch ({ response }) {
    throw response;
  }
};

export default authenticateUser;
