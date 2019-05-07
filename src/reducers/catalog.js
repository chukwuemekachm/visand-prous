import {
  SET_CATALOG,
  SET_DEPARTMENTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
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
    default:
      return state;
  }
};
