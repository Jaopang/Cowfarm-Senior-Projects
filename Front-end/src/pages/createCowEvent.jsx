import * as React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Grid,
  TextField,
} from "@mui/material";

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

export default function CreateCowEvent() {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age, setAge] = React.useState();
  const [value, setValue] = React.useState(null);
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
              เพิ่มกิจกรรมวัว
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ ml: 10, padding: 1 }}
            >
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ marginTop: 15 }}>
                  น้ำเชื้อตัวผู้ :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sx={{ mt: 1 }}>
                <TextField
                  name="detail"
                  margin="normal"
                  type={"detail"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อน้ำเชื้อตัวผู้"
                  sx={{ width: 265 }}
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
                  วันผสมพันธุ์:
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sx={{ mt: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <br />
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="success"
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
