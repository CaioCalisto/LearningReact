import { Divider, Stack, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function CustomBreadcrumbs() {
  return (
    <>
      <Stack>
        <h3>Common</h3>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <Stack direction="row" alignItems="center">
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              MUI
            </Stack>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Stack>
      <Divider />
    </>
  );
}

export default CustomBreadcrumbs;
