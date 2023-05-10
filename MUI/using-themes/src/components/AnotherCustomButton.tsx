import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function AnotherCustomButton() {
  const theme = useTheme();

  return (
    <Button
      style={{
        color: theme.buttons.color,
        backgroundColor: theme.buttons.backgroundColor,
      }}
    >
      Click here
    </Button>
  );
}
