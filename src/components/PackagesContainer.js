import React from "react";
import { Box, Typography } from "@mui/material";
import PackageCard from "./PackageCard.js";

const PackagesContainer = ({ fakeDB }) => {
  if (!fakeDB.sent) {
    return <div></div>;
  } else {
    const packages = fakeDB.sent.map((ele) => {
      return (
        <PackageCard
          epnum={ele["epnum"]}
          date={ele["date"]}
          epName={ele["epName"]}
          tracking={ele["tracking"]}
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
          marginTop: "1em",
        }}
      >
        <Typography variant="h5">Packages Out:</Typography>
        <Box sx={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
          {packages}
        </Box>
      </Box>
    );
  }
};

export default PackagesContainer;
