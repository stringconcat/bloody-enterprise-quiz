import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export default function DescriptionBox(props) {

    return (
        <Card variant="outlined">
        <CardContent>
            <Typography  variant="body1" gutterBottom>
                {props.description}
            </Typography>
        </CardContent>
        </Card>	
    );
}