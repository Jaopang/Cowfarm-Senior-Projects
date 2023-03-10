import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { api } from "../baseURL/url";
import { Link } from "react-router-dom";

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
export default function FarmDetails() {
  const [load, setLoad] = useState({});
  const [dataView, setDataView] = useState([]);
  const id = localStorage.getItem("Logged");
  const [data, setData] = useState({
    farmName: "",
  });
  useEffect(() => {
    api.get(`api/farm/${id}`).then((res) => {
      setDataView(res.data);
      setLoad(false);
    });
  }, []);

  const onEdit = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const convertTime = (time) => {
    return new Date(time).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
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
              ชื่อฟาร์ม : {dataView.farmName}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              วันที่สร้างฟาร์ม : {convertTime(dataView.createdAt)}
            </Typography>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="Info"
              onClick={onEdit}
              component={Link}
              to={`/editFarm/${id}`}
            >
              แก้ไขข้อมูล
            </Button>
          </Box>
        </ThemeProvider>
        <br />
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
