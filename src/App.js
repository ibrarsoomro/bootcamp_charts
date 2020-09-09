import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button,CircularProgress} from '@material-ui/core';

import NavBar from './NavBar';
//import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
 

  paper: {
   // height: 500,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding : 15,
    marginTop : 50
  },

  input: {
    width: '100%',
    marginBottom: 15
  },

}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <NavBar />

      <Paper elevation={3} className={classes.paper}>
        <h1>Login Form</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary"  className={classes.input} >
            Login
          </Button>
        </form>
        <CircularProgress value={50} />
      </Paper>

    </div>
  );
}

export default App;
