import { Heading, Text, VStack } from '@chakra-ui/react';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useMenu } from './context/MenuContext';
import { useLocation } from 'react-router-dom';

const Title = ({ onOpenModal }) => {
  const location = useLocation().pathname.slice(1);
  const titleRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const scrollTextRef = useRef();

  useEffect(() => {
    gsap.to(descriptionRef.current, {
      opacity: 0.4,
      duration: 1.0,
      yoyo: true,
      repeat: -1,
    });

    // gsap.to(scrollTextRef.current, {
    //   y: 10,
    //   opacity: 0.6,
    //   ease: 'linear',
    //   duration: 1,
    //   yoyo: true,
    //   repeat: -1,
    // });
  }, []);

  useEffect(() => {
    if (location !== "") {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.7,
        delay: 0.5,
      });
    }
  }, [location]);

  return (
    <VStack
      align="center"
      zIndex={103}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50% ,-50%)"
      justify="center"
    >
      <Heading
        onClick={onOpenModal}
        cursor="pointer"
        fontFamily="Silkscreen"
        ref={titleRef}
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        letterSpacing={20}
        paddingLeft={'20px'}
      >
        <Text ref={nameRef}>{location}</Text>
      </Heading>

      <Text
        ref={descriptionRef}
        paddingLeft={'10px'}
        letterSpacing={10}
        cursor="pointer"
        onClick={onOpenModal}
      >
        click
      </Text>

      {/* <TriangleDownIcon
        position={'absolute'}
        w={6}
        h={6}
        bottom={-20}
        ref={scrollTextRef}
      /> */}
    </VStack>
  );
};

export default Title;
