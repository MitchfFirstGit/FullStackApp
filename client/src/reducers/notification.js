import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/constants';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATION:
            return [...state, action.newNotification];
        case REMOVE_NOTIFICATION:
            return state.filter(notification => notification.id !== action.id);
        default:
            return state;
    }
}