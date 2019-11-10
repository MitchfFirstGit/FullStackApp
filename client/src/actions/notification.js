import uuid from 'uuid';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './constants';

export const setNotification = (msg, notificationType, timeout = 4000) => dispatch => {
    const id = uuid.v4();

    dispatch({
        type: SET_NOTIFICATION,
        newNotification: { msg, notificationType, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, id }), timeout);
}
