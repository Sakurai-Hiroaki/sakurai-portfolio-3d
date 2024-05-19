import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  chakra,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";
import Test1 from "./Test1";
import Contact from "./Contact";


const DetailModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button position={"absolute"} bottom={10} zIndex={102} onClick={onOpen}>
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
    </>
  );
};

export default DetailModal;
