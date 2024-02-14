import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconButton, Paper } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const introHeaderVariants = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const teams = [
  {
    name: "GHULAM HAIDER",
    description: "Founder & CEO",
    image: "/teams_1.jpg",
    linkedin: "https://ca.linkedin.com/in/haidersattar",
  },
  {
    name: "AUTHORNATE",
    description: "Development Partners",
    image: "/teams_2.jpg",
    linkedin: "https://www.linkedin.com/company/authornate",
  },
];

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
        marginTop: "250px",
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
          gap: isSmallScreen ? "40px" : "180px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {teams.map((team, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.2,
            }}
          >
            <Paper
              elevation={0}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0px 0px",
                width: "250px",
                height: "350px",
                backgroundColor: "rgba(255,255,255,0)",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={team.image}
                alt="team"
                width={250}
                height={250}
                style={{ borderRadius: "30px" }}
              />
              <Typography fontWeight={600} align="center" fontSize={"26px"}>
                {team.name}
              </Typography>
              <Typography align="center" fontSize={"16px"}>
                {team.description}
              </Typography>
              <a href={team.linkedin} target="_blank">
                <IconButton
                  // color="inherit"
                  // href=""
                  sx={{ alignSelf: "center" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </a>
            </Paper>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
