import { Avatar, Badge, Stack } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <div>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              alt="+"
              src=""
              sx={{
                width: 20,
                height: 20,
                bgcolor: "green",
                position: "relative",
                right: 4,
                bottom: 4,
              }}
            >
              +
            </Avatar>
          }
        >
          <Avatar alt="so" src="" sx={{ width: 40, height: 40 }} />
        </Badge>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          height={"100%"}
        ></Stack>
      </Stack>
    </div>
  );
};

export default PostOne;
