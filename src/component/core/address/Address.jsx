import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer } from "../../shared/form-container/FormContainer";
import { FormInputContainer } from "../../shared/form-input-container/FormInputContainer";
import { ButtonContainer } from "../../shared/button-container/ButtonContainer";
import { AddressSchema } from "../../../schema/AddressSchema";
import { TextInputLabelContainer } from "../../shared/text-input-label-container/TextInputLabelContainer";
import { Divider, Grid, Typography } from "@mui/material";
import { addressConfig } from "../../../config/addressConfig";
import { FormSelectContainer } from "../../shared/form-select-container/FormSelectContainer";
export default function Address() {
  const methods = useForm({
    resolver: yupResolver(AddressSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const resetForm = () => {
    reset({
      apartmentName: "",
      cityName: "",
      state: "",
    });
  };

  const handleResetClick = () => {
    resetForm();
  };
  return (
    <>
      <FormProvider {...methods}>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Grid container sx={{ flexDirection: "column", height: "100%" }}>
            <Grid
              container
              sx={{ flexDirection: "column", padding: "0" }}
              mb={2}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                <Grid
                  sx={{ justifyContent: "flex-start", flexWrap: "nowrap" }}
                  item
                >
                  <Typography
                    variant="h5"
                    component="div"
                    className="page-title"
                  >
                    <b>Address Details</b>
                  </Typography>
                </Grid>
                <Grid
                  sx={{
                    justifyContent: "flex-end",
                    flexWrap: "nowrap",
                    padding: "0 ",
                  }}
                  item
                >
                  <Grid container justifyContent="flex-end" spacing={1}>
                    <Grid item>
                      <span className={"required"}>*</span>
                      <span class="required-text">Mandatory</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container columnSpacing={5} rowSpacing={2}>
              <Grid item xs={12} md={4}>
                <FormSelectContainer
                  name="state"
                  options={addressConfig?.stateOptions}
                  errorText={errors.state?.message}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextInputLabelContainer className={"ctrllabelCSS"}>
                  Test
                  <span className={"required"}>*</span>
                </TextInputLabelContainer>
                <FormInputContainer
                  name="apartmentName"
                  type="text"
                  helperText={errors.apartmentName?.message}
                  error={errors.apartmentName ? true : false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextInputLabelContainer className={"ctrllabelCSS"}>
                  Test
                  <span className={"required"}>*</span>
                </TextInputLabelContainer>
                <FormInputContainer
                  name="cityName"
                  type="textarea"
                  helperText={errors.cityName?.message}
                  error={errors.cityName ? true : false}
                />
              </Grid>
            </Grid>
            <Grid container mt={3} sx={{ textAlign: "right" }}>
              {/* <Grid container direction="row" justifyContent="space-between" flexWrap="nowrap" > */}
              {/* <Grid item md={5}>

                {showAlert.isAlert && (
                  <AlertContainer
                    icon={showAlert.successAlert ? Success : Notification}
                    message={showAlert.message}
                    showAlertData={setShowAlert}
                    alertColor={showAlert.alertColor}
                  />
                )}
              </Grid> */}
              <Grid
                sx={{
                  justifyContent: "flex-end",
                  flexWrap: "nowrap",
                  padding: "0",
                }}
                item
                md={12}
                className="button-container"
              >
                <ButtonContainer
                  className={"submit-button"}
                  type="submit"
                  // disabled={btnDisabled}
                >
                  {"Submit"}
                </ButtonContainer>
                <ButtonContainer
                  className={"reset-button"}
                  onClick={handleResetClick}
                >
                  Reset
                </ButtonContainer>

                <ButtonContainer
                  className={"reset-button"}
                  // onClick={resetForm}
                >
                  Cancel
                </ButtonContainer>
              </Grid>
            </Grid>
          </Grid>
        </FormContainer>
      </FormProvider>
    </>
  );
}
