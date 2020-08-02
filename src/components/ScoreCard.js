import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function ScoreCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                   England vs India
                </Typography>
                <Typography variant="body2" color="textSecondary">
                   Eng - 350/5  from 50 overs 
                   <br/>
                   Ind - 355 /2 from 50 overs
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    India wins by 5 runs
                </Typography>
            </CardContent>
        </Card>
    )
}

ScoreCard.propTypes = {

}

export default ScoreCard
