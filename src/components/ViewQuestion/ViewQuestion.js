import React from 'react';
import './ViewQuestion.module.css';
import Aux from '../../hoc/Aux';
import QaElement from './QaElement/QaElement';

const viewQuestion = (props) => {
	let questionList = props.qa.map((e, index) => {
		return (
			<QaElement 
				id={e.id}
				question={e.question}
				answer={e.answer}
				clicked={() => props.clicked(e.id)}
				show={e.show}
				removeQuestion={() => props.removeQuestion(e.id)}
			/>
		)
	})
	let noQuestionsStyle = null;
	if(props.qa.length === 0) {
		questionList = <p>No questions yet</p>
		noQuestionsStyle = {backgroundColor: '#ffccd2'};
	}

	return (
		<Aux>
			<h2>
				Created questions
				<span 
					className="tooltip" 
					data-tooltip="Here you can find created questions and their answers."
				> 
					<p>?</p>
				</span>
			</h2>
			<ul style={noQuestionsStyle}>
				{questionList}	
			</ul>
			<div className="Buttons">
				<button className="sort" onClick={props.sort}>Sort</button>
				<button className="removeAll" onClick={props.removeAll}>Remove questions</button>
			</div>
		</Aux>
	)
}

export default viewQuestion;