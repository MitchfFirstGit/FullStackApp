import { combineReducers } from 'redux';
import notification from './notification';
import auth from './auth';

export default combineReducers({
    notification,
    auth,
});