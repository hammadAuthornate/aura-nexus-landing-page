"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const items = [
  {
    image: "/ai_audio_content.webp",
    title: "CELEBRITY VOICED ARTICLE PLAYBACK",
    description:
      "Listen to your articles published on 100 of reputable websites & auralnexus narratted by popular celebs of any custom voice",
  },
  {
    image: "/ai_brain.webp",
    title: "AI POWERED ARTICLE SUMMARIES",
    description:
      "Enter any article and recieve three types of AI generated summaries.",
  },
  {
    image: "/ai_content.webp",
    title: "PERFECTING THE CONTENTS",
    description:
      "Super impose AI generated summaries, with the touch of your own insights.",
  },
  {
    image: "/ai_publication.webp",
    title: "SHOWCASING PUBLICATIONS",
    description: "Showcase your content to the entire Auralnexus network",
  },
  {
    image: "/ai_search.webp",
    title: "EXPLORE ENGAGING CONTENT",
    description:
      "Empower your writing with AI generated responses for unique and engaging articles.",
  },
  {
    image: "/ai_thumbnail.webp",
    title: "GET UNIQUE GENERATIVE THUMBNALS",
    description:
      "Auralnexus creates captivating images for your articles using advanced AI technologes.",
  },
];

const introHeaderVariants = {
  hide: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const introHeaderVariantsOpposite = {
  hide: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function FeaturesSeperated() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Typography
          fontSize={isSmallScreen ? "24px" : "50px"}
          lineHeight={isSmallScreen ? "24px" : "57px"}
          fontWeight={700}
          color={"primary"}
          align="center"
        >
          INCENTIVIZING YOUR VOICE
        </Typography>
        {/* <Grid container spacing={6}> */}
        {items.map((item, index) => {
          return (
            <motion.div
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={
                index % 2 == 0
                  ? introHeaderVariants
                  : introHeaderVariantsOpposite
              }
              key={index}
              style={{
                display: "flex",
                margin: "80px 0px",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: isSmallScreen
                  ? "column"
                  : index % 2 == 0
                  ? "row-reverse"
                  : "row",
              }}
            >
              <Image
                src={item.image}
                alt="image"
                width={300}
                height={400}
                className="img-responsive"
                style={{
                  maxWidth: "200px",
                  height: "auto",
                  maxHeight: "230px",
                }}
                // style={{ width: "30px" }}
              />
              <div
                style={{
                  maxWidth: "800px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: isSmallScreen
                    ? "center"
                    : index % 2 == 0
                    ? "start"
                    : "end",
                }}
              >
                <Typography
                  fontWeight={700}
                  fontSize={isSmallScreen ? "21px" : "41px"}
                  component="h3"
                >
                  {item.title}
                </Typography>
                <Typography fontSize={"23px"}>{item.description}</Typography>
              </div>
            </motion.div>
          );
        })}
        {/* </Grid> */}
      </Container>
    </>
  );
}
