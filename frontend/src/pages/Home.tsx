import { Box } from "@mui/material";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import "./Home.css";
import About from "../components/About";
import Filler from "../components/Filler";

export const Home = () => {
  return (
    <Box className="home">
      <Box className="first-screen">
        <Text />
        <Box className="title-wrapper">
          <Title />
        </Box>
      </Box>
      <Box className="filler" id="filler">
        <Filler />
      </Box>
      <Box className="about" id="about">
        <About />
      </Box>
    </Box>
  );
};
