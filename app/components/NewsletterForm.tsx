"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { motion } from "framer-motion";
// import { makeStyles } from "@mui/material/mal";

const introHeaderVariants = {
  hide: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  },
};

export default function NewsletterForm() {
  // const useStyles = makeStyles(() => ({
  //   customTextField: {
  //     "& .MuiOutlinedInput-root": {
  //       "& fieldset": {
  //         borderRadius: "15px", // Change this to your desired border radius
  //       },
  //     },
  //   },
  // }));
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
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
      >
        <Typography
          fontSize={isSmallScreen ? "30px" : "57px"}
          lineHeight={isSmallScreen ? "30px" : "57px"}
          color={"primary"}
          fontWeight={400}
          align="center"
          style={{ padding: "60px 0px" }}
        >
          INTERESTED IN OUR PROJECT? <br /> REQUEST A PITCH TODAY
        </Typography>
      </motion.div>
      <Box
        sx={{
          width: 700,
          maxWidth: "100%",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={{
            hide: { opacity: 0, rotateY: 90 },
            show: {
              opacity: 1,
              rotateY: 0,
              transition: { duration: 1.2 },
            },
          }}
          style={{ width: "100%" }}
        >
          <TextField
            InputProps={{
              style: {
                borderRadius: 15,
              },
            }}
            fullWidth
            focused
            sx={{ borderRadius: "25px" }}
            variant="outlined"
            // label="Name"
            placeholder="Your Name"
            value={userData?.name || ""}
            onChange={(v) => setUserData({ ...userData, name: v.target.value })}
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={{
            hide: { opacity: 0, rotateY: 90 },
            show: {
              opacity: 1,
              rotateY: 0,
              transition: { duration: 1.2 },
            },
          }}
          style={{ width: "100%" }}
        >
          <TextField
            InputProps={{
              style: {
                borderRadius: 15,
              },
            }}
            fullWidth
            focused
            variant="outlined"
            // label="Linkedin"
            placeholder="Your Linkedin Profile"
            value={userData?.linkedIn || ""}
            onChange={(v) =>
              setUserData({ ...userData, linkedIn: v.target.value })
            }
          />
        </motion.div>
      </Box>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={{
          hide: { opacity: 0, rotateY: 90 },
          show: {
            opacity: 1,
            rotateY: 0,
            transition: { duration: 1.2 },
          },
        }}
      >
        <Box
          sx={{
            width: 700,
            maxWidth: "100%",
          }}
        >
          <TextField
            InputProps={{
              style: {
                borderRadius: 15,
              },
            }}
            focused
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "white" }}
            // label="Email"
            placeholder="Your Email"
            value={userData?.email || ""}
            onChange={(v) =>
              setUserData({ ...userData, email: v.target.value })
            }
          />
        </Box>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
      >
        <Button
          variant="contained"
          size="large"
          style={{ padding: "10px 50px", transform: "skewX(-20deg)" }}
          onClick={submitForm}
        >
          Subscribe
        </Button>
      </motion.div>
    </div>
  );
}
