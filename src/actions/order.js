import api from './api';

import {
  SET_ORDER,
} from '../constants';
import { getCartDetails } from './cart';

export const getOrderDetails = async (orderId) => {
  try {
    const { data: { order: { totalAmount } } } = await api.get(`/order/${orderId}`);
    window.vs_order_amount = totalAmount;
    window.vs_order_id = orderId;
    return totalAmount;
  } catch ({ response }) {
    throw response;
  }
};

const setOrder = orderId => ({
  type: SET_ORDER,
  orderId,
});
export const createOrder = (shippingId = 2) => async (dispatch, getState) => {
  try {
    const AUTH_TOKEN = window.localStorage.getItem('vs-jwt-token');
    const { cart: { cartId } } = getState();
    api.defaults.headers.common.Authorization = AUTH_TOKEN;
    const { data: { order: { orderId } } } = await api.post('/order', { cartId, shippingId });
    dispatch(setOrder(orderId));
    await getOrderDetails(orderId);
    return dispatch(getCartDetails());
  } catch ({ response }) {
    throw response;
  }
};

export const verifyOrderPayment = async (paymentId) => {
  try {
    const orderId = window.vs_order_id;
    await api.put(`/order/${orderId}`, { paymentId });
  } catch ({ response }) {
    throw response;
  }
};
