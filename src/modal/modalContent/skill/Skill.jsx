import { Box, SimpleGrid } from '@chakra-ui/react';
import SkillList from './SkillList';
import SectionHeader from '../SectionHeader';
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
      workExperience: '無し',
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
      workExperience: '無し',
      icon: '/icons/nextdotjs.svg',
      description: 'App Routerを利用したルーティングが可能',
    },
  ];

  return (
    <>
      <SectionHeader text="SKILL" />
      <Box px={8} py={20} mx="auto" shadow="xl">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
        >
          {skillsData.map((skill) => (
            <SkillList key={skill.title} data={skill} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skill;
