import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { questions } from './Questions';
import DescriptionBox from './DescriptionBox';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)
	const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

	const useStyles = makeStyles({
		root: {
		  minWidth: 275,
		  flexGrow: 1,
		},
		bullet: {
		  display: 'inline-block',
		  margin: '0 2px',
		  transform: 'scale(0.8)',
		},
		title: {
		  fontSize: 14,
		},
		pos: {
		  marginBottom: 12,
		},
		paper: {
			height: 140,
			width: 100,
		},
		// control: {
		// 	padding: theme.spacing(2),
		// },
	  });

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
			justifyContent="center"
		>
		<Grid
			container
			spacing="3"
			direction="column"
			justifyContent="flex-start"
			alignItems="stretch"
			item xs={6}
		>
			<Grid item>
				<Typography variant="h2" gutterBottom>{
					questions[currentQuestion].questionText } ({currentQuestion + 1}/{questions.length})
				</Typography>
			</Grid>	
			<Grid item>
				{showScore ? (
					<div className='score-section'>You scored {score} out of {questions.length}</div>
				) : (
					<>
						<FormControl component="fieldset">
						<RadioGroup aria-label="anwers" name="answers" value={currentAnswerIndex} onChange={handleAnswerChange}>
							{
								questions[currentQuestion].answerOptions.map(
									(answerOption, index) => 
										<FormControlLabel value={index.toString()} control={<Radio />} label={answerOption.answerText} />
									)
							}

						</RadioGroup>
						</FormControl>
					</>
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
