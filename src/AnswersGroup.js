import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function AnswersGroup(props) {

    return (
        <FormControl component="fieldset">
        <RadioGroup aria-label="anwers" name="answers" value={props.currentAnswerIndex} onChange={props.onChange}>
            {
                props.answers.map(
                    (answerOption, index) => 
                        <FormControlLabel value={index.toString()} control={<Radio />} label={answerOption.answerText} />
                    )
            }
        </RadioGroup>
        </FormControl>
    )
}