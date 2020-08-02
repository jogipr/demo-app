import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleList({matches}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Teams</TableCell>
                        <TableCell align="right">Venue</TableCell>
                        <TableCell align="right">Schedule Date</TableCell>                    
                    </TableRow>
                </TableHead>
                <TableBody>
                {matches.map(match => (
                    <TableRow key={match.team1}>
                        <TableCell component="th" scope="row">
                            {match.team1} vs { match.team2}
                        </TableCell>
                        <TableCell align="right">{match.venue}</TableCell>
                        <TableCell align="right">{match.date}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
        </div>
    );
}
