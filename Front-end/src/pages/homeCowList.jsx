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
import { useParams } from "react-router-dom";
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

export default function HomeCowList() {
  // const { id } = useParams();
  const id = localStorage.getItem("Logged");
  const [loading, setLoading] = useState(false); //state loading รอ data
  const [dataList, setDataList] = useState([]);
  console.log("id", id);

  useEffect(() => {
    api.get(`api/cow`).then((res) => {
      setDataList(res.data);
      setLoading();
      console.log("dataList", dataList);
      //  api.get(`api/cow`).then((res) => {
      //    setDataList(res.data.filter((item) => item.dataList === this.id));
      //    setLoading();
      //  });
    });
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
  //เมนู Basic menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <Grid container spacing={2}>
            <Grid item xs={1} md={1}>
              <Button
                color="secondary"
                sx={{
                  borderRadius: 5,
                  padding: 1,
                  minWidth: 100,
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
            <Grid item xs={4} md={4}>
              <FormControl
                sx={{ m: 2, minWidth: 100, mt: 0.3, border: "none" }}
                size="small"
              >
                <InputLabel id="demo-select-small">เพศ</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "#7F9F9A",
                    borderRadius: 5,
                    border: 0,
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
                  }}
                >
                  <MenuItem value={10}>เพศผู้</MenuItem>
                  <MenuItem value={20}>เพศเมีย</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontSize: 24 }} align="left">
                ระบบจัดการฟาร์มวัวบ้านๆ
              </Typography>
            </Grid>

            <Grid>
              <Search item xs={4} sx={{ mt: 2 }}>
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
          <Paper
            sx={{
              backgroundColor: "#F6CA76",
              border: 1,
              borderColor: "#595959",
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
                  {/* <TableCell align="right">อื่นๆ</TableCell> */}
                  <TableCell align="center">...</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                          style={{ borderRadius: 30, height: 35, width: 35 }}
                          src={row.cowImage}
                        ></img>
                      </TableCell>
                      <TableCell>
                        <Typography align="left">{row.cowName}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        {convertTime(row.dobCow)}
                      </TableCell>
                      <TableCell align="right">{row.sex}</TableCell>
                      {/* <TableCell align="right">{row.detail}</TableCell> */}
                      <TableCell align="center">
                        <IconButton
                          // ref={anchorRef}
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
                          <MenuItem onClick={handleClose}>
                            <AddIcon />
                            เพิ่มวัคซีน
                          </MenuItem>
                        </Menu>
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
