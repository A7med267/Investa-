import {
    Box,
    Button,
    TextField,
    Typography,
    Stack
  } from "@mui/material";
  import { Link as RouterLink } from "react-router-dom";
  import { images } from "../../assets";
  import { Link as MuiLink } from "@mui/material";
  


  const ForgotPassword = () => {
    return (
      <Box
        sx={{
          position: "fixed", // يمنع السكرول
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          overflow: "hidden", // يمنع ظهور السكرول
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Left form section */}
        <Box
          sx={{
            height: "100%",
            width: { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
            bgcolor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 4,
            zIndex: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <img src={images.logo} alt="Investa Logo" height={100} />
          </Box>
  
          {/* Form */}
          <Box component="form" maxWidth={400} width="100%">
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Forgot your password?
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Enter your email and we'll send you a link to reset it.
            </Typography>
  
            <Stack spacing={3}>
              <TextField label="Email address" type="email" fullWidth />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#001F3F",
                  "&:hover": { bgcolor: "#001a35" }
                }}
              >
                Send reset link
              </Button>
  
              <Typography variant="body2" textAlign="center">
  <MuiLink
    component={RouterLink}
    to="/login"
    underline="none"
    sx={{
      color: "#001F3F",
      fontWeight: "500",
      transition: "0.3s",
      "&:hover": {
        color: "#003366",
        textDecoration: "underline",
      }
    }}
  >
    Back to Sign in
  </MuiLink>
</Typography>

            </Stack>
          </Box>
        </Box>
  
        {/* Right illustration */}
        <Box
  sx={{
    height: "100%",
    width: { xl: "75%", lg: "65%", md: "55%", xs: "0%" },
    backgroundImage: `url(${images.illustration})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% center",
    display: { xs: "none", md: "block" },
  }}
/>
      </Box>
    );
  };
  
  export default ForgotPassword;
  