import Typography from "@mui/material/Typography";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Roadmap() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="roadmap" style={{ marginTop: 80 }}>
      <Typography
        fontSize={isSmallScreen ? "30px" : "57px"}
        lineHeight={"57px"}
        color={"primary"}
        fontWeight={700}
        align="center"
      >
        ROADMAP
      </Typography>
      <Image
        src={"/solid_road.png"}
        alt="roadmap"
        width={900}
        height={150}
        style={{ width: "100%", height: "auto" }}
      />
      <Typography align="center">DUMMY</Typography>
    </div>
  );
}
