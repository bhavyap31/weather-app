import { Card, Typography } from "@material-ui/core";
import React from "react";

function LocationHeader({ city, state }) {
  return (
    <Card
      style={{
        padding: "10px",
        position: "fixed",
        zIndex: 10,
        width: "100%",
      }}
    >
      <Typography variant="h5">
        {city}, {state}
      </Typography>
    </Card>
  );
}

export default LocationHeader;
