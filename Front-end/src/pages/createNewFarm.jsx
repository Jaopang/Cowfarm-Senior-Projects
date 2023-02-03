import React, { useState } from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import { api } from "../baseURL/url";
import { useNavigate, useParams } from "react-router-dom";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#7F9F9A",
    },
  },
});
export default function CreateNewFarm() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id", id);
  const [data, setData] = useState({
    farmName: "",
  });
  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const onCreateNewFarm = async () => {
    data.userId = id;
    api.post("/api/farm", data).then((res) => navigate(`/login`));
    console.log("Success:", data);
  };
  return (
    <div>
      <from>
        <Typography variant="h3" padding={3} textAlign="center">
          ระบบจัดการฟาร์มวัวบ้านๆ
        </Typography>
        <Typography variant="h5" padding={1} textAlign="center">
          จดบันทึก และแจ้งเตือนก่อนถึงกำหนดสำคัญ
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
          backgroundColor={"#F6CA76"}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4" padding={3} textAlign="center">
              สร้างฟาร์มใหม่
            </Typography>
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
                  placeholder="กรุณาใส่ชื่อฟาร์ม"
                  borderRadius={15}
                  onChange={handleData}
                />
              </Grid>
            </Grid>
            <Button
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="secondary"
              onClick={onCreateNewFarm}
            >
              <DataSaverOnIcon />
              สร้างฟาร์ม
            </Button>
            <br />
          </ThemeProvider>
        </Box>
      </from>
      <br />
    </div>
  );
}
