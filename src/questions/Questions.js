
import * as React from "react";

import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';

import { Grid } from '@material-ui/core';


export function MCQuestion(props){

  const handleChange = (event) => {
    props.savePositionChoice(event.target.value)
  }

  return (
    <Grid item>
      <Typography variant="h5" align="center">
        2. What is your position?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup aria-label="position" name="position" value={props.position} onChange={handleChange}>
          <FormControlLabel value="Customer" control={<Radio />} label="Customer" />
          <FormControlLabel value="Producer" control={<Radio />} label="Producer" />
          <FormControlLabel value="Designer" control={<Radio />} label="Designer" />
          <FormControlLabel value="Management" control={<Radio />} label="Management" />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}


export function KnowledgeQuestion(props) {
  
  const handleChange = (event, newValue) => {
    props.saveKnowledgeChoice(newValue)
  }
  
  return(
    <Grid item>
      <Typography variant="h5" align="center">
      1. How well do you know the concept of Cradle to Cradle?
      </Typography>
      <Slider 
        className={props.classes.slider}
        defaultValue={props.knowledge}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        onChangeCommitted={handleChange}
      />
    </Grid>
  )
}