import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function IntroPage() {

	return (
		<Grid
			container
			direction="row"
			justifyContent="center">

			<Grid
				container
				spacing="3"
				direction="column"
				justifyContent="flex-start"
				alignItems="stretch"
				item xs={6}>

				<Grid item>
                <>
                    <Typography variant="subtitle1" gutterBottom>
                        StringConcat тест
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        17 вопросов для оценки кровавости энтерпрайза
                    </Typography>
                 </>
				</Grid>	
                <Grid item>
                <>
                    <Typography variant="body" gutterBottom>
                        Мы составили тест, который поможет вам дистанционно оценить глубину кроличьей норы. Пройдите сами, чтобы проверить текущую команду, или отправьте потенциальному работодателю.
                        Тест вдохновлён опросником Джоэля Спольски, который придумал StackOverflow. Опроснику уже двадцать лет, так что мы его немного расширили и доработали.
                    </Typography>
                 </>
				</Grid>	

                <Grid item>
					<Button variant="outlined" color="primary" href="/quiz">Начать</Button>
				</Grid>

			</Grid>
		</Grid>
	);
}
