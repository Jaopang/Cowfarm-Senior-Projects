import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ErrorIcon from "@mui/icons-material/Error";
import { createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { api } from "../baseURL/url";
// import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

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
      main: "#66BB6A",
    },
    Error: {
      main: "#FF4444",
    },
    Info: {
      main: "#ccc",
    },
  },
});

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const id = localStorage.getItem("Logged");

  const deleteProfileData = async () => {
    console.log("delete", id);
    await api.delete(`api/user/${id}`).then((res) => navigate(`/`));
  };

  return (
    <div>
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
            คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลของคุณ
          </Typography>
          <br />
          <Stack direction="row" spacing={15} sx={{ mx: "auto", ml: 4 }}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
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
    </div>
  );
}
