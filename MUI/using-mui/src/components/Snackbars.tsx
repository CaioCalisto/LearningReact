import { Alert, Button, Divider, Snackbar, Stack } from "@mui/material";
import React from "react";

function Snackbars() {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<string>("success");

  const showSuccessAlert = () => {
    setSeverity("success");
    setOpen(true);
  };

  const showErrorAlert = () => {
    setSeverity("error");
    setOpen(true);
  };

  const showWarningAlert = () => {
    setSeverity("warning");
    setOpen(true);
  };

  const showInfoAlert = () => {
    setSeverity("info");
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        style={{ height: "80px" }}
        alignItems="center"
      >
        <Button variant="outlined" onClick={showSuccessAlert}>
          Success
        </Button>
        <Button variant="outlined" onClick={showErrorAlert}>
          Error
        </Button>
        <Button variant="outlined" onClick={showWarningAlert}>
          Warning
        </Button>
        <Button variant="outlined" onClick={showInfoAlert}>
          Info
        </Button>
      </Stack>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          This is a message!
        </Alert>
      </Snackbar>
      <Divider />
    </>
  );
}

export default Snackbars;
