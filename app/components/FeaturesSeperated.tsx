"use client";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    image: "/solid_music.png",
    title: "CELEBRITY VOICED ARTICLE PLAYBACK",
    description:
      "Listen to your articles published on 100 of reputable websites & auralnexus narratted by popular celebs of any custom voice",
  },
  {
    image: "/solid_ai.png",
    title: "AI POWERED ARTICLE SUMMARIES",
    description:
      "Enter any article and recieve three types of AI generated summaries.",
  },
  {
    image: "/solid_reading.png",
    title: "PERFECTING THE CONTENTS",
    description:
      "Super impose AI generated summaries, with the touch of your own insights.",
  },
  {
    image: "/solid_publication.png",
    title: "SHOWCASING PUBLICATIONS",
    description: "Showcase your content to the entire Auralnexus network",
  },
  {
    image: "/solid_explore.png",
    title: "EXPLORE ENGAGING CONTENT",
    description:
      "Empower your writing with AI generated responses for unique and engaging articles.",
  },
  {
    image: "/solid_image.png",
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
  return (
    <>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Typography
          fontSize={"50px"}
          lineHeight={"57px"}
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
                margin: "20px 0px",
                justifyContent: "space-between",
                flexDirection: index % 2 == 0 ? "row-reverse" : "row",
              }}
            >
              <Image
                src={item.image}
                alt="image"
                width={500}
                height={500}
                className="img-responsive"
                // style={{ width: "30px" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: index % 2 == 0 ? "start" : "end",
                }}
              >
                <Typography fontWeight={700} fontSize={"41px"} component="h2">
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
