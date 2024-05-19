import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Experience from "./Experience.jsx";
import Test1 from "./Test1.jsx";
import Contact from "./Contact.jsx";
// import Skill from "./Skill.jsx";
import Header from "./Header";
import { Suspense, useState, useRef, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import {
  ChakraProvider,
  extendTheme,
  Stack,
  SimpleGrid,
  GridItem,
  Center,
  VisuallyHidden,
  Input,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import HtmlContent from "./HtmlContent.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { useMenu, useMenuDispatch } from "./context/MenuContext";
import * as THREE from "three";
import planePosition32Array from "./attributes/plane.js";
import {
  chakra,
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    body: "Silkscreen DotGothic16 sans-serif",
    heading: "Silkscreen DotGothic16 sans-serif",
  },
});

const App = () => {
  const childRef = useRef();
  const reducer = useMenuDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  let isAnimation = false;
  let currentIndex = 0;
  const stackRef = useRef();

  const updatePosition = () => {
    if (isAnimation) return;
    isAnimation = true;
    currentIndex =
      (currentIndex + 1 + planePosition32Array.length) %
      planePosition32Array.length;
    childRef.current
      .getMesh()
      .geometry.setAttribute(
        "aPosition",
        new THREE.BufferAttribute(planePosition32Array[currentIndex], 3)
      );
    gsap.to(childRef.current.getMesh().material.uniforms.uSpeed, {
      value: 1,
      duration: 1.3,
      onComplete: () => {
        childRef.current
          .getMesh()
          .geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(planePosition32Array[currentIndex], 3)
          );
        childRef.current.getMesh().material.uniforms.uSpeed.value = 0;
        isAnimation = false;
      },
      ease: "power1.in",
    });
    reducer({ type: "REORDER_MENU" });
  };

  useEffect(() => {
    const handleWheelEvent = (event) => {
      const delta = event.deltaY || event.detail || event.wheelDelta;
      const direction = delta > 0 ? 1 : -1;

      updatePosition();
    };

    stackRef.current.addEventListener("wheel", handleWheelEvent);

    return () => {
      stackRef.current.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      updatePosition();
    },

    onSwipedDown: () => {
      updatePosition();
    },
    delta: 10, // スワイプが開始する前の最小距離 (px)
    preventScrollOnSwipe: true, // スワイプ中のスクロールを防ぐ
    trackMouse: true, // マウス入力をトラックする
  });

  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [0, 2, 10],
        }}
      >
        <color args={["#030303"]} attach="background" />
        <Experience ref={childRef} />
      </Canvas>

      <HtmlContent />
      <Stack
        {...handlers}
        ref={stackRef}
        position="absolute"
        top={0}
        w={"100%"}
        minH={"100vh"}
        zIndex={100}
        direction={{ base: "column", md: "row" }}
      ></Stack>

      <Button position={"absolute"} bottom={10} zIndex={100} onClick={onOpen}>
        Open Modal
      </Button>

      <Modal size={"full"} isOpen={isOpen} onClose={onClose} opacity={0.85}>
        <ModalContent bg="#191919">
          <ModalHeader color="#fff">PROFILE</ModalHeader>
          <ModalCloseButton />

          <Center>
            <ModalBody maxW={{ base: "100vw", md: "80vw" }} color={"#fff"}>
              <Routes>
                <Route path="/profile" element={<Test1 />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/skill" element={<Skill />} /> */}
              </Routes>
            </ModalBody>
          </Center>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>

            <Link to="/test">
              <Button variant="ghost">Secondary Action</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Header />

      {/* <Box px={2} color="white" position="fixed" top={0}>
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
      </Box> */}
    </>
  );
};

export default App;
