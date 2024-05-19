import { Text, Button } from "@chakra-ui/react";
import { Box, Flex, SimpleGrid, chakra, Icon, Image } from "@chakra-ui/react";

const Feature = (props) => {


const skills = [
  {
    "name": "JavaScript",
    "icon": "/icons/javascript.svg",
    "workExperience": "4年",
    "description": "社内業務アンケート機能の作成、ノーコードのフォーム作成ツール、会員登録フォーム作成など一通りの実装経験があります"
  },
  {
    "name": "React",
    "icon": "/icons/",
    "workExperience": "0.5年",
    "description": "新規作成のアプリケーションやサイトの実装経験があります。経験年数は短いですが、JavaScriptの学習と並行しているため"
  },
  {
    "name": "ThreeJs",
    "icon": "/icons/",
    "workExperience": "0年",
    "description": "3D表現を可能とするJavaScriptライブラリです。webサイトやアプリの3d表現に興味があるため自己学習しています。"
  },
  {
    "name": "GLSL",
    "icon": "/icons/",
    "workExperience": "0年",
    "description": "OpenGL(WebGL)で使用できるC言語の構文をベースとしたシェーディング言語です。本ポートフォリオの粒子の移動表現や見た目はこの言語で設定しています。"
  },
  {
    "name": "html",
    "icon": "",
    "workExperience": "5年",
    "description": "問題なく実装可能です。"
  },
  {
    "name": "css",
    "icon": "",
    "workExperience": "5年",
    "description": "問題なく実装可能です。SCSSやCSSフレームワークの実装も可能です"
  },
]




























  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        mb={4}
        rounded="full"
        color={`${props.color}.600`}
        _dark={{
          color: `${props.color}.100`,
        }}
        bg={`${props.color}.100`}
      >
      <Image 
        src="/icons/javascript.svg" 
        alt="Description of image" 
        boxSize="50px" 
        objectFit="cover" 
      />
      </Flex>
      <chakra.h3
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
        _light={{
          color: "gray.900",
        }}
      >
        {props.title}
      </chakra.h3>
      <chakra.p
        fontSize="sm"
        color="gray.500"
        _dark={{
          color: "gray.400",
        }}
      >
        経験年数: 4年
      </chakra.p>
      <chakra.p
        fontSize="sm"
        color="gray.500"
        _dark={{
          color: "gray.400",
        }}
      >
        {props.children}
      </chakra.p>
    </Box>
  );
};

const Skill = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px={8}
        py={20}
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="xl"
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
          >
            SKILL
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            現状のスキル一覧
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          <Feature
            title="Personal Emails"
            icon="/icons/javascript.png"
          >
            Hand crafted dashboards for everything from Recurring Revenue to
            Customer Churn.
          </Feature>

          <Feature title="Why a beaker icon?">
            Your central hub that helps you see, and react to, absolutely
            everything that’s happening.
          </Feature>

          <Feature  title="Clickable">
            Stay informed with daily, weekly, or monthly reports on all your
            insights data.
          </Feature>

          <Feature  title="Finger Printing">
            Our forecasting is your magical crystal ball that helps you predict
            and plan for the future.
          </Feature>
          <Feature title="Performance on Fire">
            How does your company compare? Learn how your company stacks up in
            the industry.
          </Feature>
          <Feature  title="Love is in the Air">
            Organize your customers to bring meaningful and comparative insights
            across your dashboards.
          </Feature>
          <Feature title="Thunder and Lightning">
            Improve your conversion rates by monitoring exactly what’s going on
            while your customers are in trial.
          </Feature>

          <Feature  title="Puzzles">
            Personalized segmentation, rich customer profiles, manual
            subscriptions, and more!
          </Feature>

          <Feature  title="Sparkles">
            Merge external data with your metrics for deeper insights in to your
            customers and your business.
          </Feature>

          <Feature  title="Stars">
            Want your metrics in other services? Extend and integrate to our
            every part of your business.
          </Feature>

          <Feature  title="Support">
            Send important updates from here to your team’s Support channels.
          </Feature>

          <Feature title="Finger Printing for Robots">
            Goals, Breakouts, Instant notifications, Comparisons, Annotations
            and Cohort Analysis!
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Skill;
