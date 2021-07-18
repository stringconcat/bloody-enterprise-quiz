import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function SingleAnswerGroup(props) {

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="anwers" name="answers" value={props.currentAnswerIndex} onChange={props.onChange}>
                {
                    props.answers.map(
                        (answerOption, index) =>
                            <FormControlLabel
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