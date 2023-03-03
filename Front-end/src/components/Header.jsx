import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  Paper,
  Stack,
  Grid,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AgricultureTwoToneIcon from "@mui/icons-material/AgricultureTwoTone";
import { api } from "../baseURL/url";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  const [dataView, setDataView] = useState([]);
  const id = localStorage.getItem("Logged");
  const navigate = useNavigate();
  useEffect(() => {
    api.get(`api/user/${id}`).then((res) => {
      setDataView(res.data);
    });
  }, []);
  const onLogout = () => {
    localStorage.removeItem("Logged");
    navigate("/");
  };
  const appbar = (
    <div>
      <Stack direction="row" spacing={2} sx={{ marginX: "auto", marginTop: 1 }}>
        <Grid>
          <ListItemButton href="/home">
            <AgricultureTwoToneIcon />
            <ListItemText primary="ระบบจัดการฟาร์มวัวบ้านๆ" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton href="/home">
            <ListItemText primary="หน้าแรก" />
          </ListItemButton>
        </Grid>
        {/* <Grid>
          <ListItemButton href="/cows_event">
            <ListItemText primary="กิจกรรมวัว" />
          </ListItemButton>
        </Grid> */}
        <Grid>
          <ListItemButton href="/farm_details">
            <ListItemText primary="รายละเอียดฟาร์ม" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton href="/Profile">
            <ListItemText primary="ข้อมูลส่วนตัว" />
          </ListItemButton>
        </Grid>
        <Grid>
          <ListItemButton onClick={onLogout}>
            <ListItemText primary="ออกจากระบบ" />
          </ListItemButton>
        </Grid>
        <Grid container md={2} style={{ marginLeft: 250 }}>
          <Grid sx={{ mt: 1 }}>
            <PersonIcon sx={{ mt: 1 }} />
          </Grid>
          <Grid sx={{ mt: 1 }}>
            <Typography sx={{ mt: 1 }}>ชื่อผู้ใช้ : {dataView.name}</Typography>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        zIndex={2}
        sx={{
          height: 60,
          boxShadow: "none",
          zIndex: 0,
          backgroundColor: "#282c34",
          textAlign: "center",
        }}
      >
        {appbar}
      </AppBar>
    </>
  );
}
