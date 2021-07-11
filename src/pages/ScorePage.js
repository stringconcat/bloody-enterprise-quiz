import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ScoreStepper from '../quiz/ScoreStepper';

export default function ScorePage(props) {

	return (
        <>
            <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                    Таки все
                </Typography>
                <Typography variant="h3" gutterBottom>
                    Результаты
                </Typography>
            </Grid>	
            <Grid item>
                Вы набрали {props.score} из {props.maximum}
            </Grid>
            <Grid item>
                <ScoreStepper score = {props.score}></ScoreStepper>
            </Grid>	

            <Grid item>
                <Button variant="outlined" color="primary" href="https://howto.stringconcat.com/">Курс</Button>
            </Grid>
        </>

	);
}
