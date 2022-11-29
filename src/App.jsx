import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from './components/Logo';
import SearchInput from './components/SearchInput';
import { Route, Switch } from 'react-router-dom';
import SearchRegister from './pages/SearchRegister';
import SearchDepartmentAssignment from './pages/SearchDepartmentAssignment';

const Links = [];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Switch>
      <Route component={SearchRegister} path="/" exact />
      <Route
        component={SearchDepartmentAssignment}
        path="/department-assignment"
        exact
      />
    </Switch>
  );
}
