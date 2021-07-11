import React, {useState} from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
  
import QuizzPage from './QuizPage';
import IntroPage from './IntroPage';
import ScorePage from './ScorePage';

export default function App() {

	const [score, setScore] = useState(0)

	return (
		<Router basename={process.env.PUBLIC_URL}>  
		  {/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
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
		
	);
}
