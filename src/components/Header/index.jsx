import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ROUTES } from "~/router";
import Logo from "../Logo";
const NavLink = ({ children, to }) => (
  <ChakraLink
    as={Link}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={to}
  >
    {children}
  </ChakraLink>
);

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const pages = ROUTES.filter((r) => r.title);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w="full">
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
            {pages.map(({ key, title, path }) => (
              <NavLink key={key} to={path}>
                {title}
              </NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {pages.map(({ key, title, path }) => (
              <Link key={key} to={path}>
                {title}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
