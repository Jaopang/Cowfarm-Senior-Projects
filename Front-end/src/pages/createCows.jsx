import React, { useState } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Grid,
  TextField,
  TableCell,
  TableRow,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../baseURL/url";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/ru";
import "dayjs/locale/de";
import "dayjs/locale/ar-sa";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
const locales = ["en"];

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

export default function CreateCows() {
  const [locale, setLocale] = React.useState("en");
  const [datePickerValue, setDatePickerValue] = React.useState(dayjs());

  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    cowName: "",
    sex: "",
    detail: "",
  });
  const [age, setAge] = React.useState();
  const [value, setValue] = React.useState(null);

  const handleImage = (event) => {
    let image = event.target.files;
    let read = new FileReader();
    read.onload = (e) => {
      setData({ ...data, image: String(e.target?.result) });
    };
    read.readAsDataURL(image[0]);
    setFile(URL.createObjectURL(image[0]));
  };
  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    setAge(event.target.value);
  };
  const onCreateCows = async () => {
    data.farmId = id;
    api.post("/api/cow", data).then((res) => navigate(`/home`));
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
              เพิ่มวัว
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
                  ชื่อวัว :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="cowName"
                  margin="normal"
                  type={"email"}
                  variant="outlined"
                  placeholder="กรุณาใส่ชื่อวัว"
                  sx={{ width: 265 }}
                  onChange={handleData}
                />
              </Grid>
              {/* <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  วันเกิดวัว:
                </Typography>
              </Grid> */}
              {/* <Grid item md={8} xs={8} sx={{ mt: 2 }}>
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale={locale}
                >
                  <Stack spacing={3}>
                    <DatePicker
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid> */}
              <br />
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ mt: 15 }}>
                  เพศวัว :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sx={{ mt: 2 }}>
                <Select
                  name="sex"
                  labelId="demo-select-small"
                  id="demo-select-small"
                  // value={sex}
                  label="sex"
                  onChange={handleData}
                  sx={{ width: 100 }}
                >
                  <MenuItem value={10}>เพศผู้</MenuItem>
                  <MenuItem value={20}>เพศเมีย</MenuItem>
                </Select>
                {/* </FormControl> */}
              </Grid>
              <Grid
                item
                xs={4}
                md={3}
                sx={{ marginTop: 1 }}
                justifyContent="center"
              >
                <Typography variant="contained" sx={{ marginTop: 15 }}>
                  อื่นๆ :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8} sx={{ height: 50 }}>
                <TextField
                  name="detail"
                  margin="normal"
                  type={"detail"}
                  variant="outlined"
                  fullWidth={true}
                  placeholder="รายละเอียดต่างๆของวัว"
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
              onClick={onCreateCows}
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
