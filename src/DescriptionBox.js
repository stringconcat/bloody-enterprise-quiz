import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ReactHtmlParser from "react-html-parser";

export default function DescriptionBox(props) {

    return (
        <Card variant="outlined">
        <CardContent>
            <Typography  variant="body1" gutterBottom>
                {ReactHtmlParser(props.description)}
            </Typography>
        </CardContent>
        </Card>	
    );
}