import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TableCell,
  Stack,
  Modal,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { api } from "../baseURL/url";
import { useNavigate, useLocation } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

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
export default function HomeCowsView() {
  const [dataVaccine, setDataVaccine] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [dataCowEvent, setDataCowEvent] = useState([]);
  console.log("dataCowEvent", dataCowEvent);

  console.log("dataList", dataList);

  const [loading, setLoading] = useState(false); //state loading รอ data
  const location = useLocation();
  const name = location.pathname;
  const navigate = useNavigate();
  const id = name.split("/").slice(-1).join(" ");
  const convertTime = (time) => {
    return new Date(time).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    api.get(`api/cow`).then((res) => {
      setDataList(res.data.filter((items) => items.id == id));
      setLoading();
    });
    api.get(`api/cowEvent`).then((res) => {
      setDataCowEvent(res.data.filter((items) => items.id == id));
    });
    api.get(`api/vaccine`).then((res) => {
      setDataVaccine(res.data.filter((items) => items.id == id));
    });
  }, []);
  const getDataById = async () => {
    const res = await api.get(`api/cow`);
    // const filtered = res.data.filter((items) => items.id == id);
    setDataList(res.data.filter((items) => items.id == id));
    setLoading();
  };
  // useEffect(() => {
  //   api.get(`api/cow/`).then((res) => {
  //     setDataCow(res.data);
  //     setLoading();
  //   });
  //   api.get(`api/cowEvent/`).then((res) => setDataList(res.data));
  //   api.get(`api/vaccine/`).then((res) => setDataCowEvent(res.data));
  // }, []);

  // useEffect(() => {
  //   getDataById();
  //   getDataCowEvent();
  //   getDataVaccine();
  // }, []);

  // const getDataById = async () => {
  //   const res = await api.get(`api/cow/${id}`);
  //   setDataList(res.data);
  //   setLoading();
  // };
  // const getDataCowEvent = async () => {
  //   const res = await api.get(`api/cowEvent/${id}`);
  //   setDataCowEvent(res.data);
  //   setLoading();
  // };
  // const getDataVaccine = async () => {
  //   const res = await api.get(`api/vaccine/${id}`);
  //   setDataCowEvent(res.data);
  //   setLoading();
  // };

  function handleDelete(id) {
    const res = api.delete(`api/cow/${id}`);
    setDataList(res.data);
    setLoading();
    // กลับไปหน้าที่จากมา
    navigate(`/home`);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            ข้อมูลวัว
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
            {dataList.map((items) => (
              <div>
                <TableCell align="right">
                  <img
                    style={{ height: "auto", width: 200 }}
                    src={items.cowImage}
                    alt="img"
                  />
                </TableCell>
                <Typography variant="h6" padding={1} textAlign="center">
                  ชื่อวัว : {items.cowName}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  รหัสประจำตัววัว : {items.rfId}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  วันเกิด : {convertTime(items.dobCow)}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  เพศ : {items.sex}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  อื่นๆ : {items.detail}
                </Typography>
              </div>
            ))}
            {dataCowEvent.map((items) => (
              <div>
                <Typography variant="h5" padding={1} textAlign="center">
                  {/* กิจกรรมวัว */}
                </Typography>
                <Typography
                  variant="h6"
                  padding={1}
                  textAlign="center"
                  // onChange={getDataVaccine}
                >
                  น้ำเชื้อตัวผู้ : {items.semen}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  วันผสมพันธ์ : {convertTime(items.breed)}
                </Typography>
              </div>
            ))}
            {dataVaccine.map((items) => (
              <div>
                <Typography variant="h5" padding={1} textAlign="center">
                  {/* ประวัติการฉีดวัคซีน */}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  ชื่อวัคซีน(ภาษาไทย) :{items.nameVaccineTH}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  ชื่อวัคซีน(ภาษาอังกฤษ) :{items.nameVaccineEng}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  รหัสวัคซีน :{items.vaccineId}
                </Typography>
                <Typography variant="h6" padding={1} textAlign="center">
                  วันที่วัคซีน :{items.createdAt}
                </Typography>
              </div>
            ))}
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
              onClick={handleOpen}
            >
              ลบวัว (ถาวร)
            </Button>
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
                  คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลวัวของคุณ
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
                    onClick={() => handleDelete(dataList.id)}
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
    </>
  );
}
