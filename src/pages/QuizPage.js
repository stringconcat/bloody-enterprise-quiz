import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DescriptionBox from '../quiz/DescriptionBox';
import QuestionBox from '../quiz/QuestionBox';
import SingleAnswerGroup from '../quiz/SingleAnswerGroup';
import MultiAnswerGroup from '../quiz/MultiAnswerGroup';
import {
    useLocation
} from "react-router-dom";

export default function QuizzPage(props) {

    const location = useLocation();

    const createState= ()=> {
        let query = new URLSearchParams(location.search)
        let questionIndex=query.get("question")||1
        let currentQuestion=props.questionnaire.switchToQuestion(questionIndex-1);
        return {
            text: currentQuestion.questionText(),
            type: currentQuestion.type(),
            number: currentQuestion.currentQuestionNumber(),
            description: currentQuestion.description(),
            answers: currentQuestion.answers(),
            givenAnswerIndex: currentQuestion.givenAnswerIndex(),
            isTheLastQuestion: props.questionnaire.isTheLastQuestion(),
            nextQuestionIndex: currentQuestion.currentQuestionNumber()+1
        }
    }

    const [question, setQuestion]= useState(createState())

    React.useEffect(() => {
        setQuestion(createState())
    }, [location]);

    const handleAnswerChange = (event) => {
        props.questionnaire.currentQuestion().giveAnswer(event.target.value)
        setQuestion({...question, givenAnswerIndex: event.target.value})
        console.log("score: "+props.questionnaire.score())
    };

    const handleAnswerCheckBoxChange= (event)=> {
        let answersCopy= question.givenAnswerIndex.slice()
        answersCopy[event.target.name]= event.target.checked
        setQuestion({
            ...question,
            givenAnswerIndex: answersCopy
        })
        props.questionnaire.currentQuestion().giveAnswer(answersCopy)
        console.log("score: "+props.questionnaire.score())
    }

    return (
        <>
            <Grid item>
                <QuestionBox
                    text={question.text}
                    currentIndex={question.number}
                    totalQuestions={props.questionnaire.totalQuestions()}
                />
            </Grid>

            <Grid item>
                {question.type === "single" ? (
                    <SingleAnswerGroup
                        onChange={handleAnswerChange}
                        answers={question.answers}
                        currentAnswerIndex={question.givenAnswerIndex}
                    />
                ) : (
                    <MultiAnswerGroup
                        onChange={handleAnswerCheckBoxChange}
                        answers={question.answers}
                        currentAnswer={question.givenAnswerIndex}
                    />
                )
                }
            </Grid>

            <Grid item>
                {question.givenAnswerIndex !== null? (
                    <DescriptionBox description={question.description}/>
                ) : (<></>)
                }
            </Grid>

            <Grid item>
                {question.givenAnswerIndex !== null ? (
                    !props.questionnaire.isTheLastQuestion() ? (
                        <Button
                            variant="outlined"
                            color="primary"
                            href={'#/quizz?question='+ question.nextQuestionIndex}
                        >Следующий
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
