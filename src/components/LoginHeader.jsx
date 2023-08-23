import React from "react";
import { Typography } from "@mui/material";

const LoginHeader = () => {
  return (
    <>
      <Typography variant="h5 " sx={{ color: "white" }}>
        Welcome to Black!
      </Typography>
      <Typography sx={{color:'#b9bbbe'}}>We are glad you also like Black!</Typography>
    </>
  );
};

export default LoginHeader;
