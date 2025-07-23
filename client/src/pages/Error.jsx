import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <div>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        sx={{
          background: 'url("/error-bg.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Stack
          p={5}
          border={"2px solid black"}
          marginLeft={"20px"}
          borderRadius={"10px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          boxShadow={"7px 7px 7px white"}
        >
          <Typography variant="h3">OOP's</Typography>
          <Typography variant="h6">You are on Wrong Page!</Typography>
          <Button
            size="large"
            sx={{ bgcolor: "blue", color: "white", borderRadius: "10px", p: 2 }}
          >
            Go Back
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Error;
