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

export default function HomeCowList() {
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [age, setAge] = React.useState();

  return (
    <>
      <Header />
      <Container />
      {/* <br /> <br /> */}
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
                  value={age}
                  label="Age"
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
            <Table sx={{ minWidth: 650 }}>
              <TableRow>
                <TableCell colSpan={2} align="center">
                  ชื่อวัว
                </TableCell>
                <TableCell align="center">อายุ</TableCell>
                <TableCell align="center">เพศ</TableCell>
                <TableCell align="center">อื่นๆ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  <img
                    style={{ borderRadius: 30, height: 50, width: 50 }}
                    src="https://cms.dmpcdn.com/dara/2021/11/10/22126e10-41d7-11ec-ac29-755e2c04978c_original.jpg"
                  ></img>
                </TableCell>
                <TableCell>
                  <Typography align="left">นิล</Typography>
                </TableCell>

                <TableCell>
                  <Typography align="center">1Y9M3D</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">เมีย</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">GGGYFHJH-5</Typography>
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
