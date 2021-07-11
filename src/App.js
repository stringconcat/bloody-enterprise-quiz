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
import Footer from './Footer';  


import QuizzPage from './QuizPage';
import IntroPage from './IntroPage';
import ScorePage from './ScorePage';


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
			<Container component="main" className={classes.main} maxWidth="sm">
				<Grid container spacing="3" direction="column" justifyContent="flex-start" alignItems="stretch">
					<Router basename={process.env.PUBLIC_URL}>  
						<Switch>
							<Route path="/quiz">
							<QuizzPage updateScore={setScore} />
							</Route>
							<Route path="/score">
							<ScorePage score={score} maximum={32}/>
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
