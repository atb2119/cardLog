import React from "react";
import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";

const NavBar = ({ handleOpen }) => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Inventory
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
