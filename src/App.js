import React, {useState} from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './layout/Footer';  


import QuizzPage from './pages/QuizPage';
import IntroPage from './pages/IntroPage';
import ScorePage from './pages/ScorePage';
import VerticalLinearStepper from './quiz/ScoreStepper';


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


export default function App() {

	const classes = useStyles();

	const [score, setScore] = useState(0)

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component="main" className={classes.main} maxWidth="md">
				<Grid container spacing="3" direction="column" justifyContent="flex-start" alignItems="stretch">
					<Router basename={process.env.PUBLIC_URL}>  
						<Switch>
							<Route path="/quiz">
							<	QuizzPage updateScore={setScore} />
							</Route>
							<Route path="/score">
								<ScorePage score={score} maximum={34}/>
							</Route>
							<Route path="/score2">
								<VerticalLinearStepper></VerticalLinearStepper>
							</Route>
							<Route exactPath="/">
								<IntroPage />
							</Route>
						</Switch>
					</Router>
				</Grid>
			</Container>
		<Footer/>
	  </div>
	);
}
