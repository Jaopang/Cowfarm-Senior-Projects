import React, { useState, useEffect } from "react";
import { api } from "../baseURL/url";
import { styled } from "@mui/material/styles";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import {
  Paper,
  Box,
  Typography,
  MenuItem,
  Grid,
  TableRow,
  TableCell,
  Table,
  Menu,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
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

export default function CowsEventlist() {
  //เมนู Basic menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //
  const id = localStorage.getItem("Logged");
  const [loading, setLoading] = useState(false); //state loading รอ data
  const [dataList, setDataList] = useState([]);
  const [dataListEvent, setDataListEvent] = useState([]);

  console.log("id", id);
  useEffect(() => {
    api.get(`api/cow`).then((res) => {
      setDataList(res.data);
      setLoading();
    });
    // api.get(`api/cowEvent`).then((res) => {
    //   setDataListEvent(res.data);
    //   setLoading();
    // });
  }, []);
  const handleChange = (event) => {
    setDataList(event.target.value);
  };

  const convertTime = (time) => {
    return new Date(time).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
          padding: 5,
          borderRadius: 3,
          marginTop: 15,
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid container spacing={2} sx={{ ml: 35 }}>
            <Grid item xs={6} align="center">
              <Typography sx={{ fontSize: 24 }}>
                ระบบจัดการฟาร์มวัวบ้านๆ
              </Typography>
            </Grid>
            <Grid>
              <Search item xs={6} sx={{ mt: 2 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
          </Grid>
          <br />
          <br />

          <Paper
            sx={{
              backgroundColor: "#F6CA76",
              border: 1,
              borderColor: "#595959",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableRow>
                <TableCell align="center">รหัสประจำตัววัว</TableCell>
                <TableCell colSpan={2} align="center">
                  ชื่อวัว
                </TableCell>
                <TableCell align="center">น้ำเชื้อเพศผู้</TableCell>
                <TableCell align="center">วันติดสัด</TableCell>
                <TableCell align="center">ตรวจครรภ์</TableCell>
                <TableCell align="center">กำหนดคลอด</TableCell>
                <TableCell align="center">...</TableCell>
              </TableRow>
              {dataList &&
                dataList.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Typography align="center" sx={{ mt: 3 }}>
                      {row.rfId}
                    </Typography>
                    <TableCell align="right">
                      <img
                        style={{ borderRadius: 30, height: 50, width: 50 }}
                        src={row.cowImage}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <Typography align="left">{row.cowName}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">{row.semen}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        27 พ.ย 65 (อีก 16 วัน)
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        4 ก.พ 66 (อีก 85 วัน)
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        4 ก.พ 66 (อีก 85 วัน)
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        <IconButton
                          id="composition-button"
                          aria-controls={open ? "composition-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <RemoveRedEyeIcon />
                            ดูข้อมูลเพิ่มเติม
                          </MenuItem>
                          <MenuItem
                            // onClick={handleClose}
                            href="/cows_event/createCowEvent"
                          >
                            <AddIcon />
                            เพิ่มกิจกรรมวัว
                          </MenuItem>
                        </Menu>
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              {dataListEvent &&
                dataList.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Typography align="center" sx={{ mt: 3 }}>
                      {row.rfId}
                    </Typography>
                    <TableCell align="right">
                      <img
                        style={{ borderRadius: 30, height: 50, width: 50 }}
                        src={row.cowImage}
                      ></img>
                    </TableCell>
                    <TableCell>
                      <Typography align="left">{row.cowName}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">{row.semen}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        {/* 27 พ.ย 65 (อีก 16 วัน) */}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        {/* 4 ก.พ 66 (อีก 85 วัน) */}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        {/* 4 ก.พ 66 (อีก 85 วัน) */}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography align="center">
                        <IconButton
                          id="composition-button"
                          aria-controls={open ? "composition-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <RemoveRedEyeIcon />
                            ดูข้อมูลเพิ่มเติม
                          </MenuItem>
                          <MenuItem
                            // onClick={handleClose}
                            href="/cows_event/createCowEvent"
                          >
                            <AddIcon />
                            เพิ่มกิจกรรมวัว
                          </MenuItem>
                        </Menu>
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </Table>
          </Paper>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  );
}
