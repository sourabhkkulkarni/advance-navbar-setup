import React from "react";
import AppRouting from "../app-routing/AppRouting";
import { APP_NAV_ROUTE } from "../../../utils/Constant";

const navBarRoutes = [
  {
    path: "/",
    text: "Info portal",
    exact: true,
    main: <AppRouting routename={APP_NAV_ROUTE.ROOT} />,
  },
  {
    path: "/ops",
    text: "Ops portal",
    exact: true,
    main: <AppRouting routename={APP_NAV_ROUTE.OPS} />,
  },
  {
    path: "/not-found",
    pathAlias: "/not-found",
    exact: true,
    main: (
      <div className="NotFoundContainer">
        <h2>Page not found</h2>
      </div>
    ),
  },
  {
    path: "*",
    text: "Info portal",
    exact: true,
    main: <AppRouting routename={APP_NAV_ROUTE.ROOT} />,
  },
];

export default navBarRoutes;
