import { Box, Flex, chakra } from '@chakra-ui/react';

const SectionHeader = ({ text }) => {

  const cleanedText = text.replace(/\s+/g, ' ');
  return (
      <chakra.p
        mt={8}
        fontSize={{ base: '3xl' }}
        lineHeight="8"
        fontWeight="bold"
        fontFamily="Silkscreen"
        textAlign="center"
        mb={8}
      >
         {cleanedText} 
      </chakra.p>

  );
};

export default SectionHeader;
