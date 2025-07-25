import React from "react";
import { Button, Stack } from "@mui/material";
import Input from "../../components/home/Input";
import Post from "../../components/home/Post";
const Home = () => {
  return (
    <>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <Post />
      </Stack>
      <Button
        size="large"
        sx={{ my: 5, p: 3, textDecoration: "underline", cursor: "pointer" }}
      >
        Load more
      </Button>
    </>
  );
};

export default Home;
