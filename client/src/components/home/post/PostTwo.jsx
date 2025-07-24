import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";

const PostTwo = () => {
  return (
    <>
      <Stack flexDirection={"column"} justifyContent={"space-between"}>
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
              Sourabh Patole
            </Typography>
            <Typography variant="h5" fontSize={"1.2rem"}>
              Hi Guyzz! Comment on this project and give your feedback.
            </Typography>
          </Stack>
          <img
            src="/error-bg.jpg"
            alt=""
            loading="lazy"
            width={"400px"}
            height={"auto"}
          />
        </Stack>
        <Stack flexDirection={"column"} gap={1}>
          <Stack flexDirection={"row"} gap={2} m={1}>
            <FaRegHeart size={22} />
            <FaRegComment size={22} />
            <FaRetweet size={22} />
            <IoMdSend size={22} />
          </Stack>
          <Stack
            flexDirection={"row"}
            gap={1}
            position={"relative"}
            top={-3}
            left={4}
          >
            <Typography
              variant="caption"
              color={"GrayText"}
              fontSize={"1.1rem"}
            >
              2 likes .
            </Typography>
            <Typography
              variant="caption"
              color={"GrayText"}
              fontSize={"1.1rem"}
            >
              1 comment
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PostTwo;
