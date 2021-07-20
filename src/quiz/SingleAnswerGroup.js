import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5)
    }
}));

export default function SingleAnswerGroup(props) {

    const classes = useStyles();

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="answers" name="answers" value={props.currentAnswerIndex} onChange={props.onChange}>
                {
                    props.answers.map(
                        (answerOption, index) =>
                            <FormControlLabel
                                className={classes.root}
                                key={index.toString()}
                                value={index.toString()}
                                control={<Radio color={answerOption.correct? "primary" : "secondary"}/>}
                                label={answerOption.answerText}
                            />
                    )
                }
            </RadioGroup>
        </FormControl>
    )
}