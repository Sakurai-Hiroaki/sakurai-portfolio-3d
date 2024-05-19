import { Box, Text, Button, useToast, Flex, chakra } from "@chakra-ui/react";
const Contact = () => {
  const toast = useToast();
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kaityuu_21@yahoo.co.jp");
    toast({
      title: "メールアドレスをコピーしました",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
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
              CONTACT
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
              ご連絡はx(旧twitter)もしくはkaityuu_21@yahoo.co.jpまでお願いいたします
            </chakra.p>
            <Button onClick={handleCopyEmail}>コピー</Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
