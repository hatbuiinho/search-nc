import { Link, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { Switch } from "react-router-dom";
import { AppRoute, ROUTES } from "./router";

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

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
