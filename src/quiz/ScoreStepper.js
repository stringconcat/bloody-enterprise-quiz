import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    stepper: {
        flexDirection: 'column-reverse'
    },
}));

function getSteps() {
    return [
        {
            min: -10,
            max: 6,
            label: {
                score: '< 7',
                team: 'Бежать',
                description: 'Если компания небольшая и вы уверены в своих силах реформатора, можно попробовать.'

            },
        },
        {
            min: 7,
            max: 12,
            label: {
                score: '7–12',
                team: 'Проблемная команда',
                description: 'Важно понять, входят ли проблемы в вашу зону ответственности. Если не входят, просить выше среднего по рынку. Если вы сможете повлиять на проблемы и понравился коллектив, можно пробовать.'
            },
        },
        {
            min: 13,
            max: 17,
            label: {
                score: '13–17',
                team: 'Хорошая команда',
                description: 'Комфортные условия, возможность чему-то научиться и привнести своего.'
            },
        },
        {
            min: 18,
            max: 24,
            label: {
                score: '18–24',
                team: 'Очень хорошая команда',
                description: 'Стоит рассматривать, даже если предлагают чуть ниже рынка.'
            },
        },
        {
            min: 25,
            max: 40,
            label: {
                score: '> 25',
                team: 'Элита',
                description: 'Можно смело устраиваться. Если не наврали, работать будет комфортно.'
            },
        },
    ]
}

export default function ScoreStepper(props) {
    const classes = useStyles();
    const steps = getSteps()

    const scoreInRange = (score, step) => step.min <= score && score <= step.max;

    return (
        <div className={classes.root}>
            <Stepper className={classes.stepper} orientation="vertical">

                {steps.map((step, index) => (
                    <Step key={step.label.score} expanded={true} active={scoreInRange(props.score, step)}>
                        <StepLabel>{step.label.score} <b>{step.label.team}</b></StepLabel>
                        <StepContent>
                            <Typography>{step.label.description}</Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}