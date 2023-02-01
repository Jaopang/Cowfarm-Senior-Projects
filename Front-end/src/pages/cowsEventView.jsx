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
    Error: {
      main: "#FF4444",
    },
    Info: {
      main: "#FFFFFF",
    },
  },
});

export default function CowsEventView() {
  return (
    <>
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
            ข้อมูลกิจกรรมวัว
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth={700}
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
              ชื่อวัว : ปีโป้
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              วันเกิด : วัน พุธ ที่ 3 กุมภาพันธ์ 2564 (1 ปี 9 เดือน 6 วัน)
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              เพศ : ผู้
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              น้ำเชื้อตัวผู้ : CY133{" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              กลับสัด 1 : วัน อาทิตย์ ที่ 27 พฤศจิกายน 2565 (อีก 16 วัน){" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              กลับสัด 2 : วัน อาทิตย์ ที่ 27 ธันวาคม 2565 (อีก 37 วัน){" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              กลับสัด 3 : วัน อาทิตย์ ที่ 8 มกราคม 2566 (อีก 58 วัน){" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              ตรวจสอบตั้งท้อง : วัน เสาร์ ที่ 4 กุมภาพันธ์ 2566 (อีก 85 วัน){" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              กำหนดคลอด : วัน ศุกร์ ที่ 18 สิงหาคม 2566 (อีก 280 วัน){" "}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              อื่นๆ : เคยเป็นโรคคอบวม{" "}
            </Typography>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="Info"
            >
              แก้ไขข้อมูล
            </Button>
            <Button
              color="Error"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
            >
              ลบวัว (ถาวร)
            </Button>
            <br />
          </Box>
        </ThemeProvider>
        <br />
        <br />
      </Box>
      <Footer />
    </>
  );
}
