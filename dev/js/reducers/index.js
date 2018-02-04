import {combineReducers} from 'redux';
import LoginReducer from './reducer-login';

const allReducers = combineReducers({
  login: LoginReducer,
});

export default allReducers
