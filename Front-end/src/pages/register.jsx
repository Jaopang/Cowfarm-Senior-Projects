import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  TableCell,
  TableRow,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { api } from "../baseURL/url";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});

export default function Register() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    lineId: "",
    password: "",
  });
  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onRegister = async () => {
    api
      .post("/api/user", data)
      .then((res) => navigate(`/createnewfarm/${res.data.id}`));
    console.log("Success:", data);
  };
  const handleImage = (event) => {
    let image = event.target.files;
    let read = new FileReader();
    read.onload = (e) => {
      setData({ ...data, image: String(e.target?.result) });
    };
    read.readAsDataURL(image[0]);
    setFile(URL.createObjectURL(image[0]));
  };
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
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4" padding={3} textAlign="center">
              สมัครสมาชิก
            </Typography>
            <div>
              <TableCell rowSpan={4} sx={{ textAlign: "center" }}>
                {file ? (
                  <div>
                    <TableRow>
                      <img
                        src={file}
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 5,
                          marginRight: "auto",
                        }}
                      />
                    </TableRow>
                    <TableRow>
                      <Button variant="outlined" component="label" size="small">
                        เปลี่ยนรูปภาพ
                        <input
                          hidden
                          accept="image/*"
                          multiple
                          type="file"
                          onChange={handleImage}
                        />
                      </Button>
                    </TableRow>
                  </div>
                ) : (
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ height: 150, width: 150 }}
                    component="label"
                  >
                    <AddPhotoAlternateIcon />
                    เพิ่มรูปภาพ
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      onChange={handleImage}
                    />
                  </Button>
                )}
              </TableCell>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ ml: 10, padding: 2 }}
            >
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  ชื่อและนามสกุล :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="name"
                  margin="normal"
                  type={"name"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อและนามสกุล"
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  อีเมล์ :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="email"
                  margin="normal"
                  type={"email"}
                  variant="outlined"
                  placeholder="กรุณาใส่อีเมล์"
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ marginTop: 15 }}>
                  ไอดีไลน์ :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="lineId"
                  margin="normal"
                  type={"lineId"}
                  variant="outlined"
                  placeholder="กรุณาใส่ไอดีไลน์"
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ marginTop: 15 }}>
                  รหัสผ่านใหม่ :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="password"
                  margin="normal"
                  type={"password"}
                  variant="outlined"
                  placeholder="กรุณาใส่รหัสผ่านใหม่"
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ marginTop: 15 }}>
                  รหัสผ่านอีกครั้ง :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  onChange={handleData}
                  name="confirmPassword"
                  margin="normal"
                  type={"confirmPassword"}
                  variant="outlined"
                  rules={[
                    { required: true, message: "กรุณายืนยันรหัสผ่าน!" },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "รหัสผ่านสองรหัสที่คุณป้อนไม่ตรงกัน!"
                        );
                      },
                    }),
                  ]}
                />
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="secondary"
              htmlType="submit"
              className="btn-save"
              onClick={onRegister}
            >
              สมัครสมาชิก
            </Button>

            <br />
          </ThemeProvider>
        </Box>
      </from>
      <br />
    </div>
  );
}
