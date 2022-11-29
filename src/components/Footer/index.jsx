import {
  Box,
  chakra,
  Container,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { FaPhone } from 'react-icons/fa';
import Logo from '../Logo';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      rounded="md"
    >
      <Box
        as={Stack}
        maxW={'6xl'}
        p={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={10}
        justify={{ base: 'center' }}
        align={{ base: 'center', md: 'center' }}
      >
        {/* <HStack>
          <Logo />
          <Text>Thiền Tôn Phật Quang</Text>
        </HStack> */}
        <ListHeader>Liên hệ thư ký</ListHeader>
        <Link href="tel:0332466144">
          <HStack>
            <SocialButton label={'Thể Bình Ngộ'}>
              <FaPhone />
            </SocialButton>
            <Text>Thể Bình Ngộ (0332466144)</Text>
          </HStack>
        </Link>
        <Link href="tel:0332466144">
          <HStack>
            <SocialButton label={'Tâm Nghĩa Tín'}>
              <FaPhone />
            </SocialButton>
            <Text>Tâm Nghĩa Tín (0967529095)</Text>
          </HStack>
        </Link>
      </Box>
    </Box>
  );
}
