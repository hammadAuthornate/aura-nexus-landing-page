"use client";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const benefits = [
  {
    header: "Celebrity voiced article",
    children: [
      {
        title: "Enhanced Engagement",
        description:
          "Hearing articles narrated by popular celebrities adds an element of excitement and novelty, increasing user engagement and time spent on the website.",
      },
      {
        title: "Accessibility",
        description:
          "For users with visual impairments or those who prefer consuming content audibly, this feature provides an accessible way to access website content.",
      },
      {
        title: "Personalization",
        description:
          "Allowing users to choose from a variety of celebrity voices adds a personalized touch to the user experience, catering to different preferences and tastes.",
      },
      {
        title: "Brand Association",
        description:
          "Associating a website with popular celebrities can enhance its brand image and credibility, attracting more visitors and potential customers.",
      },
      {
        title: "Increased Traffic",
        description:
          "The allure of hearing articles narrated by celebrities can drive more traffic to the website, especially if users are encouraged to share their favorite narrations on social media platforms.",
      },
      {
        title: "Monetization Opportunities",
        description:
          "The allure of hearing articles narrated by celebrities can drive more traffic to the website, especially if users are encouraged to share their favorite narrations on social media platforms.",
      },
    ],
  },
  {
    header: "AI Powered Article Summaries",
    children: [
      {
        title: "Time-Saving",
        description:
          "Users can quickly grasp the key points of an article without having to read the entire piece, saving them time and effort.",
      },
      {
        title: "Improved Accessibility",
        description:
          "For users with limited time or those who prefer concise information, AI-generated summaries provide an accessible way to digest content.",
      },
      {
        title: "Enhanced User Experience",
        description:
          "Providing multiple types of summaries tailored to different preferences (e.g., bullet points, keyword highlights, abstracts) caters to a diverse audience, improving overall user satisfaction.",
      },
      {
        title: "Increased Engagement",
        description:
          "Users are more likely to engage with content when they can easily understand its main points, leading to higher retention rates and return visits to the website.",
      },
      {
        title: "SEO Benefits",
        description:
          "Summarized content can improve the website's search engine optimization by providing clear, structured information that search engines can index and rank more effectively.",
      },
      {
        title: "Monetization Opportunities",
        description:
          "Offering premium features such as detailed or customizable summaries can be monetized through subscription models or pay-per-use, creating revenue streams for the website owner.",
      },
    ],
  },
  {
    header: "Perfecting the contents",
    children: [
      {
        title: "Enhanced Understanding",
        description:
          "By combining AI-generated summaries with human insights, users gain a deeper understanding of the content. AI can provide a quick overview of the key points, while human insights offer context, analysis, and additional perspectives, enriching the user experience.",
      },
      {
        title: "Increased Credibility",
        description:
          "Human insights add credibility and authenticity to the summaries. Users are more likely to trust information supplemented with expert opinions or personalized commentary, leading to a stronger connection with the content and the website as a whole.",
      },
      {
        title: "Customization",
        description:
          "The fusion of AI-generated summaries and human insights allows for customization based on user preferences and interests. Users can choose the level of detail they want, ranging from concise summaries to more in-depth analyses, tailoring their experience to suit their needs.",
      },
      {
        title: "Differentiation",
        description:
          "Websites that offer AI-generated summaries enhanced with personalized insights stand out from competitors by providing a unique and value-added service. This differentiation can attract and retain users who appreciate the blend of automated efficiency and human expertise.",
      },
      {
        title: "Improved Engagement",
        description:
          "Combining AI-generated summaries with human insights creates a more engaging experience for users. The interplay between automated summarization and human commentary stimulates curiosity, encourages exploration, and fosters deeper engagement with the content.",
      },
      {
        title: "Community Building",
        description:
          "Incorporating human insights into AI-generated summaries can foster a sense of community among users. Encouraging discussions, comments, or contributions from experts and other users further enriches the content and creates opportunities for interaction and knowledge sharing.",
      },
    ],
  },
  {
    header: "Showcasing Publications",
    children: [
      {
        title: "Increased Visibility",
        description:
          "By showcasing your content on the Auralnexus network, you gain access to a broader audience beyond your website's current reach. This exposure can attract new visitors and potential customers who may be interested in your publications.",
      },
      {
        title: "Networking Opportunities",
        description:
          "Being part of the Auralnexus network allows you to connect with other content creators, publishers, and industry professionals. This networking can lead to collaborations, partnerships, and knowledge sharing, enriching your content and expanding your professional network.",
      },
      {
        title: "Brand Building",
        description:
          "Showcasing your publications on a reputable platform like Auralnexus enhances your brand's credibility and authority in your industry or niche. Users are more likely to trust content that is endorsed by a well-established network, contributing to brand awareness and loyalty.",
      },
      {
        title: "Cross-Promotion",
        description:
          "Through the Auralnexus network, you can cross-promote your publications with other relevant content, reaching audiences interested in similar topics or themes. This cross-promotion can drive traffic back to your website and increase engagement with your content.",
      },
      {
        title: "Analytics and Insights",
        description:
          "The Auralnexus platform likely offers analytics and insights into how your publications are performing across the network. By accessing this data, you can gain valuable insights into audience behavior, preferences, and trends, which can inform your content strategy and optimization efforts.",
      },
      {
        title: "Monetization Opportunities",
        description:
          "Depending on the Auralnexus network's monetization model, showcasing your publications may also open up opportunities for revenue generation, such as through advertising, sponsored content, or premium memberships.",
      },
    ],
  },
];

export default function BenefitsSectionComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [currentDescription, setCurrentDescription] = useState("");
  return (
    <Container>
      {benefits.map((benefit, index) => (
        <>
          <Typography
            align="center"
            mb={10}
            mt={10}
            variant={isSmallScreen ? "h5" : "h3"}
            color="primary"
            key={index}
          >
            <div>{benefit.header}</div>
          </Typography>
          <div>
            {currentDescription && (
              <Typography variant="body2">{currentDescription}</Typography>
            )}
          </div>
          <div
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
              <Paper
                elevation={3}
                key={index2}
                style={{ height: 200, width: 200 }}
              >
                <div
                  onMouseEnter={() =>
                    setCurrentDescription(section.description)
                  }
                >
                  <Container>
                    <Typography align="center" variant="h6">
                      {section.title}
                    </Typography>
                  </Container>
                </div>
                {/* <Typography variant="body1">{section.description}</Typography> */}
              </Paper>
            ))}
          </div>
        </>
      ))}
    </Container>
  );
}
