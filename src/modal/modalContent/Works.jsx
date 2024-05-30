import { Box, chakra, Image, Flex } from '@chakra-ui/react';
import SectionHeader from './SectionHeader';

const WorkItem = ({ title, techStack, duration, process, comment }) => (
  <>
    <chakra.p fontSize="md" textTransform="uppercase" color="teal.500" mb={4}>
      {title}
    </chakra.p>
    <hr />
<Box fontSize="sm" color="gray.600">
<chakra.p mt={2} mb={2}  fontWeight="bold">
      技術スタック
    </chakra.p>
    <chakra.p mb={2} >
      {techStack}
    </chakra.p>

    <chakra.p mb={2}  fontWeight="bold">
      期間
    </chakra.p>
    <chakra.p mb={2} >
      {duration}
    </chakra.p>

    <chakra.p mb={2}  fontWeight="bold">
      工程
    </chakra.p>

    <chakra.p mb={2} >
      {process}
    </chakra.p>

    <chakra.p mb={2}  fontWeight="bold">
      コメント
    </chakra.p>

    <chakra.p
      px={2}
      whiteSpace="pre-line"
      textAlign={{ base: 'left', md: 'center' }}
    >
      {comment}
    </chakra.p>

</Box>

   
  </>
);

const Works = () => {
  const workItems = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      imageUrl: '/img/portfolio-screenshot.png',
      techStack:
        'React / React-Three-Fiber / Three.js / JavaScript / chakra-ui',
      duration: '2ヶ月',
      process: '設計、コーディング、デザイン',
      comment: `今見ていただいているサイトです。
      このサイトを見ていただいた方の印象に少しでも残っていただければと思い、
      React-Three-Fiverを用いて3Dのサイトを作成しました。`,
    },
    {
      id: 2,
      title: '不動産サイト・アプリのフロントエンド改修',
      imageUrl: '/img/work-photo2.jpg',
      techStack:
        'JavaScript / TypeScript / React / Backbone.js / PHP / Twig / SCSS',
      duration: '2年',
      process:
        '設計、新機能実装、テスト・検収、ABテスト実施、サイトリニューアル、不動産DB・バックエンド部分との連携',
      comment: `会員登録のフロントエンド部分の改修、新機能を実装しました。
      サイト、アプリの主要な部分の実装を単独で行うことになったためプレッシャーもありましたが、
      大きなヒヤリハットや事故も無く本番反映リリースすることができました。`,
    },
    // 追加の仕事項目をここに追加
  ];

  return (
    <>
      <SectionHeader text="WORKS" />

      {workItems.map((item) => (
        <Box
          key={item.id}
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          mb={16}
        >
          <Image
            mb={4}
            roundedTop="lg"
            w="full"
            h={item.id === 1 ? '280px' : '200px'}
            fit={{ base: 'none', md: 'cover' }}
            src={item.imageUrl}
            alt="Article"
          />

          <Box p={4}>
            <WorkItem
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              techStack={item.techStack}
              duration={item.duration}
              process={item.process}
              comment={item.comment}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Works;
