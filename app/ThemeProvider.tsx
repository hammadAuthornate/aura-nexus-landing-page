"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
  },
});

export default function ThemeProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
