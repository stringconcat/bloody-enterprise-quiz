import React from 'react';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


export default function IntroPage() {

    return (
        <>
            <Grid item>
                <Typography variant="subtitle1" gutterBottom>
                    StringConcat тест
                </Typography>
                <Typography variant="h3" gutterBottom>
                    17 вопросов для оценки кровавости энтерпрайза
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="body1" gutterBottom>
                    <p>
                        Мы составили тест, который поможет вам дистанционно оценить глубину кроличьей норы.
                        Пройдите сами, чтобы проверить текущую команду, или отправьте потенциальному работодателю.
                    </p>
                    <p>
                        Тест вдохновлён <a href="https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/"> опросником Джоэля Спольски
                        </a>, который придумал StackOverflow. Опроснику уже двадцать лет,
                        так что мы его немного расширили и доработали.
                    </p>
                </Typography>
            </Grid>

            <Grid item>
                <Button variant="outlined" color="primary" href="#/quiz">Начать</Button>
            </Grid>
        </>
    );
}
