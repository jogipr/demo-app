import React, { useReducer, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
// } from '@material-ui/pickers';
import "./style.less";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    row: {
        margin: '8px'
    },
    theme: {
        backgroundColor: theme.palette.info.dark
    }
}));

const initialState = {
    team1: '',
    team2: '',
    venue: '',
    date: "Today"
}

const scheduleReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEAM1':
            return {
                ...state,
                team1: action.value
            }
        case 'SET_TEAM2':
            return {
                ...state,
                team2: action.value
            }
        case 'SET_VENUE':
            return {
                ...state,
                venue: action.value
            }

        case 'SET_DATE':
            return {
                ...state,
                date: action.value
            }
        default:
            return state;
    }
}

function ScheduleMatch(props) {
    const classes = useStyles();
    const [state, dispatch] = useReducer(scheduleReducer, initialState);
    const [teamError, setTeamError] = useState(false)

    const handleTeamChange = (e) => {
        const { target: { id, value } } = e;
        if (id === "team1") {
            dispatch({
                type: "SET_TEAM1",
                value
            })
        }
        if (id === "team2") {
            dispatch({
                type: "SET_TEAM2",
                value
            })
        }
    }

    const handleVenueChange = (e) => {
        const { target: { id, value } } = e;
        dispatch({
            type: "SET_VENUE",
            value
        })
    }

    const handleScheduleChange = (e) => {
        const { target: { id, value } } = e;
        dispatch({
            type: "SET_DATE",
            value
        })
    }

    const handleSubmit = () => {
        if (!state.team1) {
            setTeamError(true);
            return;
        }
        props.submitMatch(state)
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.row}>
                    <TextField
                        id="team1"
                        label="Team 1"
                        variant="outlined"
                        value={state.team1}
                        onChange={handleTeamChange}
                        error={teamError}
                    />
                    <span>vs</span>
                    <TextField
                        id="team2"
                        label="Team 2"
                        variant="outlined"
                        value={state.team2}
                        onChange={handleTeamChange}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        id="outlined-basic"
                        label="Venue"
                        variant="outlined"
                        value={state.venue}
                        onChange={handleVenueChange}
                    />
                </div>
                <div className={classes.row}>
                    <TextField
                        id="schedule-date"
                        label="Schedule Date"
                        variant="outlined"
                        value={state.date}
                        onChange={handleScheduleChange}
                    />
                </div>
                {/* <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={state.date}
                        onChange={handleScheduleChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    </MuiPickersUtilsProvider>
                </div> */}
                <div className={classes.row}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.theme}
                    >
                        Submit
                </Button>
                </div>
            </CardContent>
        </Card>

    )
}

ScheduleMatch.propTypes = {

}

export default ScheduleMatch
