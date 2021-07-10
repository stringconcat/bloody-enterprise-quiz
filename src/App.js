import React, { useState } from 'react';
import { Button } from '@material-ui/core';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', score: 0 },
				{ answerText: 'London', score: 0 },
				{ answerText: 'Paris', score: 1 },
				{ answerText: 'Dublin', score: 0 },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', score: 0 },
				{ answerText: 'Elon Musk', score: 1 },
				{ answerText: 'Bill Gates', score: 0 },
				{ answerText: 'Tony Stark', score: 0 },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', score: 1 },
				{ answerText: 'Intel', score: 0 },
				{ answerText: 'Amazon', score: 0 },
				{ answerText: 'Microsoft', score: 0 },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', score: 0 },
				{ answerText: '4', score: 0 },
				{ answerText: '6', score: 0 },
				{ answerText: '7', score: 1 },
			],
		},
	];

	const handleAnswerButtonClick = (scoreFortheAnswer) => {
		setScore(score + scoreFortheAnswer)
		const nextQeustion = currentQuestion + 1;
		if (nextQeustion < questions.length) {
			setCurrentQuestion(nextQeustion)
		} else {
			setShowScore(true)
		}

	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{
							questions[currentQuestion].answerOptions.map(
								(answerOption, index) => 
								<Button onClick={() => handleAnswerButtonClick(answerOption.score)}>{answerOption.answerText}</Button>
							)
						}
					</div>
				</>
			)}
		</div>
	);
}
