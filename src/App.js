import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { questions } from './Questions';
import DescriptionBox from './DescriptionBox';
import QuestionBox from './QuestionBox';
import AnswersGroup from './AnswersGroup';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)
	const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

	const handleNextQuestionButton = (scoreFortheAnswer) => {
		const currentAnswerScore = questions[currentQuestion].answerOptions[currentAnswerIndex].score
		setScore(score + currentAnswerScore)

		const nextQeustion = currentQuestion + 1;
		if (nextQeustion < questions.length) {
			setCurrentQuestion(nextQeustion)
		} else {
			setShowScore(true)
		}
		setCurrentAnswerIndex(-1)
	}


	  const handleAnswerChange = (event) => {
		setCurrentAnswerIndex(event.target.value)
	  };

	return (
		<Grid
			container
			direction="row"
			justifyContent="center">

			<Grid
				container
				spacing="3"
				direction="column"
				justifyContent="flex-start"
				alignItems="stretch"
				item xs={6}>

				<Grid item>
					<QuestionBox 
						text={questions[currentQuestion].questionText}
						currentIndex={currentQuestion}
						totalQuestions={questions.length}
						/>
				</Grid>	

				<Grid item>
					{showScore ? (
						<div className='score-section'>You scored {score} out of {questions.length}</div>
					) : (
						<AnswersGroup 
							onChange={handleAnswerChange}
							answers={questions[currentQuestion].answerOptions}
							currentAnswerIndex={currentAnswerIndex}
						/>
					)}
				</Grid>	

				<Grid item>
					{currentAnswerIndex !== -1 ? (
					<DescriptionBox description={questions[currentQuestion].description} />
				) : (<></>) 
				}
				</Grid>

				<Grid item>
					{currentAnswerIndex !== -1 ? (
						<Button variant="outlined" color="primary" onClick={() => handleNextQuestionButton()}>Следующий вопрос</Button>
						) : (<></>) 
					}
				</Grid>
			</Grid>
		</Grid>
	);
}
