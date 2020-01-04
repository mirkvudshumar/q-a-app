import React from 'react';
import styles from './QaElement.module.css';

const qaElement = (props) => {
	let answer = props.show === true ? props.answer : null;
	return(
			<li key={props.id} >
				<div className={styles.qaSection}>
					<p onClick={props.clicked}>{props.question}</p>
					<p>{answer}</p>
				</div>
				<div className={styles.buttonsSection}>
					<button className={styles.edit} onClick={props.edit}>
						<i class="fas fa-pen-square"></i>
					</button>
					<button className={styles.remove} onClick={props.removeQuestion}>
						<i class="fas fa-trash-alt"></i>
					</button>
				</div>
			</li>
	)
}

export default qaElement;