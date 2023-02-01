import React from "react";
import { Box, Typography, Button, TableCell } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});
export default function Profile() {
  return (
    <div>
      <Header />
      <Container />
      <Box
        style={{ justifyContent: "center" }}
        sx={{
          width: "100%",
          maxWidth: 1200,
          bgcolor: "#F6CA76",
          mx: "auto",
          mt: 10,
          padding: 5,
          borderRadius: 3,
          marginTop: 15,
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" padding={3} textAlign="center">
            ข้อมูลส่วนตัว
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
            backgroundColor={"#d8b778"}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover": {
                boxShadow: "5px 5px 10px #ccc",
              },
            }}
          >
            <TableCell align="right">
              <img
                style={{ height: 250, width: 200 }}
                src="https://cms.dmpcdn.com/dara/2021/11/10/22126e10-41d7-11ec-ac29-755e2c04978c_original.jpg"
              ></img>
            </TableCell>
            <Typography variant="h6" padding={1} textAlign="center">
              ชื่อผู้ใช้ : เอกนรินทร์{" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              ไลน์ไอดี : @PP123444{" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              อีเมล์ : Thanason0406@gmail.com{" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              เข้าร่วมฟาร์มวันที่ : 3 กุมภาพันธ์ 2564{" "}
            </Typography>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="warning"
              // color="#282c34"
            >
              แก้ไขข้อมูล
            </Button>
            <Button sx={{ marginTop: 3, borderRadius: 3 }} variant="contained">
              สมัครสมาชิก
            </Button>
          </Box>
        </ThemeProvider>
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
