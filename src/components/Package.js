import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

/*TODO
Send button - submit to fake DB, reset form
Notes section
*/

const Package = ({
  inventory,
  setInventory,
  fakeDB,
  setFakeDB,
  epNum,
  date,
  epName,
  tracking,
  setTracking,
}) => {
  const handleSetTracking = (e) => {
    setTracking(e.target.value);
  };

  const handleSubmit = () => {
    const obj = { ...inventory };
    obj["date"] = date;
    obj["epnum"] = epNum;
    obj["epName"] = epName;
    obj["tracking"] = tracking;
    const fakeFakeDB = { ...fakeDB };
    fakeFakeDB.sent.push(obj);
    setFakeDB(fakeFakeDB);
    console.log(fakeDB);
  };

  //function to pull positive values out of inventory - lol this is terrible, refacator this
  const extract = (inv) => {
    const extracted = [];
    for (let type in inv) {
      if (inv[type] instanceof Object) {
        for (let size in inv[type]) {
          if (inv[type][size] > 0) {
            extracted.push([type, size, inv[type][size]]); //type, size, inv[type][size] = XQD, 32, 8
          }
        }
      } else if (inv[type] > 0) {
        //dummy data - eventually add logic for hard drives etc
        extracted.push([type, "2TB", inv[type]]);
      }
    }
    return extracted;
  };

  const reset = (type, size) => {
    const copy = { ...inventory };
    copy[type][size] = 0;
    setInventory(copy);
  };

  const rows = extract(inventory);

  return (
    <Box sx={{ minWidth: "10em", minHeight: "8em", border: "2px solid black" }}>
      <Paper>
        <Typography> PACKAGE - SEND </Typography>
        <Typography sx={{ fontSize: "12px" }}> Ep: 17512 </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Size(GB)</TableCell>
                <TableCell>Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    borderTop: 2,
                    borderBottom: 1,
                    background: "#b4ff92",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell>{row[1]}</TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell sx={{ align: "right" }}>
                    <Button
                      variant="contained"
                      onClick={() => reset(row[0], row[1])}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TextField
            value={tracking}
            onChange={handleSetTracking}
            label="Tracking#"
            size="small"
          />
          <Button variant="contained" onClick={handleSubmit}>
            SEND!
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Package;
