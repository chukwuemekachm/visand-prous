import api from './api';

import {
  SET_SHIPPING_TYPES,
  SET_SHIPPING_REGIONS,
} from '../constants';

const setShippingTypes = shippingTypes => ({
  type: SET_SHIPPING_TYPES,
  shippingTypes,
});
export const getShippingTypes = () => async (dispatch) => {
  try {
    const { data: { shippingTypes } } = await api.get('/shipping');
    return dispatch(setShippingTypes(shippingTypes));
  } catch ({ response }) {
    throw response;
  }
};

const setShippingRegions = shippingRegions => ({
  type: SET_SHIPPING_REGIONS,
  shippingRegions,
});
export const getShippingRegions = () => async (dispatch) => {
  try {
    const { data: { shippingRegions } } = await api.get('/shipping/regions');
    return dispatch(setShippingRegions(shippingRegions));
  } catch ({ response }) {
    throw response;
  }
};
