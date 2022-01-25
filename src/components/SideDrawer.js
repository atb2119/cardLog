import React from "react";
import { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton, Paper } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const SideDrawer = ({ drawerOpen, handleClose, inventory }) => {
  const total = (obj) => {
    let sum = Object.values(obj).reduce((prev, curr) => prev + curr);
    return sum;
  };

  // const [localState, setLocalState] = useState(inventory);

  // useEffect(() => {
  //   setLocalState(inventory);
  //   console.log(localState.XQD[128]);
  // }, []);

  return (
    <Box sx={{ display: "flex" }} key={inventory}>
      <Drawer variant="persistent" anchor="right" open={drawerOpen}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={handleClose}>
            <ChevronRight />
          </IconButton>
          <Typography sx={{ paddingTop: "1em", paddingLeft: "5em" }}>
            Package Builder
          </Typography>
        </Box>

        <Paper>
          <Box
            sx={{
              width: "20vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "1em",
            }}
          >
            <Typography paragraph>XQD: {total(inventory.XQD)}</Typography>
            <Typography paragraph>SD: {total(inventory.SD)}</Typography>
            <Typography paragraph>
              MicroSD: {total(inventory.MicroSD)}
            </Typography>
            <Typography paragraph>CF: {total(inventory.CF)}</Typography>
          </Box>
        </Paper>
      </Drawer>
    </Box>
  );
};

export default SideDrawer;
