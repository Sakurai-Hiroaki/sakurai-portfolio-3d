import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

const SiteName = () => {
  return (
    <Stack
      position="absolute"
      top={0}
      w={'100%'}
      minH={'100vh'}
      zIndex={100}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex
        p={{ base: 8, md: 100 }}
        flex={1}
        align={{ base: 'start', md: 'center' }}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
            fontFamily="Silkscreen"
          >
            <Text as={'span'} position={'relative'}>
              SAKURAI
            </Text>
            <br />
            <Text as={'span'} position={'relative'}>
              HIROAKI'S
            </Text>
            <br />
            <Text as={'span'} position={'relative'}>
              SITE
            </Text>
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'teal.500'}>
            Front-End Dev
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SiteName;
