import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  name,
  total,
  sixteen,
  thirtyTwo,
  sixtyFour,
  oneTwenty,
  oneTwentyEight
) {
  return {
    name,
    total,
    sixteen,
    thirtyTwo,
    sixtyFour,
    oneTwenty,
    oneTwentyEight,
  };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Inventory() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">16GB</TableCell>
            <TableCell align="right">32GB</TableCell>
            <TableCell align="right">64GB</TableCell>
            <TableCell align="right">120GB</TableCell>
            <TableCell align="right">128B</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.sixteen}</TableCell>
              <TableCell align="right">{row.thirtyTwo}</TableCell>
              <TableCell align="right">{row.sixtyFour}</TableCell>
              <TableCell align="right">{row.oneTwenty}</TableCell>
              <TableCell align="right">{row.oneTwentyEight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
