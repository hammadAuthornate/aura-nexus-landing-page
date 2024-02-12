"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
  },
});

export default function ThemeProviderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
