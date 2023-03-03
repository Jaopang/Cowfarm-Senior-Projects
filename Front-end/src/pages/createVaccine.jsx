import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  TableCell,
  TableRow,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { api } from "../baseURL/url";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/th";
import dayjs from "dayjs";
import axios from "axios";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useNavigate, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    success: {
      main: "#66BB6A",
    },
    secondary: {
      main: "#7F9F9A",
    },
  },
});

export default function CreateVaccine() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  // const id = localStorage.getItem("Logged");
  const [data, setData] = useState({
    nameVaccineTH: "",
    nameVaccineEng: "",
    vaccineId: "",
  });
  const location = useLocation();
  const name = location.pathname;
  const id = name.split("/").slice(-1).join(" ");
  console.log("id", id);

  const [datat, setDatat] = useState([]);
  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // useEffect(() => {
  //   dayjs.locale("th");
  //   setData({ ...data, farmId: Number(localStorage.getItem("farmId")) });
  //   axios()
  //     .then(function (res) {
  //       setDatat(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const onCreateVaccine = async () => {
    data.id = id;
    api.post("/api/vaccine", data).then((res) => navigate(`/home`));
    console.log("Success:", data);
  };

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
          padding: 3,
          borderRadius: 3,
          marginTop: 15,
        }}
      >
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
          <ThemeProvider theme={theme}>
            <Typography variant="h4" padding={3} textAlign="center">
              เพิ่มวัคซีน
            </Typography>
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
                md={4}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  ชื่อวัคซีน(ภาษาไทย) :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="nameVaccineTH"
                  margin="normal"
                  type={"nameVaccine"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อวัคซีน(ภาษาไทย)"
                  sx={{ width: 265 }}
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  ชื่อวัคซีน(ภาษาอังกฤษ) :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="nameVaccineEng"
                  margin="normal"
                  type={"nameVaccine"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อวัคซีน(ภาษาอังกฤษ)"
                  sx={{ width: 265 }}
                  onChange={handleData}
                />
              </Grid>
              <Grid
                item
                xs={4}
                md={4}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  รหัสวัคซีน :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="vaccineId"
                  margin="normal"
                  type={"vaccineId"}
                  variant="outlined"
                  placeholder="กรุณาใส่รหัสวัคซีน"
                  sx={{ width: 265 }}
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <br />
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="success"
              onClick={onCreateVaccine}
            >
              บันทึกข้อมูล
              <CreateNewFolderIcon />
            </Button>
            <br />
          </ThemeProvider>
        </Box>
        <br /> <br />
      </Box>
      <Footer />
    </>
  );
}
