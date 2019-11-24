// modules
import React from 'react';
// assets
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