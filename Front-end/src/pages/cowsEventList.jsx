import * as React from "react";
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
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function CowsEventlist() {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age, setAge] = React.useState();

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
                <TableCell colSpan={2} align="center">
                  ชื่อวัว
                </TableCell>
                <TableCell align="center">น้ำเชื้อเพศผู้</TableCell>
                <TableCell align="center">วันติดสัด</TableCell>
                <TableCell align="center">ตรวจครรภ์</TableCell>
                <TableCell align="center">กำหนดคลอด</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  <img
                    style={{ borderRadius: 30, height: 50, width: 50 }}
                    src="https://www.sarakaset.com/wp-content/uploads/2022/05/raise-cows-02.jpg"
                  ></img>
                </TableCell>
                <TableCell>
                  <Typography align="left">นิลลลลลลลลลลลลลลล</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">1Y9M3D</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">27 พ.ย 65 (อีก 16 วัน)</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">4 ก.พ 66 (อีก 85 วัน)</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">
                    18 ส.ค 66 (อีก 280 วัน)
                  </Typography>
                </TableCell>
              </TableRow>
            </Table>
          </Paper>
        </ThemeProvider>
      </Box>
      <Footer />
    </>
  );
}
