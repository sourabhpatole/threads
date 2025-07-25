import { InputAdornment, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import { IoMdSearch } from "react-icons/io";
const Searchinput = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      <TextField
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "15px",
          px: 2,
          py: 1,
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
        placeholder="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: "black" }}>
              <IoMdSearch size={22} />
            </InputAdornment>
          ),
        }}
      ></TextField>
    </>
  );
};

export default Searchinput;
