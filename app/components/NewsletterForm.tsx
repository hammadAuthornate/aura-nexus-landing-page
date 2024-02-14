"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";

export default function NewsletterForm() {
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleClick = (message: string) => {
    setSnackbarMessage(message);
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [userData, setUserData] = useState<{
    name?: string;
    linkedIn?: string;
    email?: string;
  } | null>(null);

  const submitForm = async () => {
    if (!userData?.email || !userData?.name || !userData?.linkedIn) {
      handleClick("Please add missing fields.");
    } else {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        handleClick("Email sent successfully");
      } else {
        handleClick("Error sending email");
      }
    }
  };
  return (
    <div
      id="newsletter"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: "250px",
        paddingTop: "40px",
        backgroundImage: "url(/snake.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 100%",
        width: "100%",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarMessage}
        // action={action}
      />
      <Typography
        fontSize={isSmallScreen ? "30px" : "57px"}
        lineHeight={isSmallScreen ? "30px" : "57px"}
        color={"primary"}
        fontWeight={700}
        align="center"
        style={{ padding: "20px 0px" }}
      >
        INTERESTED IN OUR PROJECT? <br /> REQUEST A PITCH TODAY
      </Typography>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          focused
          // sx={{ border: "-1px solid #ff5722", borderRadius: "5px" }}
          variant="outlined"
          // label="Name"
          placeholder="Your Name"
          value={userData?.name || ""}
          onChange={(v) => setUserData({ ...userData, name: v.target.value })}
        />
        <TextField
          focused
          variant="outlined"
          // label="Linkedin"
          placeholder="Your Linkedin Profile"
          value={userData?.linkedIn || ""}
          onChange={(v) =>
            setUserData({ ...userData, linkedIn: v.target.value })
          }
        />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          focused
          fullWidth
          variant="outlined"
          // label="Email"
          placeholder="Your Email"
          value={userData?.email || ""}
          onChange={(v) => setUserData({ ...userData, email: v.target.value })}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        style={{ padding: "10px 50px", transform: "skewX(-20deg)" }}
        onClick={submitForm}
      >
        Subscribe
      </Button>
    </div>
  );
}
