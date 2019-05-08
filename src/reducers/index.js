import { combineReducers } from 'redux';
import catalog from './catalog';

import api from '../actions/catalog';

export default combineReducers({
  catalog,
});
