import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const style = {
  mt: 1,
  ml: 2,
  // paddingRight: '2rem'
  //width: { sm: 200, md: 300 },
};
export const FormInputContainer = (props) => {
  const { control } = useFormContext();
  // const { name,type,helperText,error, placeholder, maxlength,showAdornment,isDisabled } = props;
  const {
    name,
    type,
    helperText,
    error,
    placeholder,
    maxlength,
    showAdornment,
    disabled,
  } = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { value } = field;
          return (
            <TextField
              sx={{
                ...style,

                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "0 !important",
                  border: "0.1rem solid  #ddd !important",
                  borderTop: "none !important",
                  borderBottom: "0.1rem solid !important",
                },
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  borderTop: "0.1rem solid  #ddd !important",
                  borderRadius: "0",
                },
              }}
              {...field}
              value={value || ""}
              InputProps={{
                style: { height: type === "textarea" ? 64 : 44 },
                
              }}
              fullWidth={true}
              id={`__${name}__`}
              type={type}
              helperText={helperText}
              error={error}
              multiline={type === "textarea" ? true : false}
              rows={type === "textarea" ? 2 : 0}
              placeholder={placeholder}
              // disabled={isDisabled || false}
              disabled={disabled}
            />
          );
        }}
      />
    </div>
  );
};
