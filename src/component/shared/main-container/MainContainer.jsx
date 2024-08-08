import React from "react";
import { styled } from "@mui/system";
import MainContent from "../main-content/MainContent";
import navBarRoutes from "../../core/navigation/NavbarRoutes";
import { Routes, Route } from "react-router-dom";
import Header from "../../core/header/Header";

const PREFIX = "MainContainer";

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    height: "100%",
  },
}));

const MainContainer = () => (
  <Root>
    <Header />
    <MainContent>
      <Routes>
        {navBarRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.main} />
        ))}
      </Routes>
    </MainContent>
  </Root>
);

export default MainContainer;
