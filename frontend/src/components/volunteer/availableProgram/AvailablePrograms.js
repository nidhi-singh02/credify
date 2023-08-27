import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

import * as React from "react";

// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(0, "16 Mar, 2019", "Program 1"),
  createData(1, "16 Mar, 2019", "Program 2"),
  createData(2, "16 Mar, 2019", "Program 3"),
  createData(3, "16 Mar, 2019", "Program 4"),
  createData(4, "15 Mar, 2019", "Program 4"),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function AvailablePrograms() {
  return (
    <React.Fragment>
      <h1>Available Programs</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Available Program's Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                  <Button variant='contained' color='success'>Sign Up</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
