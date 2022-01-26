import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Button,
  FormControl,
  inputLabelClasses,
} from "@mui/material";
import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useState } from "react";

//todo - combine this and mainform into one component, no longer need to be separate

const FormInput = ({ inventory, setInventory, pos }) => {
  const [localQuant, setLocalQuant] = useState(0);
  const [localSize, setLocalSize] = useState(0);
  const [localType, setLocalType] = useState("");

  const resetForm = () => {
    setLocalQuant(0);
    setLocalSize(0);
    setLocalType("");
  };

  const handleQuantChange = (e) => {
    setLocalQuant(e.target.value);
  };

  const handleSizeChange = (e) => {
    setLocalSize(e.target.value);
  };

  const handleTypeChange = (e) => {
    setLocalType(e.target.value);
  };

  const handleSubmit = (type) => {
    const copy = { ...inventory };
    const quant = parseInt(localQuant);
    switch (type) {
      case "XQD":
        pos ? (copy.XQD[localSize] += quant) : (copy.XQD[localSize] -= quant);
        setInventory(copy);
        break;
      case "SD":
        pos ? (copy.SD[localSize] += quant) : (copy.SD[localSize] -= quant);
        setInventory(copy);
        break;
      case "MicroSD":
        pos
          ? (copy.MicroSD[localSize] += quant)
          : (copy.MicroSD[localSize] -= quant);
        setInventory(copy);
        break;
      case "CF":
        pos ? (copy.CF[localSize] += quant) : (copy.CF[localSize] -= quant);
        setInventory(copy);
        break;
      case "OTHER":
        pos ? copy.other++ : copy.other--;
        setInventory(copy);
        break;
      default:
        console.log("default case");
        console.log(type);
    }
  };

  return (
    <Box
      sx={{
        margin: "2em 0em 2em 0em",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <TextField
        id="quantity"
        label="Quantity"
        variant="standard"
        type="number"
        value={localQuant > 0 ? localQuant : ""}
        onChange={handleQuantChange}
        size="small"
        sx={{ width: "5em" }}
      />
      <Box sx={{ minWidth: "5em", paddingLeft: ".4em" }}>
        <FormControl fullWidth>
          <InputLabel id="card-type-label">Type</InputLabel>
          <Select
            labelId="card-type-label"
            id="card-type"
            value={localType}
            label="Type"
            onChange={handleTypeChange}
            size="small"
            variant="standard"
          >
            <MenuItem value="XQD">XQD</MenuItem>
            <MenuItem value="SD">SD</MenuItem>
            <MenuItem value="MicroSD">MicroSD</MenuItem>
            <MenuItem value="CF">CF</MenuItem>
            <MenuItem value="OTHER">OTHER</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: "6.5em", paddingLeft: ".4em" }}>
        <FormControl fullWidth>
          <InputLabel id="card-size-label" sx={{ paddingTop: ".22em" }}>
            Size(GB)
          </InputLabel>
          <Select
            labelId="card-size-label"
            id="card-size"
            value={localSize > 0 ? localSize : ""}
            label="Size(GB)"
            onChange={handleSizeChange}
            variant="standard"
          >
            <MenuItem value={128}>128</MenuItem>
            <MenuItem value={120}>120</MenuItem>
            <MenuItem value={64}>64</MenuItem>
            <MenuItem value={32}>32</MenuItem>
            <MenuItem value={16}>16</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        onClick={() => {
          handleSubmit(localType);
          resetForm();
        }}
        variant="contained"
        sx={{ marginLeft: "1em" }}
      >
        Add to package
      </Button>
    </Box>
  );
};

export default FormInput;
