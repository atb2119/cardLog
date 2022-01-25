import React from "react";
import { useState } from "react";
import { Grid, Paper, Drawer, Box, Typography } from "@mui/material";
import SideDrawer from "./SideDrawer";
import NavBar from "./NavBar";
import MainForm from "./MainForm";
import Package from "./Package";

const MainContainer = () => {
  const initInventory = {
    XQD: {
      32: 0,
      64: 0,
      120: 0,
      128: 0,
    },
    SD: {
      16: 0,
      32: 0,
      64: 0,
    },
    MicroSD: {
      16: 0,
      32: 0,
      64: 0,
    },
    CF: {
      16: 0,
      32: 0,
      64: 0,
      128: 0,
    },
    Other: 0,
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [inventory, setInventory] = useState(initInventory);

  const handleOpen = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {/*Nav Bar*/}
      <NavBar handleOpen={handleOpen} />
      <Typography variant="h3" sx={{ margin: ".5em" }}>
        Package Builder v0
      </Typography>
      {/*Main Page/Form */}
      <div>
        <MainForm inventory={inventory} setInventory={setInventory} />
        <Package inventory={inventory} setInventory={setInventory} />
      </div>
      {/*persistent side drawer */}
      <SideDrawer
        drawerOpen={drawerOpen}
        handleClose={handleClose}
        inventory={inventory}
      />
    </Box>
  );
};

export default MainContainer;
