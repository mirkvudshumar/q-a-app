import React, { Component } from 'react';
import './QaTool.css';
import ViewQuestion from '../../components/ViewQuestion/ViewQuestion';
import CreateQuestion from '../../components/CreateQuestion/CreateQuestion';
import Sidebar from '../../components/Sidebar/Sidebar';

class QaTool extends Component {
	state = {
		qaPairs : []
	}	
	
	handleSubmit = (event) => {
		const questionsNumber = this.state.qaPairs.length;
		const input =  {
			id: questionsNumber,
			question: event.target.question.value,
			answer: event.target.answer.value,
			show: false
		};
		const updatedState = [...this.state.qaPairs, input];
		this.setState({qaPairs: updatedState})
		event.preventDefault();
	}

	showAnswer = (id) => {
		let updatedState = [...this.state.qaPairs];
		const clickedQuestion = updatedState.findIndex(e => id === e.id);
		const shouldShow = updatedState[clickedQuestion].show;
		updatedState[clickedQuestion].show = !shouldShow;
		this.setState({qaPairs: updatedState});
	}

	sortQuestions = () => {
		let qaList = [...this.state.qaPairs];
		qaList = qaList.sort((a, b) => (a.question.toLowerCase() > b.question.toLowerCase()) ? 1 : -1)
		this.setState({qaPairs: qaList});
	}

	removeAll = () => {
		this.setState({qaPairs: []});
	}

	removeQuestion = (id) => {
		let updatedState = [...this.state.qaPairs];
		const clickedQuestion = updatedState.findIndex(e => id === e.id);
		updatedState.splice(clickedQuestion, 1);
		this.setState({qaPairs: updatedState});
	}

	render() {
		return (
			<div className="content">
				<h1>The awesome Q/A tool</h1>
				<div className="wrapper">
					<aside>
						<Sidebar qa={this.state.qaPairs}/>
					</aside>
					<main>
						<ViewQuestion 
							qa={this.state.qaPairs} 
							clicked={this.showAnswer} 
							removeAll={this.removeAll}
							sort={this.sortQuestions}
							removeQuestion={this.removeQuestion} 
						/>
						<CreateQuestion submit={this.handleSubmit} />
					</main>
				</div>
			</div>
		)	
	}
}

export default QaTool;