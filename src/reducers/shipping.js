import {
  SET_SHIPPING_TYPES,
  SET_SHIPPING_REGIONS,
} from '../constants';

const initialState = {
  types: [],
  regions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIPPING_TYPES:
      return {
        ...state,
        types: action.shippingTypes,
      };
    case SET_SHIPPING_REGIONS:
      return {
        ...state,
        regions: action.shippingRegions,
      };
    default:
      return state;
  }
};
