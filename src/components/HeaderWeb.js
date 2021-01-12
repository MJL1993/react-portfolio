import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className="Toolbar" variant="regular">
          <Typography variant="h5" color="inherit">
            <a className="HomePage" href="/">Home</a>
          </Typography>
          <Typography className="Github" variant="h6" color="inherit">
            <a target="_blank" href="https://github.com/MJL1993">Github</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
