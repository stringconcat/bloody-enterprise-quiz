import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function QuestionBox(props) {
    return (
        <>
            <Typography variant="subtitle1" gutterBottom>
                Вопрос {props.currentIndex} из {props.totalQuestions}
            </Typography>
            <Typography variant="h3" gutterBottom>
                {props.text}
            </Typography>
        </>
    )
}