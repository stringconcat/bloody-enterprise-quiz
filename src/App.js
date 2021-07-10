import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0)
	const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

	const questions = [
		{
			questionText: 'Как команда собирает требования?',
			answerOptions: [
				{ 
					answerText: 'Применяем водопадную модель. Аналитики анализируют весь проект наперед ', 
					score: -1
				},
				{ 
					answerText: 'Аналитики со стейкхолдерами — клиентами и бизнесом — прорабатывают требования на 2–3 спринта, формализуют их в ТЗ и отдают разработчикам', 
					score: 2
				},
				{ 
					answerText: 'Аналитики запираются в комнате без окон, прорабатывают требования на 2–3 спринта и кидают в разработчиков ТЗ', 
					score: 0 
				},
				{ answerText: 'Аналитики и разработчики сообща работают в спринте над реализацией. Постановки не высечены в камне и изменяются после обсуждения с инженерами', 
				score: 2 },
			],
			description: `В первую очередь проверьте компанию на водопадность.
			Даже самая распоследняя водопадная компания вам ни за что не скажет, что работает по водопаду. Сейчас весь мир agile. Но есть пропасть между be agile и do agile. И только в be agile командах у вас может появиться возможность комфортно писать качественный софт и влиять на решения, а не просто реализовывать ТЗ.
			Для be agile команде нужна ранняя обратная связь от пользователей. Только это позволяет решать реальные проблемы и развивать продукт. Для этого нужно, чтобы аналитики поговорили с живыми людьми, а ещё лучше провели А/Б тестирование прототипов пользовательского интерфейса.`
		},
		{
			questionText: 'Как прорабатываются задачи перед уходом в разработку?',
			answerOptions: [
				{ answerText: 'Задачи обсуждаются с Dev, QA или BA', score: 2 },
				{ answerText: 'Зачем их прорабатывать, взял и сделал', score: 0 }
			],
			description: `Ответ на этот вопрос помогает понять, используется ли на проекте true agile процесс и shift-left quality approach.  
			В do agile командах вы никогда не встретите BE, Dev и QA, работающих над одной задачей и даже в одном спринте. Но это одно из  основополагающих отличий. 
			BA не должны писать постановки про запас, а после кидать их в разработчиков с дежурным отговоркой «читай, там всё написано». QA должны подключаться уже на этапе проработки требований и обдумывать задачу с точки зрения edge-кейсов.
			В итоге команда не пишет код, пока не рассмотрит задачу с точек зрения бизнеса, возможностей разработки, качества и безопасности. И каждый из участников будет иметь равный голос и право на разумное «нет». 
			Если вы нашли команду, в которой каждая задача обсуждается тремя амиго — будьте уверены, с agile там всё в порядке.
			`
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

	const useStyles = makeStyles({
		root: {
		  minWidth: 275,
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
	  });
	const classes = useStyles();

	const handleNextQuestionButton = (scoreFortheAnswer) => {
		const currentAnswerScore = questions[currentQuestion].answerOptions[currentAnswerIndex].score
		setScore(score + currentAnswerScore)

		const nextQeustion = currentQuestion + 1;
		if (nextQeustion < questions.length) {
			setCurrentQuestion(nextQeustion)
		} else {
			setShowScore(true)
		}
	}


	  const handleAnswerChange = (event) => {
		setCurrentAnswerIndex(event.target.value)
	  };

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<FormControl component="fieldset">
					<FormLabel component="legend">{questions[currentQuestion].questionText } ({currentQuestion + 1}/{questions.length})</FormLabel>
					<RadioGroup aria-label="anwers" name="answers" value={currentAnswerIndex} onChange={handleAnswerChange}>
						{
							questions[currentQuestion].answerOptions.map(
								(answerOption, index) => 
									<FormControlLabel value={index.toString()} control={<Radio />} label={answerOption.answerText} />
								)
						}

					</RadioGroup>
					</FormControl>
					
					<Card cclassName={classes.root}>
      				<CardContent>
						<Typography className={classes.title} color="textSecondary" gutterBottom>
							{questions[currentQuestion].description }
						</Typography>
					</CardContent>
					</Card>
					
					<Button variant="outlined" color="primary" onClick={() => handleNextQuestionButton()}>Следующий вопрос</Button>
				</>
			)}
		</div>
	);
}
