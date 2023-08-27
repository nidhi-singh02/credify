import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// Generate Order Data
function createData(id, date, name) {
  return { id, date, name };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz'),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Volunteers() {
  return (
    <React.Fragment>
      <h1>Volunteers</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Volunteer's Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <ButtonGroup variant="contained">
                  <Button>Approve</Button>
                  <Button color='error'>Reject</Button>
               </ButtonGroup>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}