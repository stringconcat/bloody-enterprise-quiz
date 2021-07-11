import React from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ScoreStepper from '../quiz/ScoreStepper';

export default function ScorePage(props) {

    return (
        <>
            <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                    Результаты
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Вы набрали {props.score} из {props.maximum}
                </Typography>
            </Grid>

            <Grid item>
                <ScoreStepper score={props.score}/>
            </Grid>

            <Grid item>
                <Typography variant="body1" gutterBottom>
                    Мотивация
                </Typography>
            </Grid>

            <Grid item container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Button variant="outlined" color="primary" href="https://howto.stringconcat.com/">Узнать как перейти
                        на следующую ступень</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button variant="outlined" href='#/quiz'>Пройти тест заново</Button>
                </Grid>
            </Grid>
        </>
    );
}
