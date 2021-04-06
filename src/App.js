import React, {useState} from "react";

import {MCQuestion, KnowledgeQuestion} from './questions/Questions';
import Results from './questions/Results';

import { makeStyles, Paper, Typography, Button, Grid } from '@material-ui/core';

// https://material-ui.com/components/typography/#typography
import 'fontsource-roboto';


const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  slider: {
    width: 500,
  },
}));


// Entrypoint
function Questionnaire(){
  const [position, savePositionChoice] = useState("")
  const [knowledge, saveKnowledgeChoice] = useState(0)

  const classes = useStyles();
  
  return(
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container spacing={5} direction="column" justify="center" alignItems="center">
          <Headline/>
          <KnowledgeQuestion classes={classes} knowledge={knowledge} saveKnowledgeChoice={saveKnowledgeChoice}/>
          <MCQuestion position={position} savePositionChoice={savePositionChoice}/>
          <p> Current position is {position} </p>
          <p> Current knowledge is {knowledge} </p>
          <SubmitButton position={position} knowledge={knowledge}/>
          <Results/>
        </Grid>
      </Paper>
    </main>
  )
}


function Headline() {
  return (
    <Grid item>
      <Typography variant="h3" align="center">
        C2C Compass Questionnaire
      </Typography>
      <Typography variant="h6" align="center">
        The C2C Compass show your custom next step to reach your individual Cradle to Cradle (C2C) goal.
      </Typography>
    </Grid>
  )
}



function SubmitButton(props) {

  const handleSubmit = e => {
    //e.preventDefault();

    const data = { 
      "knowledge": props.knowledge,
      "position": props.position
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    }
    
    fetch("http://localhost:8080", requestOptions)
      .then(response => response.json())
      .then(res => console.log(res))
  }

  return (
    <Grid item>
      <Button 
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
        Submit
      </Button>
    </Grid>
  )
}


function App(){
  return (
    <Questionnaire/>
  )
}

export default App;