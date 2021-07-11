import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
	return (
	  <Typography variant="body2" color="textSecondary">
		{'Copyright © '}
		<Link color="inherit" href="https://howto.stringconcat.com/">
		  StringConcat
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }  

  const useStyles = makeStyles((theme) => ({
	footer: {
	  padding: theme.spacing(3, 2),
	  marginTop: 'auto',
	  backgroundColor:
		theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
	},
  }));

  export default function Footer() {

	const classes = useStyles();

	return (
		<footer className={classes.footer}>
		<Container maxWidth="md">
		  <Typography variant="body1">Сделано с любовью</Typography>
		  <Copyright />
		</Container>
	  </footer>  
	)
  }
