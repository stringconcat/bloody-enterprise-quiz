import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch,} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from './layout/Footer';
import QuizzPage from './pages/QuizPage';
import IntroPage from './pages/IntroPage';
import ScorePage from './pages/ScorePage';
import Questionnaire from "./questionnaire/Questionnaire";
import {questions} from "./Questions";


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

const questionList = new Questionnaire(questions)

export default function App() {

	const classes = useStyles();

	const [score, setScore] = useState(0)

	const changeScoreBy = (number) => {
		setScore(score+number)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Container component="main" className={classes.main} maxWidth="md">
				<Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="stretch">
					<Router basename={process.env.PUBLIC_URL}>  
						<Switch>
							<Route path="/quiz">
								<QuizzPage questionnaire={questionList} updateScore={changeScoreBy} />
							</Route>
							<Route path="/score">
								<ScorePage score={score} maximum={34}/>
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
