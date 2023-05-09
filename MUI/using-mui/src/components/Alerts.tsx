import { Alert, AlertTitle, Button, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Alerts() {
  return (
    <>
      <Stack gap={3}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </Stack>
      <Divider />
      <h3>With title</h3>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Divider />
      <h3>Actions</h3>
      <Stack gap={2}>
        <Alert onClose={() => {}}>
          This is a success alert — check it out!
        </Alert>
        <Alert
          action={
            <Button onClick={() => alert('Common alert')} color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Stack>
    </>
  );
}

export default Alerts;
