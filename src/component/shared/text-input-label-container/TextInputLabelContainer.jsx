import React from "react";
import { Typography } from "@mui/material";

export const TextInputLabelContainer = ({ children, className, ...props }) => {
  return (
    <>
      <Typography className={className} {...props}>
        {children}
      </Typography>
    </>
  );
};
