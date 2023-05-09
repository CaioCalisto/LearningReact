import { Button, Divider, Stack } from "@mui/material";
import React from "react";

function Buttons() {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Normal</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Disabled</h3>
        <Button disabled variant="text">
          Text
        </Button>
        <Button disabled variant="contained">
          Contained
        </Button>
        <Button disabled variant="outlined">
          Outlined
        </Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Contained</h3>
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Click</h3>
        <Button variant="outlined" onClick={() => alert("Hello world!")}>
          Click
        </Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Common Colors</h3>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center"
      >
        <h3>Custom Colors</h3>
        <Button variant="contained" color="success" style={{ color: "yellow", backgroundColor:"rgb(117,202,43)", boxShadow:"5px 10px 10px rgba(0, 0, 0, 0.2)" }}>Success</Button>
      </Stack>
      <Divider />
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "60px" }}
        alignItems="center">
          <h3>Sizes</h3>
          
        </Stack>
    </>
  );
}

export default Buttons;
