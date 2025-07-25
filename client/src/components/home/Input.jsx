import React from "react";
import {
  Avatar,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

const Input = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          width={"70%"}
          height={28}
          justifyContent={"space-between"}
          p={3}
          borderBottom={"2px solid grey"}
          my={5}
          mx={"auto"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Avatar src="" alt="SO" />
            <Typography color={"GrayText"}>Start a thread....</Typography>
          </Stack>
          <Button
            size="medium"
            sx={{
              bgcolor: "grey",
              color: "aliceblue",
              ":hover": {
                bgcolor: "black",
                cursor: "pointer",
              },
            }}
          >
            POST
          </Button>
        </Stack>
      ) : null}
    </>
  );
};

export default Input;
