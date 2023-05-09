import {
  Box,
  Divider,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/system";
import React from "react";

function TextFields() {
  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        style={{ height: "80px" }}
        alignItems="center"
      >
        <h3>Basic</h3>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <Divider />
      <h3>Form</h3>
      <Grid>
        <TextField
          required
          id="outlined-required" // filled-required or standard-required
          label="Required"
          defaultValue="It's Required"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="I can't change"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </Grid>
      <Divider />
      <h3>Validations</h3>
      <Grid>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField error label="Error" defaultValue="Hello World" />
          <TextField
            error
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <TextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
          <TextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </Box>
      </Grid>
      <Divider />
      <h3>List</h3>
      <Grid>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {["$", "€"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Divider />
      <h3>Form with Icons</h3>
      <Grid>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>

          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>
        </Box>
      </Grid>
      <Divider />
      <h3>Colors</h3>
      <Stack direction="row" gap={2}>
        <TextField label="Outlined secondary" color="secondary" focused />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
        />
        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </Stack>
    </>
  );
}

export default TextFields;
