import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
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
          p={2}
          border={"2px solid black"}
          marginLeft={"20px"}
          borderRadius={"10px"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            size="large"
            sx={{ bgcolor: "blue", color: "white" }}
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default Error;
