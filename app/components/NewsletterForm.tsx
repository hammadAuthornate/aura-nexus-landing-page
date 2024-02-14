"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

export default function NewsletterForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [userData, setUserData] = useState<{
    name?: string;
    linkedIn?: string;
    email?: string;
  } | null>(null);

  const submitForm = async () => {
    console.log(userData);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      // body: {
      //   name: userData?.name || "",
      //   email: userData?.email,
      //   linkedIn: userData?.linkedIn,
      // },
      body: JSON.stringify(userData),
    });
    if (response.ok) {
      console.log("Email sent successfully");
    } else {
      console.error("Error sending email");
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
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          placeholder="Your Name"
          value={userData?.name || ""}
          onChange={(v) => setUserData({ ...userData, name: v.target.value })}
        />
        <TextField
          variant="outlined"
          label="Linkedin"
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
          fullWidth
          variant="outlined"
          label="Email"
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
