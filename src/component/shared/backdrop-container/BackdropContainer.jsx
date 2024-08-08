import React, { useContext } from "react";
import { UIContext } from "../../../redux/context/UIContext";
import { Backdrop, CircularProgress } from "@mui/material";

export default function BackdropContainer() {
  const { UIData, dispatchUI } = useContext(UIContext);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={UIData.isLoading}
      >
        <CircularProgress data-testid="loader" color="inherit" />
      </Backdrop>
    </div>
  );
}
