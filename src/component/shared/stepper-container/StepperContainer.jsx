import React, { useState } from "react";
import Box from "@mui/material/Box";

export const StepperContainer = (props) => {
  const { steppers, handleChange } = props;
  const [stepperList, setStepperList] = useState(steppers);
  const navigate = (index) => {
    if (!stepperList[index].active) {
      let stepper = [...stepperList];
      stepper = stepper.map((item, key) => {
        return {
          ...item,
          complete: key < index ? true : false,
          active: key === index ? true : false,
        };
      });
      setStepperList(stepper);
      handleChange(stepper[index].component);
    }
  };

  return (
    <>
      <Box className="steppers">
        {stepperList &&
          stepperList.map((item, index) => {
            return (
              <Box
                className={index > 0 ? "ml-45 step-body" : "step-body"}
                key={index}
              >
                <span
                  className={
                    item.active
                      ? "round-box active"
                      : item.complete
                      ? "round-box complete"
                      : "round-box"
                  }
                  onClick={() => navigate(index)}
                >
                  {index + 1}
                </span>
                <Box
                  mt={2}
                  className={item.active ? "title title-active" : "title"}
                  onClick={() => navigate(index)}
                >
                  {item.name}
                </Box>
                {index <= stepperList.length - 2 && (
                  <Box className="dotted-line"></Box>
                )}
              </Box>
            );
          })}
      </Box>
    </>
  );
};
