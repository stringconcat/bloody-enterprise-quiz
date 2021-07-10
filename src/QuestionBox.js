import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function QuestionBox(props){
    return (<Typography variant="h2" gutterBottom>
        {props.text}
        ({props.currentIndex + 1}/{props.totalQuestions})
    </Typography>)
}