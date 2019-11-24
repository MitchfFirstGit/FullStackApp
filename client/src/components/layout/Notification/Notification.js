// modules
import React from 'react'
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// styles
import styles from './styles.module.scss';

const Notification = ({ notifications }) =>
    notifications && notifications.length > 0 &&
    notifications.map(notification => (
        <div key={notification.id} className={cx(styles.notification, styles[notification.notificationType])}>
            {notification.msg}
        </div>
    ));

Notification.propTypes = {
    notifications: PropTypes.array.isRequired
};


const mapStateToProps = state => ({
    notifications: state.notification
})
export default connect(mapStateToProps)(Notification);
