import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { getPlayerByTeam } from '../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    title:{
        font:14
    }
}));

const Players = (props) => {
    const classes = useStyles();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await getPlayerByTeam("");
            setPlayers(res);
        }
        fetchData();
    }, [])

    return (
        <div>
            <List className={classes.root}>
                {players && players.map(player =>
                    <ListItem key={player.id}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={player.name}
                            secondary={player.team}
                        />
                        <Typography className={classes.title} color="textSecondary">
                            Some text about player,Some text about player
                        </Typography>
                    </ListItem>
                )}
            </List>
        </div>

    )
}

Players.propTypes = {

}

Players.defaultProps = {

}

export default Players
