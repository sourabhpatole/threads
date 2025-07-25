import { Dialog, useMediaQuery } from "@mui/material";
import React from "react";

const AddPost = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const handleClose = () => {};
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullWidth
        fullScreen={_700 ? false : true}
      ></Dialog>
    </>
  );
};

export default AddPost;
