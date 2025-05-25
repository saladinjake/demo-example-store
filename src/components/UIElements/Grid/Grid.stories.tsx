import React from "react";
import Grid from "./";
import Box from "../Box";

export default {
  title: "Data Display/Grid",
  component: Grid,
};

export const DefaultGrid = () => {
  return (
    <>
      <Grid templateColumn="200px repeat(auto-fill, 100px) 300px">
        <Grid.Item columnStart={"2"} column={"2"} backgroundColor={"red"}>
          <Box>Hello</Box>
        </Grid.Item>
      </Grid>
    </>
  );
};
