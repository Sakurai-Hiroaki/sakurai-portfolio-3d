import {
  Box,
  Text,
  Button,
  useToast,
  Flex,
  chakra,
  Center,
} from '@chakra-ui/react';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const toast = useToast();
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kaityuu_21@yahoo.co.jp');
    toast({
      title: 'メールアドレスをコピーしました',
      status: 'info',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <SectionHeader text="CONTACT" />
      <chakra.p mt={4} mb={8} textAlign="center" fontSize="md">
        ご連絡はx(旧twitter)もしくはkaityuu_21@yahoo.co.jpまでお願いいたします。
      </chakra.p>

      <chakra.p
        mt={4}
        mb={2}
        textAlign="center"
        fontSize="md"
        fontWeight="bold"
      >
        メールアドレス
      </chakra.p>
      <chakra.p mt={4} mb={4} textAlign="center" fontSize="md">
        kaityuu_21@yahoo.co.jp
      </chakra.p>
      <Button
        mb={16}
        textAlign={'center'}
        mx={'auto'}
        display="block"
        onClick={handleCopyEmail}
      >
        メールアドレスをコピー
      </Button>

      <chakra.p
        mt={4}
        mb={4}
        textAlign="center"
        fontSize="md"
        fontWeight="bold"
      >
        xアカウント
      </chakra.p>
      <chakra.p mt={4} mb={8} textAlign="center" fontSize="md">
        <chakra.a href="https://x.com/saku_front" target="_blank">
          saku_front
        </chakra.a>
      </chakra.p>
    </>
  );
};

export default Contact;
