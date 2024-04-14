import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Experience from "./Experience.jsx";
import { Leva } from "leva";
import {
  ChakraProvider,
  Box,
  Container,
  Flex,
  Heading,
  extendTheme,
  Text,
} from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Silkscreen DotGothic16 sans-serif",
    heading: "Silkscreen DotGothic16 sans-serif",
  },
});

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <ChakraProvider theme={theme}>
      <Leva />
      <Canvas
        flat
        gl={{
          antialias: true,
          alpha: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [0, 2, 10],
        }}
      >
        {/* <OrbitControls/> */}
        {/* <color args={ [ '#030202' ] } attach="background" /> */}
        <Experience />
      </Canvas>
      <Box px={2} color="white" position="fixed" top={0}>
        <Container maxW="container.lg">
          <Flex
            as="header"
            py="2"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading
              as="h1"
              fontFamily={"Silkscreen"}
              fontSize={{ base: "2l", md: "lg" }}
              letterSpacing="3px"
            >
              SAKURAI'S
              <br /> PORTFOLIO
              <br />
              SITE
            </Heading>
          </Flex>
        </Container>
      </Box>


    </ChakraProvider>
  </>
);
