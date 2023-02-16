import React, { useState, useEffect } from "react";
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
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});

export default function EditProfile() {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [dataView, setDataView] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`api/user/${id}`).then((res) => {
      setDataView(res.data);
    });
  }, []);
  const [data, setData] = useState({
    name: "",
    email: "",
    lineId: "",
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    let image = e.target.files;
    let read = new FileReader();
    read.onload = (e) => {
      setData({ ...data, image: String(e.target?.result) });
    };
    read.readAsDataURL(image[0]);
    setFile(URL.createObjectURL(image[0]));
  };
  const onEditProfile = async () => {
    api.put(`api/user/${id}`, data).then((res) => navigate(`/Profile`));
    console.log("Success:", data);
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
            แก้ไขข้อมูลส่วนตัว
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth={600}
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
                          onChange={(e) => handleImage(e)}
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
                      defaultValue={dataView.userImage}
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
                  placeholder={dataView.name}
                  onChange={(e) => handleData(e)}
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
                  placeholder={dataView.email}
                  onChange={(e) => handleData(e)}
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
                  placeholder={dataView.lineId}
                  onChange={(e) => handleData(e)}
                />
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="secondary"
              htmlType="submit"
              className="btn-save"
              onClick={onEditProfile}
            >
              แก้ไขข้อมูล
            </Button>

            <br />
          </Box>
        </ThemeProvider>
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
