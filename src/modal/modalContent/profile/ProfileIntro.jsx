import { chakra, Flex, Box, Text } from '@chakra-ui/react';

const ProfileIntro = () => (
  <Flex
    direction={{ base: 'column', md: 'row' }}
    mb={16}
    justify="center"
    align="center"
    wrap="wrap"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    minWidth="200px"
  >
    <Box flex="1" m={2} p={4}>
      <Text
        lineHeight={{ base: 8, md: 10 }}
        letterSpacing={1}
        textAlign="justify"
      >
        初めまして! 櫻井大晃(さくらい ひろあき)と申します。
        <br />
        2020年から現在まで、ノーコードツールや業務改善アプリケーション等に携わり、
        直近では物件売買会員登録のリニューアル実装を担当していました。
        <br />
        このポートフォリオでは、今まで使用してきた技術や経歴等を記載しておりますのでどうぞご覧ください。
      </Text>
    </Box>
    <Box flex="1" m={2} p={4} minWidth="200px">
      <chakra.img
        src="/img/profile-img.jpeg"
        alt="Responsive Image"
        mx="auto"
        h="auto"
        borderRadius={8}
      />
    </Box>
  </Flex>
);

export default ProfileIntro;
