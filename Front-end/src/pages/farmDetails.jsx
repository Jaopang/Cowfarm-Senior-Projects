import React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#3f6560",
    },
  },
});
export default function FarmDetails() {
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
            รายละเอียดฟาร์ม
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
            <Typography variant="h6" padding={1} textAlign="center">
              ชื่อฟาร์ม : เพชรนรินทร์ ฟาร์ม
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              วันที่สร้างฟาร์ม : 3 กุมภาพันธ์ 2564
            </Typography>
          </Box>
        </ThemeProvider>
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
