import React, { useReducer } from "react";
import "./App.scss";
import { UIContext } from "./redux/context/UIContext";
import { initialUIState, UIReducer } from "./redux/reducers/UIReducer";
import MainContainer from "./component/shared/main-container/MainContainer";

function App() {
  return (
    <>
      <MainContainer />
    </>
  );
}

export default App;
