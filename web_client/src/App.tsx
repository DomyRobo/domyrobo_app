import { Component, lazy } from "solid-js";
import { RouteDefinition, useRoutes } from "@solidjs/router";

const routes: RouteDefinition[] = [
  {
    path: "/",
    children: [
      {
        path: "/controller",
        component: lazy(() => import("./screen/ControllerScreen")),
      },
    ],
  },
];

const App: Component = () => {
  const Routes = useRoutes(routes);

  return <Routes />;
};

export default App;
