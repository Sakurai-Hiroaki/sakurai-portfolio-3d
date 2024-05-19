import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import Otin from "./Title";

import { useMenu, useMenuDispatch } from "./context/MenuContext";

const HtmlContent = () => {
  const profileHeadingRef = useRef();

  const menus = useMenu();
  const reducer = useMenuDispatch();

  useEffect(() => {
    const profileHeading = profileHeadingRef.current;

    if (profileHeading) {
      profileHeading.addEventListener("click", () => {
        gsap.to(profileHeading, { duration: 1, x: 10, y: 100, opacity: 0.2 });
      });
    }
  }, []);

  return (
    <>
      <Stack
        position="absolute"
        top={0}
        w={"100%"}
        minH={"100vh"}
        zIndex={100}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          p={{ base: 8, md: 100 }}
          flex={1}
          align={{ base: "start", md: "center" }}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}>
              <Text as={"span"} position={"relative"}>
                SAKURAI
              </Text>
              <br />
              <Text as={"span"} position={"relative"}>
                HIROAKI'S
              </Text>
              <br />
              <Text as={"span"} position={"relative"}>
                SITE
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Front-End Dev
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Otin />

      <Stack
        position="absolute"
        top={0}
        w={"100%"}
        minH={"100vh"}
        zIndex={100}
        direction={{ base: "column", md: "row" }}
      ></Stack>
    </>
  );
};

export default HtmlContent;
