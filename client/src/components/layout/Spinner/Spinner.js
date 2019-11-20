import React from 'react';
import spinner from './spinner.gif';
// styles
import styles from './styles.module.scss';

export default () => (
    <>
        <img
            src={spinner}
            alt='Loading...'
            className={styles.spinner}
        />
    </>
);