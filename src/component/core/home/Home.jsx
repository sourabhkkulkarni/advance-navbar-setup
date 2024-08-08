import React from "react";
import TabsContainer from "../../shared/tabs-container/TabsContainer";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

function Home() {
  return (
    <Grid xs={12} item>
      <Card>
        <CardContent>
          <Grid container sx={{ flexDirection: "column" }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              flexWrap="nowrap"
              sx={{ marginBottom: "5px" }}
            >
              <Grid
                sx={{ justifyContent: "flex-start", flexWrap: "nowrap" }}
                item
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "24px" }}
                >
                  <b>Home</b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ flexDirection: "column" }}>
            <Grid item>
              <Divider
                sx={{
                  borderBottomWidth: 4,
                  marginTop: "5px",
                  backgroundColor: "#000000",
                  opacity: 1,
                }}
              />
            </Grid>
          </Grid>
          <Grid xs={12} md={12} sx={{ flexDirection: "column" }} item>
            <TabsContainer />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Home;
