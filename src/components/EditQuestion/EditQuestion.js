import React from 'react';

import propTypes from 'prop-types';
import './EditQuestion.module.css';
import Aux from '../../hoc/Aux';
import Tooltip from '../UI/Tooltip/Tooltip';

const editQuestion = (props) => {			
	return (
		<Aux>
			<h2>
				Edit question
				<Tooltip infoText="Here you can edit selected question." />
			</h2>
			<form onSubmit={props.onSubmitEdit} autoComplete="off">
				<label htmlFor="question">Question</label>
				<input  
					name="question" 
					type="text"
					value= {props.show ? props.editedValues.question : ''} 
					onChange={props.editInput}
					required
				>
				</input>
				<label htmlFor="answer">Answer</label>
				<textarea
					name="answer"
					value={props.show ? props.editedValues.answer : ''}  
					onChange={props.editInput}
					required
				>	
				</textarea>
				<button className="create">Submit</button>
			</form>
		</Aux>
	)
}


editQuestion.propTypes = {
	editedValues: propTypes.object,
	show: propTypes.bool.isRequired,
	editInput: propTypes.func.isRequired,	
	onSubmitEdit: propTypes.func.isRequired
};

export default editQuestion;