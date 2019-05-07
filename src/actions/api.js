import axios from 'axios';

const { API_URL = 'https://visand-t-shirt-shop.herokuapp.com/api/v1' } = process.env;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
