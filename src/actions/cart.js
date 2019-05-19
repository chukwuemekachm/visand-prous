import api from './api';

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  SET_CART_DETAILS,
} from '../constants';

const DEFAULT_ATTRIBUTES = [
  {
    attributeName: 'Color',
    attributeValueId: 6,
    attributeValue: 'White',
  },
  {
    attributeName: 'Size',
    attributeValueId: 2,
    attributeValue: 'M',
  },
];

const setCartDetails = (items, cartId) => ({
  type: SET_CART_DETAILS,
  items,
  cartId,
});
export const getCartDetails = () => async (dispatch, getState) => {
  try {
    const { cart: { cartId } } = getState();
    const { data: { cart: { items, cartId: myCartId } } } = await api.get(`/shopping-cart/${cartId}`);
    window.localStorage.setItem('vs-cart-id', myCartId);
    return dispatch(setCartDetails(items, myCartId));
  } catch ({ response }) {
    throw response;
  }
};

const setNewCartItem = (item, cartId) => ({
  type: ADD_ITEM_TO_CART,
  item,
  cartId,
});
export const addItemToCart = ({
  productId, attributes = DEFAULT_ATTRIBUTES,
}) => async (dispatch, getState) => {
  try {
    const { cart: { cartId } } = getState();
    const { data: { cart: { item, cartId: myCartId } } } = await api
      .post(`/shopping-cart/${cartId}/items`, { productId, attributes });
    dispatch(setNewCartItem(item, myCartId));
    return dispatch(getCartDetails(myCartId));
  } catch ({ response }) {
    throw response;
  }
};

const removeCartItem = itemId => ({
  type: REMOVE_ITEM_FROM_CART,
  itemId,
});
export const removeItemFromCart = itemId => async (dispatch, getState) => {
  try {
    const { cart: { cartId } } = getState();
    await api.delete(`/shopping-cart/${cartId}/items/${itemId}`);
    dispatch(removeCartItem(itemId));
    return dispatch(getCartDetails(cartId));
  } catch ({ response }) {
    throw response;
  }
};
