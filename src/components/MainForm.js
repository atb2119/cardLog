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
import Package from "./Package";

//todo - combine forminput and this into one component, no longer need to be separate

const MainForm = (props) => {
  const { inventory, setInventory, fakeDB, setFakeDB } = props;
  const [localEpNum, setLocalEpNum] = useState(0);
  const [epName, setEpName] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const [tracking, setTracking] = useState("");

  const handleEpNumChange = (e) => {
    setLocalEpNum(e.target.value);
  };

  const handleEpNameChange = (e) => {
    setEpName(e.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "1em",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TextField
            id="quantity"
            label="Ep#"
            variant="standard"
            value={localEpNum > 0 ? localEpNum : ""}
            onChange={handleEpNumChange}
            size="small"
            sx={{ width: "10%", marginRight: "1%" }}
          />
          <TextField
            id="name"
            label="Episode Name"
            variant="standard"
            value={epName}
            onChange={handleEpNameChange}
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
          date={date}
          epnum={localEpNum}
        />
        <Package
          inventory={inventory}
          epNum={localEpNum}
          date={date}
          fakeDB={fakeDB}
          setFakeDB={setFakeDB}
          epName={epName}
          tracking={tracking}
          setTracking={setTracking}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default MainForm;
