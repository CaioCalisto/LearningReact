import { AppBar, Toolbar } from "@mui/material";

function Footer() {
  return (
    <AppBar
      style={{ position: "static", backgroundColor: "#525252", height: "8vh", color: "white" }}
    >
      <Toolbar style={{ justifyContent: "space-evenly" }}>
        <h5>Footer</h5>
        <h5>Footer</h5>
        <h5>Footer</h5>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
