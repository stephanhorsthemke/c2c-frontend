import * as React from "react";

import { DataGrid } from '@material-ui/data-grid';
import {Typography, Grid } from '@material-ui/core';


const columns = [
  { field: 'link', headerName: 'Link', flex: 1},
  { field: 'description', headerName: 'Beschreibung', flex: 3},
];

export default function Results(props) {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Results
        </Typography>
        <Typography variant="h6" align="center">
          Leider noch nicht ganz ein Kompass.
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={props.result} columns={columns} pageSize={10} />
        </div>
      </Grid>

    </React.Fragment>
  );
}