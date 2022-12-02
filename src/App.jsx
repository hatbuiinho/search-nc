import { Route, Switch } from "react-router-dom";
import { AppRoute, ROUTES } from "./router";

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import SearchRegister from "./pages/SearchRegister";
import MoralClass from "./pages/MoralClass";
import SearchDepartmentAssignment from "./pages/SearchDepartmentAssignment";

export default function App() {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <AppRoute {...route} />
      ))}
    </Switch>
  );
}
