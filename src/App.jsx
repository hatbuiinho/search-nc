import { Link, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import SearchDepartmentAssignment from "./pages/SearchDepartmentAssignment";
import SearchRegister from "./pages/SearchRegister";
import { AppRoute, ROUTES } from "./router";

const Links = [];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Switch>
      {/* <Route component={SearchRegister} path="/" exact />
      <Route
        component={SearchDepartmentAssignment}
        path="/department-assignment"
        exact
      /> */}
      {ROUTES.map((route) => (
        <AppRoute {...route} />
      ))}
    </Switch>
  );
}
