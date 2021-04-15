import React, {useState} from "react";

import {MCQuestion, KnowledgeQuestion} from './questions/Questions';
import Results from './questions/Results';

import { makeStyles, Paper, Typography, Button, Grid } from '@material-ui/core';

// https://material-ui.com/components/typography/#typography
import 'fontsource-roboto';

const BACKEND = "https://c2c-backend-vupu65ymaq-ey.a.run.app"
//const BACKEND = "http://localhost:8080"

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

  const [result, saveResult] = useState([{
    "id": 1,
    "link": "",
    "description": ""
  }])

  const classes = useStyles();
  
  return(
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container spacing={7} direction="column" justify="space-evenly">
          <Headline/>
          <KnowledgeQuestion classes={classes} knowledge={knowledge} saveKnowledgeChoice={saveKnowledgeChoice}/>
          <MCQuestion position={position} savePositionChoice={savePositionChoice}/>
          <SubmitButton position={position} knowledge={knowledge} saveResult={saveResult}/>
          <RefreshButton/>
          <Results result={result}/>
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
    const data = { 
      "knowledge": props.knowledge,
      "position": props.position
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    }

    fetch(BACKEND, requestOptions)
      .then(response => response.json())
      .then(res => {
        if (res != null){
          props.saveResult(res)
        }else{
          props.saveResult([{
            "id": 1,
            "link": "Keine Links gefunden",
            "description": "Team! Wir müssen mehr Links sammeln!"
          }])
        }
      })

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

function RefreshButton(props) {

  const handleSubmit = e => {

    const requestOptions = {
      method: "GET",
    }

    fetch(BACKEND, requestOptions)
  }

  return (
    <Grid item>
      <Button 
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
        Refresh Data
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