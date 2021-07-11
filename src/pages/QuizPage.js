import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {questions} from '../Questions';
import DescriptionBox from '../quiz/DescriptionBox';
import QuestionBox from '../quiz/QuestionBox';
import SingleAnswerGroup from '../quiz/SingleAnswerGroup';
import MultiAnswerGroup from '../quiz/MultiAnswerGroup';

export default function QuizzPage(props) {

    const [currentQuestionIndex, setCurrentQuestion] = useState(0);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(-1)

    const handleNextQuestionButton = () => {
        const currentAnswerScore = questions[currentQuestionIndex].answerOptions[currentAnswerIndex].score
        props.updateScore(currentAnswerScore)

        if (!isTheLastQuestion(currentQuestionIndex)) {
            setCurrentQuestion(currentQuestionIndex + 1)
        }

        setCurrentAnswerIndex(-1)
    }


    const handleAnswerChange = (event) => {
        setCurrentAnswerIndex(event.target.value)
    };

    function isTheLastQuestion() {
        return currentQuestionIndex + 1 === questions.length
    }

    return (
        <>
            <Grid item>
                <QuestionBox
                    text={questions[currentQuestionIndex].questionText}
                    currentIndex={currentQuestionIndex}
                    totalQuestions={questions.length}
                />
            </Grid>

            <Grid item>
                <SingleAnswerGroup
                    onChange={handleAnswerChange}
                    answers={questions[currentQuestionIndex].answerOptions}
                    currentAnswerIndex={currentAnswerIndex}
                />
                {/*<MultiAnswerGroup*/}
                {/*	onChange={handleAnswerChange}*/}
                {/*	answers={questions[currentQuestionIndex].answerOptions}*/}
                {/*	currentAnswerIndex={currentAnswerIndex}*/}
                {/*/>*/}
            </Grid>

            <Grid item>
                {currentAnswerIndex !== -1 ? (
                    <DescriptionBox description={questions[currentQuestionIndex].description}/>
                ) : (<></>)
                }
            </Grid>

            <Grid item>
                {currentAnswerIndex !== -1 ? (
                    !isTheLastQuestion() ? (
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
