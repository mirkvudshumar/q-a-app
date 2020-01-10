import React from 'react';

import propTypes from 'prop-types';
import styles from './QaElement.module.css';

const qaElement = (props) => {
	let answer = props.qaPair.show ? props.qaPair.answer : null;
	return(
			<li key={props.qaPair.id} >
				<div className={styles.qaSection}>
					<p onClick={props.showAnswer}>{props.qaPair.question}</p>
					<p>{answer}</p>
				</div>
				<div className={styles.buttonsSection}>
					<button className={styles.edit} onClick={props.editQuestion}>
						<i className="fas fa-pen-square"></i>
					</button>
					<button className={styles.remove} onClick={props.removeQuestion}>
						<i className="fas fa-trash-alt"></i>
					</button>
				</div>
			</li>
	)
}

qaElement.propTypes = {
	qaPair: propTypes.object.isRequired,
	showAnswer: propTypes.func.isRequired,
	removeQuestion: propTypes.func.isRequired,
	editQuestion: propTypes.func.isRequired,
};

export default qaElement;