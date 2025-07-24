import React from "react";
import Searchinput from "../../components/search/Searchinput";
import ProfileBar from "../../components/search/ProfileBar";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <>
      {/* input */}
      <Searchinput />
      {/* profilebar */}
      <Stack flexDirection={"column"} gap={1} mb={5} width={"60%"} mx={"auto"}>
        <ProfileBar />
      </Stack>
    </>
  );
};

export default Search;
