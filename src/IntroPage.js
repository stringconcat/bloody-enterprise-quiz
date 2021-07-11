import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './Footer';


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexDirection: 'column',
	  minHeight: '100vh',
	},
	main: {
	  marginTop: theme.spacing(8),
	  marginBottom: theme.spacing(2),
	},
  }));

export default function IntroPage() {

	const classes = useStyles();

	return (
	  <div className={classes.root}>
		<CssBaseline />
		<Container component="main" className={classes.main} maxWidth="sm">
		<Grid container spacing="3" direction="column" justifyContent="flex-start" alignItems="stretch">

			<Grid item>
				<Typography variant="subtitle1" gutterBottom>
					StringConcat тест
				</Typography>
				<Typography variant="h3" gutterBottom>
					17 вопросов для оценки кровавости энтерпрайза
				</Typography>
				</Grid>	

				<Grid item>
					<Typography variant="body" gutterBottom>
						Мы составили тест, который поможет вам дистанционно оценить глубину кроличьей норы. Пройдите сами, чтобы проверить текущую команду, или отправьте потенциальному работодателю.
						Тест вдохновлён <a href="https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/">опросником Джоэля Спольски</a>, который придумал StackOverflow. Опроснику уже двадцать лет, так что мы его немного расширили и доработали.
					</Typography>
				</Grid>	

				<Grid item>
					<Button variant="outlined" color="primary" href="#/quiz">Начать</Button>
				</Grid>
			</Grid>
		</Container>
		<Footer/>
	  </div>
	);
}
