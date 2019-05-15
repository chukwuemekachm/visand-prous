import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_DETAILS,
} from '../constants';
import { generateCartId } from '../utils';

const localCartId = window.localStorage.getItem('vs-cart-id');

const CART_ID = !localCartId || localCartId === 'undefined'
  ? generateCartId()
  : localCartId;

const initialState = {
  items: [],
  cartId: CART_ID,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item],
        cartId: action.cartId,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: [...state.items.filter(item => item.itemId !== action.itemId)],
      };
    case SET_CART_DETAILS:
      return {
        ...state,
        items: [...action.items],
        cartId: action.cartId,
      };
    default:
      return state;
  }
};
