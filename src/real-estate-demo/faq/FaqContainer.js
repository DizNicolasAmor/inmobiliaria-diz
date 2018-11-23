import React, { Component } from 'react';
import faq from './utils/faq.json';
import Faq from './components/Faq';

class FaqContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openedQuestions: [],
			data: { ...faq }
		};
	}

	updateQuestionActive = (questionId) => { // eslint-disable-line
		const { openedQuestions } = this.state;
		const openedQuestionsCopy = [...openedQuestions];

		// eslint-disable-next-line no-unused-expressions
		openedQuestions.includes(questionId)
			? openedQuestionsCopy.splice(openedQuestions.indexOf(questionId), 1)
			: openedQuestionsCopy.push(questionId);

		this.setState({ openedQuestions: openedQuestionsCopy });
	}

	render() {
		const {
			data,
			openedQuestions
		} = this.state;
		return (
			<div>
				<Faq
					data={data}
					openedQuestions={openedQuestions}
					updateQuestionActive={this.updateQuestionActive}
				/>
			</div>
		);
	}
}

export default FaqContainer;
