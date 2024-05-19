import {
    chakra,
    Flex,
    Box,
    Link,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
  } from "@chakra-ui/react";





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
  } from "@chakra-ui/react";

  const Feature = (props) => {
    return (
      <Box>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{
            color: "gray.900",
          }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };






const Test1 = () => {
 
    
    return (<>
    
    
    
                  {/* レスポンシブに対応したコンテンツをここに追加 */}
                  <Text>タイトル構成</Text>

<Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={10}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "5xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    <Box
      w={{
        lg: "40%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        rounded={{
          lg: "lg",
        }}
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "5xl",
      }}
      w={{
        lg: "60%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        PROFILE
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        初めまして。フロントエンドエンジニア歴4年の櫻井大晃と申します。
        このポートフォリオでは、今まで使用してきた技術や経歴、仕事をする中で大切にしていることをまとめたサイトになります。
      </chakra.p>
    </Box>
  </Box>
</Flex>

<Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={20}
  w="auto"
  justifyContent="center"
  alignItems="center"
>
  <SimpleGrid
    columns={{
      base: 1,
      md: 2,
      lg: 3,
    }}
    spacing={20}
    px={{
      base: 4,
      lg: 16,
      xl: 24,
    }}
    py={20}
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="xl"
  >
    <Feature title="継続力"></Feature>

    <Feature title="英語力">
      現状は英語のドキュメントや動画を問題なく理解できます。
      <br />
      現在は今年中にTOEICスコア900を目指しています。(現在は815)
      <br />
      ゆくゆくは英語対応のアプリケーションを開発できるようになりたいと考えております。
    </Feature>

    <Feature title="安定">
      仕事をする上で技術力を上げていくのはもちろん大切なことですが、周り
    </Feature>
  </SimpleGrid>
</Flex>

<Box
  py={12}
  maxW={{
    base: "xl",
    lg: "5xl",
  }}
  w={{
    lg: "50%",
  }}
>
  <chakra.p
    mt={4}
    color="gray.600"
    _dark={{
      color: "gray.400",
    }}
  >
    生年月日: 1993年9月24日
  </chakra.p>
  <chakra.p
    mt={4}
    color="gray.600"
    _dark={{
      color: "gray.400",
    }}
  >
    所在地: 東京都
  </chakra.p>
  <chakra.p
    mt={4}
    color="gray.600"
    _dark={{
      color: "gray.400",
    }}
  >
    メールアドレス: kaityuu_21@yahoo.co.jp
  </chakra.p>
</Box>
    
    
    
    
    
    
    
    
    
    
    
    
    </>)
}

export default Test1;