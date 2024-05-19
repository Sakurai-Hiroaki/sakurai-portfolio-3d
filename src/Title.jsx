import { Heading, Text, VStack } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useMenu, useMenuDispatch } from "./context/MenuContext";

const Title = () => {
  const menus = useMenu();
  const reducer = useMenuDispatch();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const scrollTextRef = useRef();

  const animateHeading = () => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.7,
      delay: 0.5,
    });
  };

  const animateText = () => {
    gsap.to(descriptionRef.current, {
      opacity: 0.4,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
    });

    gsap.to(scrollTextRef.current, {
      y: 10,
      opacity: 0.6,
      ease: "linear",
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  };

  const test1 = (a) => {
    alert(a);
  };

  useEffect(() => {
    animateText();
  }, []);

  useEffect(() => {
    animateHeading();
  }, [menus]);

  return (
    <VStack
      align={"center"}

      zIndex={103}
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform="translate(-50% ,-50%)"
      justify={"center"}
    >
      <Heading
        onClick={() => test1(menus[0].name)}
        cursor={"pointer"}
        fontFamily={"Silkscreen"}
        ref={titleRef}
        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
        letterSpacing={20}
        paddingLeft={"20px"}
      >
        <Text>{menus[0].name.toUpperCase()}</Text>
      </Heading>

      <Text ref={descriptionRef} paddingLeft={"10px"} letterSpacing={10}>
        click
      </Text>

      <TriangleDownIcon
        position={"absolute"}
        w={6}
        h={6}
        bottom={-20}
        ref={scrollTextRef}
      />
    </VStack>
  );
};

export default Title;
