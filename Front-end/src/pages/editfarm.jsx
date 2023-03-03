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
import { useParams, useNavigate } from "react-router-dom";
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

export default function EditFarm() {
  const navigate = useNavigate();
  const [dataView, setDataView] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    api.get(`api/farm/${id}`).then((res) => {
      setDataView(res.data);
    });
  }, []);
  const [data, setData] = useState({
    farmName: "",
  });
  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onEditFarm = async () => {
    api.put(`api/farm/${id}`, data).then((res) => navigate(`/farm_details`));
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
            แก้ไขข้อมูลฟาร์ม
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
                  ชื่อฟาร์ม :
                </Typography>
              </Grid>
              <Grid item md={8} xs={8}>
                <TextField
                  name="farmName"
                  margin="normal"
                  type={"farmName"}
                  variant="outlined"
                  placeholder={dataView.farmName}
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
              onClick={onEditFarm}
            >
              บันทึกข้อมูล
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
