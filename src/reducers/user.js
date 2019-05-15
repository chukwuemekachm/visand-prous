import {
  SET_USER,
  LOGOUT_USER,
} from '../constants';

const localUserProfile = window.localStorage.getItem('vs-user-profile');

const USER_PROFILE = !localUserProfile || localUserProfile === 'undefined'
  ? {}
  : localUserProfile;

const initialState = {
  profile: USER_PROFILE,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        profile: action.user,
      };
    case LOGOUT_USER:
      return {
        ...state,
        profile: {},
      };
    default:
      return state;
  }
};
