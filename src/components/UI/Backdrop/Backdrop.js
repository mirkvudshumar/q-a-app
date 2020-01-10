import React from 'react';

import propTypes from 'prop-types';
import styles from './Backdrop.module.css';

const backdrop = (props) => (
	props.show ? <div className={styles.backdrop} onClick={props.close}></div> : null
)

backdrop.propTypes = {
	show: propTypes.bool.isRequired,
	close: propTypes.func.isRequired
};

export default backdrop;