import React from "react";
import { Button } from "@mui/material";

export const ButtonContainer = ({
  children,
  type,
  className,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <Button
      type={type}
      variant="contained"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
