import { Stack } from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      flexDirection={"row"}
      maxWidth={"100%"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <Link to={"/"}>
        <GoHomeFill size={32} />
      </Link>
      <Link to={"/search"}>
        <IoIosSearch size={32} />
      </Link>
      <Link to={"edit"}>
        <TbEdit size={32} />
      </Link>
      <Link to={""}>
        <CiHeart size={32} />
      </Link>
      <Link>
        <RxAvatar size={32} />
      </Link>
    </Stack>
  );
};

export default Navbar;
