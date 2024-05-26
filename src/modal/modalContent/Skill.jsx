import { Box, Flex, SimpleGrid, chakra, Image } from '@chakra-ui/react';

const Feature = ({ data }) => (
  <Box>
    <Flex
      mx="auto"
      alignItems="center"
      justifyContent="center"
      w={16}
      h={16}
      mb={4}
    >
      <Image src={data.icon} alt={`${data.title} icon`} objectFit="cover" />
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

const Skill = () => {
  const skillsData = [
    {
      title: 'JavaScript',
      workExperience: '3.5年',
      icon: '/icons/javascript.svg',
      description:
        '社内業務アンケート機能の作成、ノーコードのフォーム作成ツール、会員登録フォーム作成など一通りの実装経験があります',
    },
    {
      title: 'TypeScript',
      workExperience: '0.5年',
      icon: '/icons/typescript.svg',
      description: '基本的な変数や関数の型注釈が可能です。',
    },
    {
      title: 'React',
      workExperience: '0.5年',
      icon: '/icons/react.svg',
      description:
        '実務経験は6ヶ月ほどですが、自己学習を費やしてきたためスムーズに実装可能です。',
    },
    {
      title: 'HTML',
      workExperience: '4年',
      icon: '/icons/html.svg',
      description: '問題なく実装可能です。適切なheadタグの設定も可能です。',
    },
    {
      title: 'CSS',
      workExperience: '4年',
      icon: '/icons/css.svg',
      description:
        '問題なく実装可能です。SCSSやCSSフレームワークの実装も可能です。',
    },
    {
      title: 'Git',
      workExperience: '4年',
      icon: '/icons/git.svg',
      description: '問題なく使用可能です。',
    },
    {
      title: 'Three.js',
      workExperience: '0年',
      icon: '/icons/three.svg',
      description:
        '3D表現を可能とするJavaScriptライブラリです。このサイトでも利用しています。',
    },
    {
      title: 'jQuery',
      workExperience: '4年',
      icon: '/icons/iquery.svg',
      description: 'DOM操作の経験が豊富です。',
    },
    {
      title: 'next.js',
      workExperience: '0年',
      icon: '/icons/nextdotjs.svg',
      description: 'App Routerを利用したルーティングが可能',
    },
  ];

  return (
    <>
      <chakra.p
        mt={8}
        fontSize={{ base: '1xl', sm: '2xl' }}
        lineHeight="8"
        fontWeight="bold"
        fontFamily="Silkscreen"
        letterSpacing={12}
        textAlign="center"
        mb={8}
      >
        SKILL
      </chakra.p>
      <Box px={8} py={20} mx="auto" shadow="xl">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
        >
          {skillsData.map((skill) => (
            <Feature key={skill.title} data={skill} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skill;
