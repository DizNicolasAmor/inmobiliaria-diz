import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import {
	FaqWrapper,
	Title,
	CustomHr,
	FaqQuestionWrapper
} from '../styles/faq';

const Faq = ({
	data,
	openedQuestions,
	updateQuestionActive
}) => (
	<FaqWrapper>
		<Title>{data.title}</Title>
		<CustomHr />
		<FaqQuestionWrapper>
			{
				data.items.map(item => (
					<div key={item.questionId}>
						<button
							type="button"
							onClick={() => updateQuestionActive(item.questionId)}
						>
							<div className="toogle-collapse">
								{ openedQuestions.includes(item.questionId) ? '-' : '+'}
							</div>
							{item.question}
						</button>
						<Collapse isOpened={openedQuestions.includes(item.questionId)}>
							{
								item.isAnswerAnArray
									? (
										<ul>
											{item.answer.map(subAnswer => (
												<li className="faq__answer--item" key={subAnswer.key}>{subAnswer.text}</li>
											))}
										</ul>
									) : <p className="faq__answer--item">{item.answer}</p>
							}
						</Collapse>
					</div>
				))
			}
		</FaqQuestionWrapper>
	</FaqWrapper>
);

Faq.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		items: PropTypes.arrayOf(PropTypes.object)
	}).isRequired,
	openedQuestions: PropTypes.arrayOf(PropTypes.string).isRequired,
	updateQuestionActive: PropTypes.func.isRequired
};

export default Faq;
