import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/common/Header";

const ProtectedLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <div>
      <Stack
        flexDirection={"column"}
        maxWidth={_700 ? "800px" : "90%"}
        minWidth={"100%"}
        mx={"auto"}
        overflow={"hidden"}
      >
        <Header />
        <Outlet />
      </Stack>
    </div>
  );
};

export default ProtectedLayout;
