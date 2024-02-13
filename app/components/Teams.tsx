import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { motion } from "framer-motion";

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
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 2 }}
        style={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: "60px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
        </div>
      </motion.div>
    </div>
  );
}
