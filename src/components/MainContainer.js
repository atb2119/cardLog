import React from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  Drawer,
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SideDrawer from "./SideDrawer";
import NavBar from "./NavBar";
import MainForm from "./MainForm";
import Package from "./Package";
import PackagesContainer from "./PackagesContainer";

const MainContainer = () => {
  //mock DB
  const DB = {
    fullInv: {
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
    },
    sent: [],
    //epnum: {contents}
  };
  //package inventory
  const packageInventory = {
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

  const [direction, setDirection] = useState("send");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [inventory, setInventory] = useState(packageInventory);
  const [fakeDB, setFakeDB] = useState(DB);

  const handleOpen = () => {
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const handleToggle = (e, d) => {
    setDirection(d);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      {/*Nav Bar*/}
      <NavBar handleOpen={handleOpen} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          minHeight: "1em",
          width: "100vw",
        }}
      >
        <ToggleButtonGroup
          exclusive
          value={direction}
          onChange={handleToggle}
          size="large"
        >
          <ToggleButton value={"send"}>SEND</ToggleButton>
          <ToggleButton value={"receive"}>RECEIVE</ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="h3" sx={{ marginRight: "10%" }}>
          Package Builder v0
        </Typography>
        <div />
      </div>

      {/*Main Page/Form */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MainForm
          inventory={inventory}
          setInventory={setInventory}
          fakeDB={fakeDB}
          setFakeDB={setFakeDB}
        />
      </Box>
      <PackagesContainer fakeDB={fakeDB} key={fakeDB} />
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
