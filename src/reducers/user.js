import {
  SET_USER,
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
    default:
      return state;
  }
};
