import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '1%',
    display: 'inline-block'
  }
});

export function SummaryCard(props) {

  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.value}
        </Typography>
      </CardContent>
    </Card>
  );
}