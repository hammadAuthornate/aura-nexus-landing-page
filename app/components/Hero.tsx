import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
    // style={{
    //   width: "100%",
    //   backgroundImage: "url(/e5.svg)",
    //   backgroundPosition: "100% 0%",
    //   backgroundRepeat: "no-repeat",
    // }}
    >
      <Box
        id="hero"
        sx={{
          // maxWidth: "1500px",
          width: "100%",
          backgroundImage:
            "linear-gradient(180deg, #fbe9e7, #FFF), url(/e5.svg)",
          backgroundSize: "100% 80%",
          backgroundPosition: "100% 0%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundImage: "url(/e5.svg)",
            backgroundPosition: "100% 0%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container
            disableGutters
            sx={{
              display: "flex",
              width: "100%",
              // backgroundImage: "url(/e5.svg)",
              // backgroundPosition: "100% 0%",
              // backgroundRepeat: "no-repeat",
              flexDirection: "column",
              alignItems: "center",
              pt: { xs: 20, sm: 30, md: 40 },
              pb: { xs: 8, sm: 12 },
            }}
          >
            <Stack
              spacing={2}
              useFlexGap
              sx={{
                width: {
                  xs: "100%",
                  sm: "70%",
                  backgroundImage: "url(/lines_white.png)",
                  backgroundSize: "auto 300px",
                  // backgroundRepeat: "repeat-x",
                  backgroundBlendMode: "darken",
                  backgroundPosition: "50% 50%",
                },
              }}
            >
              <Typography
                component="h2"
                variant={isSmallScreen ? "h5" : "h3"}
                sx={{
                  display: "inline",
                  flexDirection: { xs: "column", md: "row" },
                  alignSelf: "center",
                  textAlign: "center",
                }}
              >
                PRODUCTIVITY REDEFINED &nbsp;
                <br />
                <Typography
                  component="span"
                  variant={isSmallScreen ? "h5" : "h3"}
                  sx={{
                    display: "inline",
                    color: (theme) =>
                      theme.palette.mode === "light"
                        ? "primary.main"
                        : "primary.light",
                  }}
                >
                  LEARN MORE IN THE VOICES YOU LIKE
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
              >
                Explore our cutting-edge News dashboard, delivering high-quality
                articles with voiceover from popular celebrities. <br />
                Elevate your news viewing experience with top-tier features.
              </Typography>
              {/* <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Enter your email address",
              }}
            />
            <Button variant="contained" color="primary">
              Sign Up now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Sign Up&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography> */}
            </Stack>
            {/* <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: "center",
            height: { xs: 200, sm: 700 },
            width: "100%",
            backgroundImage: 'url("/hero-dark.png")',
            //   theme.palette.mode === "light"
            //     ? 'url("/static/images/templates/templates-images/hero-light.png")'
            //     : 'url("/static/images/templates/templates-images/hero-dark.png")',
            backgroundSize: "cover",
            borderRadius: "10px",
            outline: "1px solid",
            outlineColor:
              theme.palette.mode === "light"
                ? alpha("#BFCCD9", 0.5)
                : alpha("#9CCCFC", 0.1),
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
          })}
        /> */}
          </Container>
        </div>
      </Box>
    </div>
  );
}
