import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

function Forms() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Handle Submit: " + email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>

      <TextField value={email} onInput={(e) => setEmail(e.target.value)} />
      <br />
      <Button type="submit">Submit</Button>
      </FormControl>
    </form>
  );
}

export default Forms;
