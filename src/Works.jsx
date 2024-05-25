import {
  Box,
  Text,
  Button,
  useToast,
  Flex,
  chakra,
  Center,
  SimpleGrid,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';

const Works = () => {
  const workItems = [
    {
      id: 1,
      title: 'Project A',
      description: 'Description of Project A',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'Description of Project B',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // 追加の仕事項目をここに追加
  ];

  return (
    <>
      <chakra.p
        mt={8}
        fontSize={{
          base: '1xl',
          sm: '2xl',
        }}
        lineHeight="8"
        fontWeight="bold"
        fontFamily="Silkscreen"
        letterSpacing={12}
        textAlign="center"
        marginBottom={8}
      >
        WORKS
      </chakra.p>

      {/* <Flex w="full" alignItems="center" justifyContent="center"> */}
      <Box mx="auto" rounded="lg" shadow="md" bg="white" mb={16}>
        <Image
          mb={4}
          roundedTop="lg"
          w="full"
          h="full"
          fit="cover"
          src="/img/portfolio-screenshot.png"
          alt="Article"
        />

        <Box>
          <chakra.p
            fontSize="md"
            textTransform="uppercase"
            color="teal.500"
            mb={4}
          >
            ポートフォリオサイト
          </chakra.p>
          <hr />
          <chakra.p
            mt={2}
            mb={2}
            fontSize="sm"
            color="gray.600"
            fontWeight={'bold'}
          >
            技術スタック
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            React / React-Three-Fiber / Three.js / JavaScript / chakra-ui
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            期間
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            2ヶ月
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            工程
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600">
            設計、コーディング、デザイン
          </chakra.p>
          <hr />
          <chakra.p mt={2} p={2} fontSize="sm" color="gray.600">
            当サイトになります。このサイトを見ていただいた方に少しでも印象を持っていただければと思い、
            <br />
            React-Three-Fiverを用いて3Dのサイトを作成しました。
            <br />
          </chakra.p>
        </Box>
      </Box>

      <Box mx="auto" rounded="lg" shadow="md" bg="white" mb={16}>
        <Image
          mb={4}
          roundedTop="lg"
          w="full"
          maxH="300px"
          fit="cover" // 画像を伸ばして表示
          src="/img/work-photo1.jpeg"
          alt="Article"
        />

        <Box>
          <chakra.p
            fontSize="md"
            textTransform="uppercase"
            color="teal.500"
            mb={4}
          >
            ポートフォリオサイト
          </chakra.p>
          <hr />
          <chakra.p
            mt={2}
            mb={2}
            fontSize="sm"
            color="gray.600"
            fontWeight={'bold'}
          >
            技術スタック
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            React / React-Three-Fiber / Three.js / JavaScript / chakra-ui
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            期間
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            2ヶ月
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            工程
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600">
            設計、コーディング、デザイン
          </chakra.p>
          <hr />
          <chakra.p mt={2} p={2} fontSize="sm" color="gray.600">
            当サイトになります。このサイトを見ていただいた方に少しでも印象を持っていただければと思い、
            <br />
            React-Three-Fiverを用いて3Dのサイトを作成しました。
            <br />
          </chakra.p>
        </Box>
      </Box>

      <Box mx="auto" rounded="lg" shadow="md" bg="white" mb={16}>
        <Image
          mb={4}
          roundedTop="lg"
          w="full"
          maxH="300px"
          fit="cover" // 画像を伸ばして表示
          src="/img/work-photo1.jpeg"
          alt="Article"
        />

        <Box>
          <chakra.p
            fontSize="md"
            textTransform="uppercase"
            color="teal.500"
            mb={4}
          >
            ポートフォリオサイト
          </chakra.p>
          <hr />
          <chakra.p
            mt={2}
            mb={2}
            fontSize="sm"
            color="gray.600"
            fontWeight={'bold'}
          >
            技術スタック
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            React / React-Three-Fiber / Three.js / JavaScript / chakra-ui
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            期間
          </chakra.p>
          <chakra.p mb={2} fontSize="sm" color="gray.600">
            2ヶ月
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600" fontWeight={'bold'}>
            工程
          </chakra.p>

          <chakra.p mb={2} fontSize="sm" color="gray.600">
            設計、コーディング、デザイン
          </chakra.p>
          <hr />
          <chakra.p mt={2} p={2} fontSize="sm" color="gray.600">
            当サイトになります。このサイトを見ていただいた方に少しでも印象を持っていただければと思い、
            <br />
            React-Three-Fiverを用いて3Dのサイトを作成しました。
            <br />
          </chakra.p>
        </Box>
      </Box>

      {/* </Flex> */}
    </>
  );
};

export default Works;
