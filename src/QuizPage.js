import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { questions } from './Questions';
import DescriptionBox from './DescriptionBox';
import QuestionBox from './QuestionBox';
import AnswersGroup from './AnswersGroup';
import { Redirect } from 'react-router';

export default function QuizzPage(props) {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0)
	const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

	const handleNextQuestionButton = (scoreFortheAnswer) => {
		const currentAnswerScore = questions[currentQuestion].answerOptions[currentAnswerIndex].score
        const newScore = score + currentAnswerScore
		setScore(newScore)
        props.updateScore(newScore)

		const nextQeustion = currentQuestion + 1;
		if (nextQeustion < questions.length) {
			setCurrentQuestion(nextQeustion)
		}

		setCurrentAnswerIndex(-1)
	}


	  const handleAnswerChange = (event) => {
		setCurrentAnswerIndex(event.target.value)
	  };

    function isTheLastQuestion() {
        return currentQuestion + 1 === questions.length
    }  

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
                    <AnswersGroup 
                        onChange={handleAnswerChange}
                        answers={questions[currentQuestion].answerOptions}
                        currentAnswerIndex={currentAnswerIndex}
                    />
				</Grid>	

				<Grid item>
					{currentAnswerIndex !== -1 ? (
					<DescriptionBox description={questions[currentQuestion].description} />
				) : (<></>) 
				}
				</Grid>

				<Grid item>
					{currentAnswerIndex !== -1 ? (
                        !isTheLastQuestion() ? (
						    <Button variant="outlined" color="primary" onClick={() => handleNextQuestionButton()}>Следующий вопрос</Button>
                        ) : (
                            <Button variant="outlined" color="primary" href="#/score">Результаты</Button>
                        )
						) : (<></>) 
					}
				</Grid>
			</Grid>
		</Grid>
	);
}
