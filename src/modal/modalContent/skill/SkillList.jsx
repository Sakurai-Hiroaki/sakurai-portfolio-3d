import { Box, Flex, chakra, Image } from '@chakra-ui/react';

const SkillList = ({ data }) => {
  return (
    <Box>
      <Flex
        mx="auto"
        alignItems="center"
        justifyContent="center"
        w={16}
        h={16}
        mb={4}
      >
        <Image
          src={data.icon}
          alt={`${data.title} icon`}
          objectFit="cover"
          w={16}
          h={16}
        />
      </Flex>
      <chakra.h3 mb={2} fontWeight="semibold" lineHeight="shorter">
        {data.title}
      </chakra.h3>
      <chakra.p fontSize="sm" color="gray.500" mb={2}>
        実務経験: {data.workExperience}
      </chakra.p>
      <chakra.p fontSize="sm">{data.description}</chakra.p>
    </Box>
  );
};

export default SkillList;
