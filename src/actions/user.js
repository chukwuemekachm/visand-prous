import api from './api';

import {
  SET_USER,
} from '../constants';

const setUser = user => ({
  type: SET_USER,
  user,
});
export const authenticateUser = (user, action = 'login') => async (dispatch) => {
  try {
    const { data: { user: profile, token } } = await api.post(`/auth/${action}`, { ...user });
    window.localStorage.setItem('vs-jwt-token', token);
    return dispatch(setUser(profile));
  } catch (error) {
    throw error;
  }
};

export default authenticateUser;
