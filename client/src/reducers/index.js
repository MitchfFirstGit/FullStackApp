import { combineReducers } from 'redux';
import notification from './notification';
import auth from './auth';
import profile from './profile';

export default combineReducers({
    notification,
    auth,
    profile
});