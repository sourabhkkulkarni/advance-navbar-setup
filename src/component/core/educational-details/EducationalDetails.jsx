import React, { useEffect, useState } from "react";
import { eduConfig } from "../../../config/eduConfig";
import "./EducationaDetails.scss";
import { Divider, Grid } from "@mui/material";
import { StepperContainer } from "../../shared/stepper-container/StepperContainer";

export default function EducationalDetails() {
  const [component, setComponent] = useState();

  useEffect(() => {
    setComponent(eduConfig.educationSteppers[0].component);
  }, []);

  const handleChange = (component) => {
    setComponent(component);
  };

  return (
    <>
      <Grid container>
        <Grid item md={12} sx={{ textAlign: "center" }} className="app-stepper">
          <StepperContainer
            steppers={eduConfig.educationSteppers}
            handleChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "0 1rem" }}>
        <Grid item xs={12} md={12}>
          <Divider className="devider" />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          {component === "secondary" && <p>secondary</p>}
          {component === "higherSecondary" && <p>higherSecondary</p>}
          {component === "graduation" && <p>graduation</p>}
        </Grid>
      </Grid>
    </>
  );
}
