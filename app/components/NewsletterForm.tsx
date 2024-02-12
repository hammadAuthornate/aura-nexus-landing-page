"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function NewsletterForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 40,
      }}
    >
      <Typography
        fontSize={isSmallScreen ? "30px" : "57px"}
        lineHeight={isSmallScreen ? "30px" : "57px"}
        color={"primary"}
        fontWeight={700}
        align="center"
        style={{ padding: "20px 0px" }}
      >
        SUBSCRIBE TO OUR NEWSLETTER
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          placeholder="Your Name"
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          placeholder="Your Email"
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        style={{ padding: "10px 50px", transform: "skewX(-20deg)" }}
      >
        Subscribe
      </Button>
    </div>
  );
}
