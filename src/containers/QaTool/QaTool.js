import React, { Component } from 'react';

import './QaTool.css';
import ViewQuestions from '../../components/ViewQuestions/ViewQuestions';
import CreateQuestion from '../../components/CreateQuestion/CreateQuestion';
import Sidebar from '../../components/Sidebar/Sidebar';
import Modal from '../../components/UI/Modal/Modal';
import EditQuestion from '../../components/EditQuestion/EditQuestion';

class QaTool extends Component {
	state = {
		qaPairs : [],
		editing: false,
		editedQuestionId: null
	}	
	
	createQuestionHandleSubmit = (event) => {
		event.preventDefault();
		const questionsNumber = this.state.qaPairs.length;
		const input =  {
			id: questionsNumber,
			question: event.target.question.value,
			answer: event.target.answer.value,
			show: false
		};
		const updatedState = [...this.state.qaPairs, input];
		this.setState({qaPairs: updatedState});
	}

	/* All questions actions
	---------------------------------------------------------------------------*/
	sortQuestions = () => {
		let updatedState = [...this.state.qaPairs];
		updatedState = updatedState.sort((a, b) => (a.question.toLowerCase() > b.question.toLowerCase()) ? 1 : -1);
		this.setState({qaPairs: updatedState});
	}

	removeAllQuestions = () => {
		this.setState({qaPairs: []});
	}

	/* Single question actions
	--------------------------------------------------------------------------- */
	showAnswer = (id) => {
		let updatedState = [...this.state.qaPairs];
		const clickedQuestion = updatedState.findIndex(e => id === e.id);
		const shouldShow = updatedState[clickedQuestion].show;
		updatedState[clickedQuestion].show = !shouldShow;
		this.setState({qaPairs: updatedState});
	}

	removeQuestion = (id) => {
		let updatedState = [...this.state.qaPairs];
		const clickedQuestion = updatedState.findIndex(e => id === e.id);
		updatedState.splice(clickedQuestion, 1);
		this.setState({qaPairs: updatedState});
	}

	// Edit question
	editQuestionActivate = (id) => {
		this.setState({editing: true, editedQuestionId: id});
	}

	modalClosed = () => {
		this.setState({editing: false, editedQuestionId: null})
	}
	editQuestionOnChange = (event) => {
		let updatedState = [...this.state.qaPairs];
		const elementName = event.target.name;
		updatedState[this.state.editedQuestionId][elementName] = event.target.value;
		this.setState({qaPairs: updatedState});
	}
	sumbitEdit = (event) => {
		event.preventDefault();
		this.setState({editing: false})
	}
	
	render() {
		return (
			<div className="content">
				<h1>Q/A tool</h1>
				<div className="wrapper">
					<aside>
						<Sidebar qaPairs={this.state.qaPairs}/>
					</aside>
					<main>
						<ViewQuestions 
							qaPairs={this.state.qaPairs} 
							removeAll={this.removeAllQuestions}
							sortQuestions={this.sortQuestions}
							showAnswer={this.showAnswer}
							removeQuestion={this.removeQuestion}
							editQuestion={this.editQuestionActivate}
						/>
						<CreateQuestion submit={this.createQuestionHandleSubmit} />
						<Modal 
							show={this.state.editing} 
							close={this.modalClosed}
						>
							<EditQuestion 
								editedValues={this.state.qaPairs[this.state.editedQuestionId]} 
								show={this.state.editing}
								editInput={this.editQuestionOnChange}
								onSubmitEdit={this.sumbitEdit}
							/>
						</Modal>
					</main>
				</div>
			</div>
		)	
	}
}

export default QaTool;