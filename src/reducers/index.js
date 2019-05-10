import { combineReducers } from 'redux';
import catalog from './catalog';
import cart from './cart';
import shipping from './shipping';

import api from '../actions/cart';

export default combineReducers({
  catalog,
  cart,
  shipping,
});
