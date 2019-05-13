import {
  SET_CATALOG,
  SET_DEPARTMENTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_PRODUCT_DETAILS,
} from '../constants';

const initialState = {
  products: [],
  filteredProducts: [],
  departments: [],
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CATALOG:
      return {
        ...state,
        products: action.products,
        filteredProducts: action.products,
      };
    case SET_DEPARTMENTS:
      return {
        ...state,
        departments: action.departments,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.products,
      };
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
};
