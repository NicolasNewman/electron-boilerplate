import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify={"center"}>
        <Grid item xs={12}>
          <p>Hello, World!</p>
        </Grid>
        <Grid item xs={6}>
          <p>Hello, World!</p>
        </Grid>
        <Grid item xs={6}>
          <p>Hello, World!</p>
        </Grid>
      </Grid>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector('#app'));