import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { api } from "../baseURL/url";

export default function Login() {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
  console.log("password", password);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = () => {
    api
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.id) {
          localStorage.setItem("Logged", res.data.id);
          navigator("/home");
        } else {
          navigator("/");
        }
      });
  };
  useEffect(() => {
    if (localStorage.getItem("Logged")) {
      navigator("/home");
    }
  }, []);

  return (
    <div>
      <from>
        <Typography variant="h3" padding={3} textAlign="center">
          ระบบจัดการฟาร์มวัวบ้านๆ
        </Typography>
        <Typography variant="h5" padding={1} textAlign="center">
          จดบันทึก และแจ้งเตือนก่อนถึงกำหนดสำคัญ
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          backgroundColor={"#F6CA76"}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            เข้าสู่ระบบ
          </Typography>
          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="อีเมล์"
            name="email"
            onChange={handleEmail}
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="รหัสผ่าน"
            name="password"
            onChange={handlePassword}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            onClick={onLogin}
          >
            เข้าสู่ระบบ
          </Button>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            href="/register"
          >
            สมัครสมาชิก
          </Button>
        </Box>
      </from>
      <br />
      <br />
      <br />
    </div>
  );
}
