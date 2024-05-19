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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box zIndex={10000000} color={"#fff"} position="absolute" top={0} width={"100%"}>
      <Flex
        as="nav"
        bg="gray.800"
        color="white"
        padding={4}
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          variant="outline"
          aria-label="Toggle Navigation"
        />
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link as={RouterLink} to="/profile">
            PROFILE
          </Link>
          <Link as={RouterLink} to="/skill">
            SKILL
          </Link>
          <Link as={RouterLink} to="/works">
            WORKS
          </Link>
          <Link as={RouterLink} to="/contact">
            CONTACT
          </Link>
        </HStack>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={4} mt={10}>
                <Link as={RouterLink} to="/profile" onClick={onClose}>
                  PROFILE
                </Link>
                <Link as={RouterLink} to="/skill" onClick={onClose}>
                  SKILL
                </Link>
                <Link as={RouterLink} to="/works" onClick={onClose}>
                  WORKS
                </Link>
                <Link as={RouterLink} to="/contact" onClick={onClose}>
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
