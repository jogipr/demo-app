import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScoreCardContainer from '../containers/ScoreCardContainer';
import MatchSchedule from './MatchSchedule';
import ScheduleMatch from "./ScheduleMatch";
import Players from './Players';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  theme:{
      backgroundColor:theme.palette.info.dark
  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.theme} >
            <Typography variant="h6" className={classes.title}>
            Cricket Application
          </Typography> 
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Live Scores" {...a11yProps(0)} />
          <Tab label="Schedule" {...a11yProps(1)} />
          <Tab label="Teams" {...a11yProps(2)} />
          <Tab label="Players" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ScoreCardContainer/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MatchSchedule
            matches={props.matches}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ScheduleMatch
            submitMatch={(state)=>{
                handleChange("",1);
                props.submitMatch(state)
            }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Players/>
      </TabPanel>
    </div>
  );
}
