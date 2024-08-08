import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { MenuItem, FormControl, Select,FormHelperText } from "@mui/material";

export const FormSelectContainer = (props) => {
  const { control } = useFormContext();
  const { name, options ,errorText, disabled,handleValueChange} = props;
  const style = {
    mt: 1,
    ml: 2,
    height:44,
    borderTop: "0.1rem solid  #ddd !important",
    //paddingRight: '2rem'
   // width: { sm: 200, md: 225 },
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const { value,onChange } = field;
          return (
            <FormControl fullWidth error={false}>
              <Select
              sx={{
                  ...style,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "0 !important",
                    border: "0.1rem solid  #ddd !important",
                    borderTop: "none !important",
                    borderBottom: "0.1rem solid !important"
                  },
                  "& .MuiInputBase-root": {
                    backgroundColor: "white",
                    borderTop: "0.1rem solid  #ddd !important",
                    borderRadius: "0",                    
                  
                  }
              }}
                {...field}
                value={value || ""}
                id={`__${name}__`}
                displayEmpty
                disabled = { disabled }
                inputProps={{ "aria-label": "Without label" }}
                fullWidth={true}
                onClose={handleValueChange}
              >
                <MenuItem value="" className="dropdown-items">
                  <em>Select</em>
                </MenuItem>
                {options &&
                  options.map((item) => (
                   ( item.label && item.label.indexOf(null) != 0 && 
                    <MenuItem key={item.id} value={item.id} className="dropdown-items">
                      {item.label}
                    </MenuItem>
                   )
                  ))}
              </Select>
              <FormHelperText sx={{color:'#d32f2f'}}>
                {errorText}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    </div>
  );
};
