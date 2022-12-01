import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../Logo";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      pos="sticky"
      top={0}
      w="full"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Logo />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Text
              // color="blue.500"
              textTransform="uppercase"
              fontSize="xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r, blue.400, blue.500)"
              bgClip="text"
            >
              Chúng thanh niên Phật tử Phật Quang Miền Bắc
            </Text>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
