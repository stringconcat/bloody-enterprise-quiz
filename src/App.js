import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";
  
import QuizzPage from './QuizPage';
import IntroPage from './IntroPage';
import ScorePage from './ScorePage';

export default function App() {

	return (
		<Router>  
		  {/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
		  <Switch>
			<Route path="/quiz">
			  <QuizzPage />
			</Route>
			<Route path="/score">
			  <ScorePage />
			</Route>
			<Route path="/">
			  <IntroPage />
			</Route>
		  </Switch>
	  </Router>
		
	);
}
