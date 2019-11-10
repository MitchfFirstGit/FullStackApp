// modules
import React from 'react'
import cx from 'classnames';
//Redux
import { connect } from 'react-redux';
// styles
import styles from './styles.module.scss';

const Notification = ({ notifications }) =>
    notifications && notifications.length > 0 &&
    notifications.map(notification => (
        <div key={notification.id} className={cx(styles.notification, styles[notification.notificationType])}>
            {notification.msg}
        </div>
    ))


const mapStateToProps = state => ({
    notifications: state.notification
})
export default connect(mapStateToProps)(Notification);
