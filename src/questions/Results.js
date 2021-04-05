import * as React from "react";

import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'link', headerName: 'Link', flex: 1},
  { field: 'description', headerName: 'Description', flex: 3},
];

const rows = [
  { id: 1, link: 'Snow', description: 'Jon' },
  { id: 2, link: 'Lannister', description: 'Cersei' },
  { id: 3, link: 'Lannister', description: 'Jaime' },
  { id: 4, link: 'Stark', description: 'Arya' },
  { id: 5, link: 'Targaryen', description: 'Daenerys' },
  { id: 6, link: 'Melisandre', description: null },
  { id: 7, link: 'Clifford', description: 'Ferrara' },
  { id: 8, link: 'Frances', description: 'Rossini' },
  { id: 9, link: 'Roxie', description: 'Harvey' },
];

export default function Results() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}