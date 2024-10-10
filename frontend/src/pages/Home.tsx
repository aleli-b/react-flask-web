import { Box } from "@mui/material";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import "./Home.css";

export const Home = () => {
  return (
    <Box className="home">
      <Box className="first-screen">
        <Text />
        <Box className="title-wrapper">
          <Title />
        </Box>
      </Box>
      <Box className="about" id="about">
        <p>About</p>
      </Box>
    </Box>
  );
};
