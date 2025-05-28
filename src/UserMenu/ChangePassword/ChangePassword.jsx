import { Box, Button, Stack, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError("");

    if (newPass.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (newPass !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    //  (وهمي)
    setSuccess(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={10} px={3}>
      <Typography variant="h5" mb={3} fontWeight="bold" textAlign="center">
        Change Your Password
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success" sx={{ mt: 2 }}>Password changed successfully!</Alert>}

      <form onSubmit={handleChangePassword}>
        <Stack spacing={2} mt={3}>
          <TextField
            type="password"
            label="New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
          />
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            required
          />
          <Button variant="contained" type="submit" sx={{ bgcolor: "#001F3F" }}>
            Change Password
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ChangePassword;
