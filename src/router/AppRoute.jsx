import React from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from "~/components/containers/layouts/MainLayout";
// import BlankLayout from "~/components/containers/layouts/BlankLayout";

export const AppRoute = ({
  component: Component,
  path,
  exact,
  layout: Layout = BlankLayout,
  needAuth = false,
  strict,
  sensitive,
  ...rest
}) => {
  const user = null;
  if (!needAuth || user) {
    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        sensitive={sensitive}
        {...rest}
        render={() => (
          <Layout>
            <Component />
          </Layout>
        )}
      />
    );
  }
  return <Redirect to="/login" />; // or Login popup
};
