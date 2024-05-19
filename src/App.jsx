import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Test1 from "./Test1.jsx";
import Contact from "./Contact.jsx";
// import Skill from "./Skill.jsx";
import Header from "./Header";
import { useRef, useEffect } from "react";

import { extendTheme, Stack, Center } from "@chakra-ui/react";
import HtmlContent from "./HtmlContent.jsx";
import { useSwipeable } from "react-swipeable";
import gsap from "gsap";
import { useMenu, useMenuDispatch } from "./context/MenuContext";
import * as THREE from "three";
import planePosition32Array from "./attributes/plane.js";
import {
  Button,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  chakra,
  useBreakpointValue,
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

  const handlers = useSwipeable({
    onSwiped: (eventData) => alert("Swiped!", eventData),
    onSwipedLeft: () => alert("Swiped left!"),
    onSwipedRight: () => alert("Swiped right!"),
    onSwipedUp: () => alert("Swiped up!"),
    onSwipedDown: () => alert("Swiped down!"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     console.log("Swiped Up");
  //     alert("ue");
  //     // updatePosition();
  //   },
  //   onSwipedUp: () => {
  //     console.log("Swiped Up");
  //     alert("ue");
  //     // updatePosition();
  //   },

  //   onSwipedDown: () => {
  //     console.log("Swiped Down");
  //     alert("sita");
  //     // updatePosition();
  //   },
  //   preventScrollOnSwipe: true, // Prevent scrolling during swipe
  //   trackMouse: true, // Track mouse input
  // });

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
        ref={stackRef}
        position="absolute"
        top={0}
        w={"100%"}
        minH={"100vh"}
        zIndex={101}
      ></Stack>

      <Header />
    </>
  );
};

export default App;
