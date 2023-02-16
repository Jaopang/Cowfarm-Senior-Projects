import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TableCell } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { api } from "../baseURL/url";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import ErrorIcon from "@mui/icons-material/Error";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};
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
export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dataView, setDataView] = useState([]);
  const id = localStorage.getItem("Logged");
  console.log("id", id);
  const [data, setData] = useState({
    name: "",
    email: "",
    lineId: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    api.get(`api/user/${id}`).then((res) => {
      setDataView(res.data);
    });
  }, []);

  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const deleteProfileData = async () => {
    api.delete(`api/user/${id}`).then((res) => navigate(`/home`));
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
                src={dataView.userImage}
              ></img>
            </TableCell>
            <Typography variant="h6" padding={1} textAlign="center">
              ชื่อผู้ใช้ : {dataView.name}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              ไลน์ไอดี : {dataView.lineId}
            </Typography>
            <Typography variant="h6" padding={1} textAlign="center">
              อีเมล์ : {dataView.email}
            </Typography>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="Info"
              onClick={handleData}
              component={Link}
              to={`/editProfile/${id}`}
            >
              แก้ไขข้อมูล
            </Button>
            <Button
              color="Error"
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              onClick={handleOpen}

              // onClick={deleteProfileData}
            >
              ลบวัว (ถาวร)
            </Button>
            <br />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} theme={theme}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  align="center"
                  component="h2"
                  color="Error"
                >
                  <ErrorIcon style={{ height: 50, width: 70 }} color="Error" />{" "}
                </Typography>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  align="center"
                  component="h2"
                  color="Error"
                >
                  ลบข้อมูล (ถาวร)
                </Typography>
                <Typography
                  id="modal-modal-description"
                  align="center"
                  sx={{ mt: 2 }}
                >
                  คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลของคุณ
                </Typography>
                <br />
                <Stack direction="row" spacing={15} sx={{ mx: "auto", ml: 4 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleClose}
                  >
                    ยกเลิก
                  </Button>
                  <Button
                    variant="contained"
                    color="Error"
                    onClick={deleteProfileData}
                  >
                    ลบ
                  </Button>
                </Stack>
              </Box>
            </Modal>
          </Box>
        </ThemeProvider>
        <br />
        <br />
      </Box>
      <Footer />
    </div>
  );
}
