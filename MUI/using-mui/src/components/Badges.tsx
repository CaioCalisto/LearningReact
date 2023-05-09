import {
  Badge,
  Divider,
  Grid,
  IconButton,
  BadgeProps,
  styled,
} from "@mui/material";
import { Stack } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -6,
    top: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Badges() {
  return (
    <>
      <Grid>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="action" />
        </Badge>
      </Grid>
      <Divider />
      <h3>Colors</h3>
      <Grid>
        <Grid>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
        </Grid>
        <Grid>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
        </Grid>
      </Grid>
      <Divider />
      <h3>Custom</h3>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={8} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Divider />
      <h3>Badge Alignment</h3>
      <Badge
        badgeContent={4}
        color="success"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MailIcon color="action" />
      </Badge>
      <Badge
        badgeContent={4}
        color="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MailIcon color="action" />
      </Badge>
    </>
  );
}

export default Badges;
