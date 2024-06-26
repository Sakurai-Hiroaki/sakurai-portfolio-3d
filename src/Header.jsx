import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useMenu } from './context/MenuContext';

const Header = ({ updatePosition }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const activeColor = useColorModeValue('teal.500', 'teal.200');
  const inactiveColor = useColorModeValue('gray.500', 'gray.200');
  const menus = useMenu();

  const getLinkColor = (path) =>
    location.pathname === path ? activeColor : inactiveColor;

  const handleLinkClick = (path) => {
    onClose();
    updatePosition(path);
  };

  return (
    <Box
      zIndex={1000}
      color={'#fff'}
      position="absolute"
      top={0}
      width={'100%'}
    >
      <Flex
        as="nav"
        color="white"
        padding={4}
        justifyContent={{ base: 'flex-end', md: 'center' }}
        alignItems="center"
      >
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          aria-label="Toggle Navigation"
        />
        <HStack
          spacing={20}
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          {menus.map((menu) => (
            <ChakraLink
              as={NavLink}
              to={`/${menu.name}`}
              color={getLinkColor(`/${menu.name}`)}
              onClick={() => handleLinkClick(menu.name)}
              key={menu.name.toUpperCase()}
            >
              {menu.name.toUpperCase()}
            </ChakraLink>
          ))}
        </HStack>
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody bg={'#030303'}>
              <VStack spacing={4} mt={10}>
                {menus.map((menu) => (
                  <ChakraLink
                    fontFamily="Silkscreen"
                    as={NavLink}
                    to={`/${menu.name}`}
                    onClick={() => handleLinkClick(menu.name)}
                    color={getLinkColor(`/${menu.name}`)}
                    key={menu.name.toUpperCase()}
                  >
                    {menu.name.toUpperCase()}
                  </ChakraLink>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Header;