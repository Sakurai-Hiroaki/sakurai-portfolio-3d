import { chakra, Flex, Box } from '@chakra-ui/react';

import {
  ChakraProvider,
  extendTheme,
  Stack,
  SimpleGrid,
  GridItem,
  Center,
  VisuallyHidden,
  Input,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Profile = () => {
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
        PROFILE
      </chakra.p>
      <chakra.p
        mt={4}
        mb={8}
        maxW="2xl"
        textAlign="left"
        fontSize="md"
        mx={{
          lg: 'auto',
        }}
      ></chakra.p>
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
            textAlign={'justify'}
          >
            初めまして! 櫻井大晃(さくらい ひろあき)と申します。
            <br />
            2020年から現在まで、ノーコードツールや業務改善アプリケーション等に携わり、
            直近では物件売買会員登録のリニューアル実装を担当しています。
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
      <Box mb={16}>
        <Box mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            強み
          </Text>
        </Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          wrap="wrap"
        >
          <Box
            flex="1"
            m={2}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            minWidth="200px"
          >
            <Text fontSize="xl" fontWeight="bold">
              継続力
            </Text>
            <Text mt={2} textAlign={'justify'} lineHeight={8}>
              物事を継続して行うことが得意です。
              <br />
              ルーティーンとして学習する習慣がついているため、新しい技術や業務で必要な知識をルーティーンとして取り入れることができます。
            </Text>
          </Box>
          <Box
            flex="1"
            m={2}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            minWidth="200px"
          >
            <Text fontSize="xl" fontWeight="bold">
              英語力
            </Text>
            <Text mt={2} textAlign={'justify'} lineHeight={8}>
              英語のドキュメントや動画を問題なく理解できるため、幅広く技術のキャッチアップが可能です。
              <br />
              現在は今年中にTOEICスコア900を目指しています。(現在は815)
              <br />
              ゆくゆくは英語対応のアプリケーションを開発できるようになりたいと考えております。
            </Text>
          </Box>
          <Box
            flex="1"
            m={2}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            minWidth="200px"
          >
            <Text fontSize="xl" fontWeight="bold">
              コミュニケーション
            </Text>
            <Text mt={2} textAlign={'justify'} lineHeight={8}>
              PMOやディレクターとしての経験があり、エンジニアとしての技術的視点だけでなく、プロジェクト全体の管理や戦略的な視点も持ち合わせています。
              <br />
              技術的な要件とビジネス要件をバランスよく理解し、プロジェクトの成功に向けた効果的なコミュニケーションが可能です。
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          その他
        </Text>
      </Box>
      <Box mb={16}>
        <hr />
        <Text mt={2} textAlign={'justify'} lineHeight={8} mb={2}>
          名前：櫻井大晃 (さくらい ひろあき)
        </Text>
        <hr />
        <Text mt={2} textAlign={'justify'} lineHeight={8} mb={2}>
          生年月日：1993年9月24日
        </Text>
        <hr />
        <Text mt={2} textAlign={'justify'} lineHeight={8} mb={2}>
          年齢：30歳
        </Text>
        <hr />

        <Text mt={2} textAlign={'justify'} lineHeight={8} mb={2}>
          所在地：東京都
        </Text>
        <hr />

        <Text mt={2} textAlign={'justify'} lineHeight={8} mb={2}>
          趣味：ギター・カメラ・筋トレ
        </Text>
        <hr />
      </Box>
    </>
  );
};

export default Profile;
