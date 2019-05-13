import { combineReducers } from 'redux';
import catalog from './catalog';
import cart from './cart';
import shipping from './shipping';
import user from './user';

export default combineReducers({
  catalog,
  cart,
  shipping,
  user,
});
