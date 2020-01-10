import React from 'react';

import './ViewQuestions.module.css';
import Aux from '../../hoc/Aux';
import Tooltip from '../UI/Tooltip/Tooltip';
import QaElement from './QaElement/QaElement';

const viewQuestions = (props) => {

	/* List of questions
	---------------------------------------------------------------------------*/
	let questionList = props.qaPairs.map((e, index) => {
		return (
			<QaElement 
				id={e.id}
				question={e.question}
				answer={e.answer}
				show={e.show}
				showAnswer={() => props.showAnswer(e.id)}
				removeQuestion={() => props.removeQuestion(e.id)}
				editQuestion={() => props.editQuestion(e.id)}
			/>
		);
	});

	/* No questions entered case
	---------------------------------------------------------------------------*/
	let noQuestionsStyle = null;
	if (props.qaPairs.length === 0) {
		questionList = <p>No questions yet</p>
		noQuestionsStyle = {backgroundColor: '#ffccd2'};
	}

	return (
		<Aux>
			<h2>
				Created questions
				<Tooltip infoText="Here you can find created questions and their answers." />
			</h2>
			<ul style={noQuestionsStyle}>
				{questionList}	
			</ul>
			<div className="Buttons">
				<button className="sort" onClick={props.sortQuestions}>Sort</button>
				<button className="removeAll" onClick={props.removeAll}>Remove questions</button>
			</div>
		</Aux>
	)
}

export default viewQuestions;