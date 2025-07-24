import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };
  const handleLogin = () => {
    console.log("Login");
  };
  const handleRegister = () => {
    console.log("Register");
  };
  console.log(login);
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px",
        }}
      >
        <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with email" : "Register with email"}
          </Typography>
          {!login && (
            <TextField
              variant="outlined"
              placeholder="Enter your userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size="large"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "white",
              fontSize: "1rem",
              ":hover": {
                bgcolor: "blue",
                cursor: "pointer",
              },
            }}
            onClick={login ? handleLogin : handleRegister}
          >
            {!login ? "Sign Up" : "Login"}
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={"1.3rem"}
            alignSelf={"center"}
          >
            Already have an account ?{" "}
            <span className="login-link" onClick={toggleLogin}>
              {login ? "Sign Up" : "Login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
