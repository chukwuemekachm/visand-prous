import api from './api';

import {
  SET_CATALOG,
  SET_DEPARTMENTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_PRODUCT_DETAILS,
} from '../constants';

const setCatalog = products => ({
  type: SET_CATALOG,
  products,
});
export const getCatalog = (search = '') => async (dispatch) => {
  try {
    const { data: { products } } = await api.get(`/product?search=${search}`);
    return dispatch(setCatalog(products));
  } catch (error) {
    throw error;
  }
};

const setDepartments = departments => ({
  type: SET_DEPARTMENTS,
  departments,
});
export const getDepartments = () => async (dispatch) => {
  try {
    const { data: { departments } } = await api.get('/department');
    return dispatch(setDepartments(departments));
  } catch (error) {
    throw error;
  }
};

const setDepartmentCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
});
export const getDepartmentCategories = departmentId => async (dispatch) => {
  try {
    const { data: { categories } } = await api.get(`/department/${departmentId}/categories`);
    return dispatch(setDepartmentCategories(categories));
  } catch (error) {
    throw error;
  }
};

const setCategoryProducts = products => ({
  type: SET_CATEGORY_PRODUCTS,
  products,
});
export const getCategoryProducts = categoryId => async (dispatch) => {
  try {
    const { data: { products } } = await api.get(`/category/${categoryId}/products`);
    return dispatch(setCategoryProducts(products));
  } catch (error) {
    throw error;
  }
};

const setProductDetails = product => ({
  type: SET_PRODUCT_DETAILS,
  product,
});
export const getProductDetails = productId => async (dispatch) => {
  try {
    const { data: { product } } = await api.get(`/product/${productId}`);
    return dispatch(setProductDetails(product));
  } catch (error) {
    throw error;
  }
};
