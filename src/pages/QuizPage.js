import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DescriptionBox from '../quiz/DescriptionBox';
import QuestionBox from '../quiz/QuestionBox';
import SingleAnswerGroup from '../quiz/SingleAnswerGroup';
import MultiAnswerGroup from '../quiz/MultiAnswerGroup';

export default function QuizzPage(props) {


    const [currentQuestion, setCurrentQuestion] = useState(props.questionnaire.currentQuestion())

    const handleNextQuestionButton = () => {
        setCurrentQuestion(props.questionnaire.nextQuestion())
    }

    const handleAnswerChange = (event) => {
        // currentQuestion.giveAnswer(event.target.value)
        setCurrentQuestion(
            currentQuestion.giveAnswer(event.target.value)
        )
    };

    return (
        <>
            <Grid item>
                <QuestionBox
                    text={currentQuestion.questionText()}
                    currentIndex={currentQuestion.currentQuestionNumber()}
                    totalQuestions={props.questionnaire.totalQuestions()}
                />
            </Grid>

            <Grid item>
                <SingleAnswerGroup
                    onChange={handleAnswerChange}
                    answers={currentQuestion.answers()}
                    currentAnswerIndex={currentQuestion.givenAnswerIndex}
                />
                {/*<MultiAnswerGroup*/}
                {/*	onChange={handleAnswerChange}*/}
                {/*	answers={questions[currentQuestionIndex].answerOptions}*/}
                {/*	currentAnswerIndex={currentAnswerIndex}*/}
                {/*/>*/}
            </Grid>

            <Grid item>
                {currentQuestion.answerHasBeenGiven? (
                    <DescriptionBox description={currentQuestion.description()}/>
                ) : (<></>)
                }
            </Grid>

            <Grid item>
                {currentQuestion.answerHasBeenGiven ? (
                    !props.questionnaire.isTheLastQuestion() ? (
                        <Button variant="outlined" color="primary" onClick={() => handleNextQuestionButton()}>Следующий
                            вопрос</Button>
                    ) : (
                        <Button variant="outlined" color="primary" href="#/score">Результаты</Button>
                    )
                ) : (<></>)
                }
            </Grid>
        </>
    );
}
