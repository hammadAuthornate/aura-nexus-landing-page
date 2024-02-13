"use client";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { benefits } from "./BenefitsList";

export default function BenefitsSectionComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
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
              align="center"
              mb={10}
              mt={10}
              variant={isSmallScreen ? "h5" : "h3"}
              color="primary"
            >
              <div>{benefit.header}</div>
            </Typography>
            {/* <div>
            {currentDescription && (
              <Typography variant="body2">{currentDescription}</Typography>
            )}
          </div> */}
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
                  style={{ maxHeight: 250, width: 300, padding: "20px 0px" }}
                >
                  <div
                  //   onMouseEnter={() =>
                  //     setCurrentDescription(section.description)
                  //   }
                  >
                    <Container>
                      <Typography
                        noWrap
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
                  </div>
                  {/* <Typography variant="body1">{section.description}</Typography> */}
                </Paper>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
