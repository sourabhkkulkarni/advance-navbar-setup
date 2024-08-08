import React from "react";
import { TABS_LIST } from "../../../utils/Constant";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import EducationalDetails from "../../core/educational-details/EducationalDetails";
import Address from "../../core/address/Address";

export default function TabsContainer() {
  const [value, setValue] = React.useState(TABS_LIST[0].value);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const RenderTabContents = (tabValue) => {
    switch (tabValue) {
      case "Address":
        return <Address />;
      case "Educational Details":
        return <EducationalDetails />;

      default:
        return <h1>{tabValue}</h1>;
    }
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <TabList onChange={handleTabChange} className="Mui-selected">
            {TABS_LIST.map((item, index) => {
              return (
                <Tab
                  key={index}
                  className="tabs-label"
                  component="div"
                  variant="scrollable"
                  label={
                    <>
                      <span>{item.label}</span>
                    </>
                  }
                  value={item.value}
                />
              );
            })}
          </TabList>
          <hr className="tabs-container" />
          <TabPanel value={value}>{RenderTabContents(value)}</TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
