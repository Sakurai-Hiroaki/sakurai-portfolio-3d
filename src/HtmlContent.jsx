import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/gsap-core';
import Title from './Title';
import DetailModal from './modal/ModalLayout';
import SiteName from './SiteName';

const HtmlContent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SiteName />
      <Title onOpenModal={handleOpenModal} />
      <DetailModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default HtmlContent;
