import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

const MainForm = (props) => {
  const { inventory, setInventory } = props;
  const [localEpNum, setLocalEpNum] = useState(0);
  const [direction, setDirection] = useState("send");
  const [date, setDate] = useState(new Date());

  const handleEpNumChange = (e) => {
    setLocalEpNum(e.target.value);
  };

  const handleToggle = (e, d) => {
    setDirection(d);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          padding: "2em",
        }}
      >
        <Box>
          <ToggleButtonGroup
            exclusive
            value={direction}
            onChange={handleToggle}
            size="large"
          >
            <ToggleButton value={"send"}>SEND</ToggleButton>
            <ToggleButton value={"receive"}>RECEIVE</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            id="quantity"
            label="Episode #"
            variant="standard"
            value={localEpNum > 0 ? localEpNum : ""}
            onChange={handleEpNumChange}
            size="small"
          />
          <DesktopDatePicker
            InputProps={{
              style: {
                height: "1.8em",
                width: "14em",
                marginLeft: "0.5em",
              },
            }}
            label="Date"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={setDate}
            variant={"standard"}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        <FormInput
          setInventory={setInventory}
          inventory={inventory}
          pos={true}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default MainForm;
