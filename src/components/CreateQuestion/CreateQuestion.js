import React from 'react';

import './CreateQuestion.module.css';
import Aux from '../../hoc/Aux';
import Tooltip from '../UI/Tooltip/Tooltip';

const createQuestion = (props) => {			
	return (
		<Aux>
			<h2>
				Create a new question
				<Tooltip infoText="Here you can create new questions and their answers." />
			</h2>
			<form onSubmit={props.submit} autoComplete="off">
				<label htmlFor="question">Question</label>
				<input  
					name="question" 
					type="text" 
					required
				>
				</input>
				<label htmlFor="answer">Answer</label>
				<textarea
					name="answer"  
					required
				>	
				</textarea>
				<button className="create">Submit</button>
			</form>
		</Aux>
	)
}

export default createQuestion;