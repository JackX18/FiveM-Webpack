import React from 'react';
import {makeStyles} from '@material-ui/core/styles';



export function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Hello World</h1>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {

  }
}));