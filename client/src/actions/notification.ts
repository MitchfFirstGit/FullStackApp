import uuid from 'uuid';
import { Dispatch } from 'redux';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './constants';

// export type NotificationType = {
//     notificationType: 'danger';
//   };
  

export const setNotification = (msg: string, notificationType: string, timeout = 4000) => (dispatch: Dispatch) => {
    const id = uuid.v4();

    dispatch({
        type: SET_NOTIFICATION,
        newNotification: { msg, notificationType, id }
    })

    setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, id }), timeout);
}
