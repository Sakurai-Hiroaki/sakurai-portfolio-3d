import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  Link,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();

  const activeColor = useColorModeValue("teal.500", "teal.200");

  const inactiveColor = useColorModeValue("gray.500", "gray.200");

  const getLinkColor = (path) =>
    location.pathname === path ? activeColor : inactiveColor;

  return (
    <Box
      zIndex={1000}
      color={"#fff"}
      position="absolute"
      top={0}
      width={"100%"}
    >
      <Flex
        as="nav"
        color="white"
        padding={4}
        justifyContent={{ base: "flex-end", md: "center" }}
        alignItems="center"
      >
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          aria-label="Toggle Navigation"
        />

        <HStack
          spacing={20}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link as={RouterLink} to="/profile" color={getLinkColor("/profile")}>
            PROFILE
          </Link>

          <Link as={RouterLink} to="/skill" color={getLinkColor("/skill")}>
            SKILL
          </Link>

          <Link as={RouterLink} to="/works" color={getLinkColor("/works")}>
            WORKS
          </Link>

          <Link as={RouterLink} to="/contact" color={getLinkColor("/contact")}>
            CONTACT
          </Link>
        </HStack>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <VStack spacing={4} mt={10}>
                <Link
                  as={RouterLink}
                  to="/profile"
                  onClick={onClose}
                  color={getLinkColor("/profile")}
                >
                  PROFILE
                </Link>

                <Link
                  as={RouterLink}
                  to="/skill"
                  onClick={onClose}
                  color={getLinkColor("/skill")}
                >
                  SKILL
                </Link>

                <Link
                  as={RouterLink}
                  to="/works"
                  onClick={onClose}
                  color={getLinkColor("/works")}
                >
                  WORKS
                </Link>

                <Link
                  as={RouterLink}
                  to="/contact"
                  onClick={onClose}
                  color={getLinkColor("/contact")}
                >
                  CONTACT
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;
