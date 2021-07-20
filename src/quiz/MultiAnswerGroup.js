import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {FormGroup} from '@material-ui/core';
import {Checkbox} from '@material-ui/core';

export default function MultiAnswerGroup(props) {

    return (
        <FormControl component="fieldset">
            <FormGroup>
                {
                    props.answers.map(
                        (answerOption, index) =>
                            <FormControlLabel
                                value={index.toString()}
                                control={
                                    <Checkbox
                                        checked={props.currentAnswer[index]}
                                        onChange={props.onChange}
                                        name={index}
                                        color={answerOption.score > 0 ? "primary" : "secondary"}
                                    />
                                }
                                label={answerOption.answerText}
                            />
                    )
                }
            </FormGroup>
        </FormControl>
    )
}