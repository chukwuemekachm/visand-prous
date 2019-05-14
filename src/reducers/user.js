import {
  SET_USER,
  LOGOUT_USER,
} from '../constants';

const initialState = {
  profile: {},
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
