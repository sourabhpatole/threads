import { Stack, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <div>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: "url",
        }}
      >
        <Stack>
          <Typography variant="h3">OOP's</Typography>
          <Typography variant="h6">You are on Wrong Page!</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Error;
