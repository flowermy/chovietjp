import {combineReducers} from 'redux';
import accountReducers from './accountReducers/accountReducers';

export const rootReducer = combineReducers({
  dataLogin: accountReducers,
});
