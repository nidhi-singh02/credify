import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

function createData(id, date, name, numberOfVolunteers) {
  return { id, date, name, numberOfVolunteers };
}

const rows = [
  createData(0, "16 Mar, 2019", "Food Distribution", 150),
  createData(1, "16 Mar, 2019", "Mid day meal", 240),
  createData(2, "16 Mar, 2019", "Garbage Collection", 50),
];

const noUnderlineLink = {
  textDecoration: "none",
};

export default function CreatedPrograms() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h1>My Programs</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Programs's Name</TableCell>
            <TableCell>Number of volunteers applied</TableCell>
            <TableCell>List Volunteers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Link to="/government" style={noUnderlineLink}>
                  {row.numberOfVolunteers}
                </Link>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/government");
                  }}
                >
                  Check Volunteer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
