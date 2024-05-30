import { chakra, Flex, Box, Text } from '@chakra-ui/react';
import SectionHeader from '../SectionHeader';
import ProfileIntro from './ProfileIntro';

const Profile = () => {
  const profileData = {
    name: '名前：櫻井大晃 (さくらい ひろあき)',
    birthDate: '生年月日：1993年9月24日',
    age: '年齢：30歳',
    location: '所在地：東京都',
    hobbies: '趣味：ギター・カメラ・筋トレ',
  };

  const strengths = [
    {
      title: '継続力',
      description: `物事を継続して行うことが得意です。
        ルーティーンとして学習する習慣が身についているため、未収得の技術の習得や継続的なスキルの向上が可能です。
        最新の技術からレガシーの技術までお任せください。`,
    },
    {
      title: '英語力',
      description: `英語のドキュメントや動画を問題なく理解できるため、幅広く技術のキャッチアップが可能です。
        現在は今年中にTOEICスコア900を目指しています。(現在は815)
        ゆくゆくは英語対応のアプリケーションを開発できるようになりたいと考えております。`,
    },
    {
      title: 'コミュニケーション',
      description: `PMOやディレクターとしての経験があり、エンジニアとしての技術的視点だけでなく、プロジェクト全体の管理や戦略的な視点も持ち合わせています。
        技術的な要件とビジネス要件をバランスよく理解し、プロジェクトの成功に向けた効果的なコミュニケーションが可能です。`,
    },
  ];

  return (
    <>
      <SectionHeader text="PROFILE" />
      <ProfileIntro />
      <Strengths strengths={strengths} />
      <ProfileDetails profileData={profileData} />
    </>
  );
};

const Strengths = ({ strengths }) => (
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
      {strengths.map((strength, index) => (
        <StrengthCard key={index} strength={strength} />
      ))}
    </Flex>
  </Box>
);

const StrengthCard = ({ strength }) => (
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
      {strength.title}
    </Text>
    <Text mt={2} textAlign="justify" lineHeight={8}>
  {strength.description}
</Text>
  </Box>
);

const ProfileDetails = ({ profileData }) => (
  <Box mb={16}>
    <Box mb={4}>
      <Text fontSize="2xl" fontWeight="bold">
        その他
      </Text>
    </Box>
    {Object.entries(profileData).map(([key, value], index) => (
      <Box key={index}>
        <hr />
        <Text mt={2} textAlign="justify" lineHeight={8} mb={2}>
          {value}
        </Text>
      </Box>
    ))}
    <hr />
  </Box>
);

export default Profile;
