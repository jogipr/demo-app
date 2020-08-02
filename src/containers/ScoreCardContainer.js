import React from 'react'
import Grid from '@material-ui/core/Grid';
import ScoreCard  from  "../components/ScoreCard";

function ScoreCardContainer(props) {
    return (
        <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <ScoreCard ></ScoreCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ScoreCard ></ScoreCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ScoreCard ></ScoreCard>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ScoreCard ></ScoreCard>
            </Grid>
        </Grid>
    )
}

ScoreCardContainer.propTypes = {

}

export default ScoreCardContainer
