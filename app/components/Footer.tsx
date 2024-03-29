import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Image from "next/image";

const logoStyle = {
  width: "140px",
  height: "auto",
};

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: "url('/RectLight.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 100%",
      }}
    >
      <Container
        sx={{
          marginTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              minWidth: { xs: "100%", sm: "60%" },
            }}
          >
            <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
              <Box sx={{ ml: "-15px" }}>
                <Image
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                  src={"/logo.svg"}
                  width={180}
                  height={80}
                  alt="logo of sitemark"
                />
              </Box>
               <Typography variant="body2" fontWeight={600} gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Subscribe to our newsletter for weekly updates and promotions.
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap>
                <TextField
                  id="outlined-basic"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  fullWidth
                  aria-label="Enter your email address"
                  placeholder="Your email address"
                  inputProps={{
                    autocomplete: "off",
                    ariaLabel: "Enter your email address",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ flexShrink: 0 }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Box> */}
          {/* <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Product
            </Typography>
            <Link color="text.secondary" href="#">
              Features
            </Link>
            <Link color="text.secondary" href="#">
              Testimonials
            </Link>
            <Link color="text.secondary" href="#">
              Pricing
            </Link>
            <Link color="text.secondary" href="#">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Link color="text.secondary" href="#">
              About us
            </Link>
            <Link color="text.secondary" href="#">
              Careers
            </Link>
            <Link color="text.secondary" href="#">
              Press
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link color="text.secondary" href="#">
              Terms
            </Link>
            <Link color="text.secondary" href="#">
              Privacy
            </Link>
            <Link color="text.secondary" href="#">
              Contact
            </Link>
          </Box> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 4, sm: 8 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            {/* <Link color="text.secondary" href="#">
              Terms of Service
            </Link>{" "}
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography> */}
            <Link color="text.secondary" href="#">
              Security
            </Link>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {"Copyright © "}
              <Link href="#">AuralNexus&nbsp;</Link>
              {new Date().getFullYear()}
            </Typography>
          </div>
          <Stack
            direction="row"
            justifyContent="left"
            spacing={1}
            useFlexGap
            sx={{
              color: "text.secondary",
            }}
          >
            {/* <IconButton
              color="inherit"
              // href=""
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              // href=""
              aria-label="X"
              sx={{ alignSelf: "center" }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              // href=""
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              // href=""
              sx={{ alignSelf: "center" }}
            >
              <Image
                src="/google-play.svg"
                alt="google play"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton
              color="inherit"
              // href=""
              sx={{ alignSelf: "center" }}
            >
              <Image
                src="/app-store.svg"
                alt="app store"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ alignSelf: "center" }}
              href="https://open-book-frontend.vercel.app/Dashboard"
              target="_blank"
            >
              <Image
                src="/solid_logo.png"
                alt="aural nexus"
                width={24}
                height={20}
              />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
