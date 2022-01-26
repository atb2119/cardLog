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
import PackageCard from "./PackageCard.js";

const PackagesContainer = ({ fakeDB }) => {
  if (!fakeDB.sent) {
    console.log("in if");
    return <div></div>;
  } else {
    console.log("in else");
    const packages = fakeDB.sent.map((ele) => {
      return (
        <PackageCard
          epnum={ele["epnum"]}
          date={ele["date"]}
          epName={ele["epName"]}
        />
      );
    });
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>Packages Out:</Typography>
        <Box sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
          {packages}
        </Box>
      </Box>
    );
  }
};

export default PackagesContainer;
