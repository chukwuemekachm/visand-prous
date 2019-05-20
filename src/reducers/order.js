import {
  SET_ORDER,
  SET_ORDER_PAYMENT,
  REMOVE_ORDER,
} from '../constants';

const initialState = {
  orderId: 0,
  paymentId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orderId: action.orderId,
      };
    case REMOVE_ORDER:
      return {
        ...state,
        orderId: 0,
      };
    case SET_ORDER_PAYMENT:
      return {
        ...state,
        paymentId: action.paymentId,
      };
    default:
      return state;
  }
};
