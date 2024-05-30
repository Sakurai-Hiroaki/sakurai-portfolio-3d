import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Center,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Profile from './modalContent/profile/Profile';
import Skill from './modalContent/skill/Skill';
import Works from './modalContent/Works';
import Contact from './modalContent/Contact';

const DetailModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal size={'full'} isOpen={isOpen} onClose={onClose} opacity={0.85}>
        <ModalContent bg="#191919">
          <ModalHeader letterSpacing={2} fontFamily={'SilkScreen'} color="#fff">
            portfolio
          </ModalHeader>
          <ModalCloseButton color={'white'} />

          <Center>
            <ModalBody maxW={{ base: '100vw', md: '80vw' }} color={'#fff'}>
              <Box
                textAlign={'center'}
                minH={500}
                border={'1px solid #fff'}
                p={4}
              >
                <Center>
                  <Box maxW={'950px'} w={'950px'} fontFamily="Noto Sans JP">
                    <Routes>
                      <Route path="/" element={<Profile />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/skill" element={<Skill />} />
                      <Route path="/works" element={<Works />} />
                    </Routes>
                  </Box>
                </Center>
              </Box>

              <Box textAlign={'right'} pt={4} mb={4}>
                <Button
                  colorScheme="teal.500"
                  onClick={onClose}
                  bg={'teal.500'}
                >
                  閉じる
                </Button>
              </Box>
            </ModalBody>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailModal;
