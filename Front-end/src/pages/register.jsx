import React from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
// import { api } from "../baseURL/url";
// import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});

export default function Register() {
  // const navigate = useNavigate();

  // const onFinish = async (values) => {
  //   values.userImage = await toDataURL(values.file);
  //   api
  //     .post("/api/user", values)
  //     .then((res) => navigate(`/createnewfarm/${res.data.id}`));
  //   console.log("Success:", values);
  // };
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
              <Button
                variant="contained"
                component="label"
                sx={{ height: 45 }}
                color="secondary"
                borderRadius={5}
              >
                อัพรูปภาพ
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={""}
                />
                <AddPhotoAlternateIcon />
              </Button>
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
                  name="email"
                  margin="normal"
                  type={"email"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อและนามสกุล"
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
                  name="confirmPassword"
                  margin="normal"
                  type={"confirmPassword"}
                  variant="outlined"
                  placeholder="กรุณาใส่รหัสผ่าน อีกครั้ง"
                />
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="secondary"
              htmlType="submit"
              className="btn-save"
              // onClick={onFinish}
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
