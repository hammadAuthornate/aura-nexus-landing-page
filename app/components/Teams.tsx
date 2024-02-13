import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";

const introHeaderVariants = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function TeamsComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      id="team"
      style={{
        backgroundImage: "url(/WaveLineDense.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0%",
      }}
    >
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
      >
        <Typography
          fontSize={isSmallScreen ? "30px" : "57px"}
          lineHeight={"57px"}
          color={"primary"}
          fontWeight={700}
          align="center"
          mt={20}
        >
          MEET THE VISIONARIES <br />
          BEHIND AURALNEXUS
        </Typography>
      </motion.div>

      <motion.div
        exit="hide"
        whileInView="show"
        initial="hide"
        variants={{
          hide: { opacity: 0, rotateX: 90 },
          show: {
            opacity: 1,
            rotateX: 0,
            transition: { duration: 1.2 },
          },
        }}
        // initial={{ opacity: 0, rotateX: 90 }}
        // animate={{ opacity: 1, rotateX: 0 }}
        // transition={{ duration: 2 }}
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 20px",
              width: "250px",
              height: "300px",
              backgroundColor: "rgba(255,255,255,0.5)",
              justifyContent: "space-between",
            }}
          >
            <Image
              src={"/teams_1.jpg"}
              alt="team"
              width={200}
              height={200}
              style={{ borderRadius: "30px" }}
            />
            <Typography align="center" fontSize={"30px"}>
              GHULAM HAIDER
            </Typography>
            <Typography align="center" fontSize={"20px"}>
              Founder and CEO
            </Typography>
          </Paper>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
        >
          <Paper
            elevation={3}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 20px",
              width: "250px",
              height: "300px",
              backgroundColor: "rgba(255,255,255,0.5)",
              justifyContent: "space-between",
            }}
          >
            <Image
              src={"/teams_2.jpg"}
              alt="team"
              width={200}
              height={200}
              style={{ borderRadius: "30px" }}
            />
            <Typography align="center" fontSize={"30px"}>
              AUTHORNATE
            </Typography>
            <Typography align="center" fontSize={"20px"}>
              Technical Team
            </Typography>
          </Paper>
        </motion.div>
      </motion.div>
    </div>
  );
}
