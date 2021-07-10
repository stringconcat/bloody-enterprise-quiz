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
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
				{ 
					answerText: 'Аналитики и разработчики сообща работают в спринте над реализацией. Постановки не высечены в камне и изменяются после обсуждения с инженерами', 
					score: 2 
				},
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
			questionText: 'Как фиксируются принятые архитектурные решения',
			answerOptions: [
				{ answerText: 'В Architectural Decision Record фиксируются все «Почему» ', score: 2 },
				{ answerText: 'В таск-трекере заводят задачи, в которых расписаны все «Как». Например, прикрутить kafka', score: 0 },
				{ answerText: 'Решения не фиксируются', score: 0 },
			],
			description: `Плохо дело, когда команда не может вспомнить, почему выбрали MongoDB или куда-то натыкали микросервисов. Так «исторически сложилось» или тимлид принёс с последней high-load конференции, но суть в том, что никто не вспомнит, на основании чего принимались решения.
			Без понимания причин команда обречена ходить по кругу, как в кино про день сурка. Монолит → распределенная структура  → монолит, и так, пока все не выгорят.
			Зрелые команды ведут Architectural Decision Records, в которых фиксируют значимые архитектурные решения, их причины, альтернативы, плюсы и минусы.
			Таски в Jira для этого плохо подходят. В них редко записывают результат исследования и причины изменений. А сами таски часто теряются. Попробуйте найти задачу, закрытую два года назад.
			`
		},
		{
			questionText: 'Можно ли начать полноценно разрабатывать в первый же рабочий день?',
			answerOptions: [
				{ answerText: 'Да, команда выдаст доступы, можно тут же развернуть и запустить проект ', score: 2 },
				{ answerText: 'Нет, весь первый день уйдёт на бумажки и получение доступов', score: 0 },
			],
			description: `Вопрос помогает оценить степень бюрократии на проекте и производственную культуру. 
			Если заведение всех нужных учёток занимает недели, представьте, что там у них с другими процессами.
			Скорость и простота развертывания тоже много вам скажут.
			Например, тимлид хвастается, что у них такой большой и важный проект, что его нельзя просто так взять и развернуть. У новичка на это уходит три дня, а у гениального новичка — всего два.
			Но три дня на развертывание говорят только о том, что тимлид не понимает своей основной задачи — упрощать работу разработчиков.
			Любой проект должен собираться и запускаться по одной команде. Если вместо кнопки длинный readme по запуску, поздравляю, вы нашли зону роста. Конвертируйте readme в bash-скрипт.
			`
		},
	];

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

				<Card className={useState.root} variant="outlined">
				<CardContent>
					<Typography  variant="body1" gutterBottom>
						{questions[currentQuestion].description }
					</Typography>
				</CardContent>
				</Card>	

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
