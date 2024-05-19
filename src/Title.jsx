import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap/gsap-core";
import { useMenu, useMenuDispatch } from "./context/MenuContext";

const Otin = () => {
  const menus = useMenu();
  const reducer = useMenuDispatch();

  const titleRef = useRef();

  const test = () => {
    reducer({ type: "REORDER_MENU" });
  };

  const animateHeading = () => {
    console.log(titleRef.current);
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.7,
      delay: 0.5,
    });
  };

  useEffect(() => {
    animateHeading();
  }, [menus]);

  return (
    <VStack
      onClick={test}
      position={"absolute"}
      top={0}
      left={"50%"}
      transform="translateX(-50%)"
      w={"50%"}
      h={"100%"}
      spacing={30}
      direction={{ base: "column", md: "row" }}
      justify={"center"}
    >
      <Heading
        fontFamily={"Silkscreen"}
        ref={titleRef}
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        letterSpacing={20}
      >
        <Text as={"p"}>{menus[0].name.toUpperCase()}</Text>
      </Heading>

      <Text letterSpacing={10}>click to detail</Text>
    </VStack>
  );
};

export default Otin;
