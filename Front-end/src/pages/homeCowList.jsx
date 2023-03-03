import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import { api } from "../baseURL/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TableRow,
  TableCell,
  Table,
  TableBody,
  TableHead,
  Menu,
  ListItemButton,
  Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PreviewIcon from "@mui/icons-material/Preview";
import MedicationIcon from "@mui/icons-material/Medication";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#7F9F9A",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function HomeCowList() {
  const navigate = useNavigate();
  const id = localStorage.getItem("Logged");
  const [loading, setLoading] = useState(false); //state loading รอ data
  const [search, onSearch] = useState("");
  const [dataList, setDataList] = useState([]);

  // const [data, setData] = useState({
  //   userImage: "",
  //   name: "",
  //   email: "",
  //   lineId: "",
  //   password: "",
  // });
  // const [dataEvent, setDataEvent] = useState({
  //   cowName: "",
  //   cowImage: "",
  //   rfId: "",
  //   dobtime: new Date(),
  //   sex: "",
  //   detail: "",
  //   farmId: "",
  //   cowEventId: "",
  //   vaccineId: "",
  // });
  // useEffect(() => {
  //   const getDataById = async () => {
  //     const res = await api.get(`api/cow`);
  //     const filtered = res.data.filter((items) => items.id == id);
  //     setDataCow(filtered);
  //     setLoading();
  //   };
  //   // const getDataCowEvent = async () => {
  //   //   const res = await api.get(`api/cowEvent`);
  //   //   const filtered = res.data.filter((items) => items.id == id);
  //   //   setDataList(filtered);
  //   //   setLoading();
  //   // };
  //   // const getDataVaccine = async () => {
  //   //   const res = await api.get(`api/vaccine`);
  //   //   const filtered = res.data.filter((items) => items.id == id);
  //   //   setDataList(filtered);
  //   //   setLoading();
  //   // };
  // }, []);
  useEffect(() => {
    getDataById();
  }, []);

  const getDataById = async () => {
    const res = await api.get(`api/cow`);
    const filtered = res.data.filter((items) => items.farmId == id);
    setDataList(filtered);
    setLoading();
  };

  // const handleData = (event) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };
  // const handleDataEvent = (event) => {
  //   setDataEvent({ ...dataEvent, [event.target.name]: event.target.value });
  // };

  // const handleChange = (event) => {
  //   // setDataList(event.target.value);
  //   setDataList({ ...data, [event.target.name]: event.target.value });
  // };

  // const handCreateCowEvent = () => {
  //   // dataList.id = id;
  //   navigate(`/createCowEvent/${id}`);
  // };

  const convertTime = (time) => {
    return new Date(time).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const checkSex = "เพศเมีย";
  //เมนู Basic menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
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
          <Grid container spacing={2}>
            <Grid item xs={6} md={2}>
              <Button
                color="secondary"
                sx={{
                  borderRadius: 5,
                  padding: 1,
                  minWidth: 120,
                  marginLeft: 5,
                  border: 1,
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
                variant="contained"
                href="/home/createCows"
              >
                <AddIcon />
                เพิ่มวัว
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Typography sx={{ fontSize: 24 }} align="center">
                ระบบจัดการฟาร์มวัวบ้านๆ
              </Typography>
            </Grid>
            <Grid item xs={4} align="center">
              <Search
                item
                xs={4}
                sm={2}
                sx={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="ค้าหาจากรหัสประจำตัววัว"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => onSearch(e.target.value)}
                />
              </Search>
            </Grid>
          </Grid>
          <Paper
            sx={{
              backgroundColor: "#F6CA76",
              border: 1,
              borderColor: "#595959",
              padding: 1,
              marginTop: 5,
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">รหัสประจำตัววัว</TableCell>
                  <TableCell align="right">ชื่อวัว</TableCell>
                  <TableCell> </TableCell>
                  <TableCell align="center">วันเกิด</TableCell>
                  <TableCell align="right">เพศ</TableCell>
                  <TableCell align="center">...</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataList
                  .filter((items) => {
                    return search.toLowerCase() === ""
                      ? items
                      : items.rfId.toLowerCase().includes(search);
                  })
                  .map((items) => (
                    <TableRow>
                      <Typography align="center" sx={{ mt: 3 }}>
                        {items.rfId}
                      </Typography>
                      <TableCell>
                        <img
                          src={items.cowImage}
                          align="right"
                          alt="img"
                          style={{ borderRadius: 30, height: 35, width: 35 }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography align="left">{items.cowName}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography align="center">
                          {convertTime(items.dobCow)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">{items.sex}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="ดูข้อมูลเพิ่มเติม">
                          <IconButton
                            id="compositon-button"
                            aria-controls={
                              open ? "conposition-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            component={Link}
                            to={`/home/view/${items.id}`}
                            // to={{
                            //   pathname: `/home/view/${items.id}`,
                            //   state: { getDataById },
                            // }}
                          >
                            <PreviewIcon />
                          </IconButton>
                        </Tooltip>
                        {checkSex === items.sex ? (
                          <Tooltip title="เพิ่มกิจกรรมวัว">
                            <IconButton
                              id="compositon-button"
                              aria-controls={
                                open ? "conposition-menu" : undefined
                              }
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick}
                              component={Link}
                              to={`/createCowEvent/${items.id}`}
                            >
                              <AddCircleIcon />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip title="เพิ่มกิจกรรมวัว">
                            <IconButton
                              disabled
                              id="compositon-button"
                              aria-controls={
                                open ? "conposition-menu" : undefined
                              }
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={handleClick}
                              component={Link}
                              to={`/createCowEvent/${items.id}`}
                            >
                              <AddCircleIcon />
                            </IconButton>
                          </Tooltip>
                        )}

                        <Tooltip title="เพิ่มวัคซีนวัว">
                          <IconButton
                            id="compositon-button"
                            aria-controls={
                              open ? "conposition-menu" : undefined
                            }
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            component={Link}
                            to={`/createVaccine/${items.id}`}
                          >
                            <MedicationIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  );
}
