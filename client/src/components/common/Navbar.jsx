import { Stack, useMediaQuery } from "@mui/material";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import { BiLeftArrowAlt } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Stack
      flexDirection={"row"}
      maxWidth={"100%"}
      justifyContent={"space-around"}
      alignItems={"center"}
    >
      <BiLeftArrowAlt />
      <Link to={"/"}>
        <GoHomeFill size={32} color="black" />
      </Link>
      <Link to={"/search"}>
        <IoIosSearch size={32} color="black" />
      </Link>
      <Link to={"edit"}>
        <TbEdit size={32} color="black" />
      </Link>
      <Link to={""}>
        <CiHeart size={32} color="black" />
      </Link>
      <Link to={"/profile/threads/1"}>
        <RxAvatar size={32} color="black" />
      </Link>
    </Stack>
  );
};

export default Navbar;
