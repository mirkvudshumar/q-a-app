import React from 'react';

import propTypes from 'prop-types';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {	
	return (
		<Aux>
			<Backdrop show={props.show} close={props.close} />
			<div 
				className={styles.modal}
				style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}
			>
				{props.children}
			</div>
		</Aux>
	)
}

modal.propTypes = {
	show: propTypes.bool.isRequired,
	close: propTypes.func.isRequired
};

export default modal;