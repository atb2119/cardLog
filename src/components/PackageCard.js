import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Paper,
  Typography,
  Button,
} from "@mui/material";

/*
needs: ep num, send date, package inventory
*/

const PackageCard = ({ epnum, date, epName, tracking }) => {
  return (
    <Card elevation={4} sx={{ minWidth: 275, margin: ".5em" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {epnum}
        </Typography>
        <Typography variant="h6" component="div">
          {epName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Sent: {date}
        </Typography>
        <Typography variant="body2">Tracking #: {tracking}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See Contents</Button>
      </CardActions>
    </Card>
  );
};

export default PackageCard;
