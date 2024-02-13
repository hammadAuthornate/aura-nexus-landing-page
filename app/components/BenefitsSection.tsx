"use client";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { benefits } from "./BenefitsList";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  },
};

export default function BenefitsSectionComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      id="features"
      style={{
        maxWidth: "2500px",
        width: "100%",
        backgroundImage: "url('/WaveLine.svg')",
      }}
    >
      <Container style={{ maxWidth: "1200px" }}>
        {benefits.map((benefit, index) => (
          <div key={index}>
            <Typography
              fontSize={isSmallScreen ? "24px" : "50px"}
              lineHeight={isSmallScreen ? "24px" : "57px"}
              fontWeight={700}
              align="center"
              mb={10}
              mt={10}
              variant={isSmallScreen ? "h5" : "h3"}
              color="primary"
            >
              <div>{benefit.header}</div>
            </Typography>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={introHeaderVariants}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "40px",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              {benefit.children.map((section, index2) => (
                <motion.div
                  key={index2}
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    //   className="scale-on-hover"
                    elevation={3}
                    style={{
                      maxHeight: 350,
                      width: 300,
                      padding: "20px 0px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={section.icon || "/OIG4.jpeg"}
                      alt="card image"
                      width={250}
                      height={100}
                      style={{ width: "40%", height: "auto" }}
                    />
                    <CardContent>
                      <Container disableGutters>
                        <Typography
                          color="secondary"
                          align="center"
                          variant="h6"
                        >
                          {section.title}
                        </Typography>
                        <Typography
                          fontSize={"14px"}
                          align="center"
                          variant="body1"
                        >
                          {section.description}
                        </Typography>
                      </Container>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </Container>
    </div>
  );
}
