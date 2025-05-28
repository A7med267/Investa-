import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
  circularProgressClasses,
  colors
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { images } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import Animate from "../../assets/Animate";
import SmartphoneIcon from "@mui/icons-material/Smartphone";


const LoginPage = () => {
  const navigate = useNavigate();

  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onSignin = (e) => {
    e.preventDefault();
    setOnRequest(true);

    const interval = setInterval(() => {
      setLoginProgress((prev) => prev + 100 / 40);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    setTimeout(() => {
      // تخزين توكن وهمي
      localStorage.setItem("token", "fake-token");
      setIsLoggedIn(true);
    }, 2100);

    setTimeout(() => {
      navigate("/dashboard");
    }, 2200);
  };

  return (
    <Box
      position="relative"
      height="100vh"
      width="100vw"
      sx={{
        overflow: "hidden",
        padding: 0,
        margin: 0,
        "::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        msOverflowStyle: "none"
      }}
    >
      {/* background image */}
      <Box
  sx={{
    position: "absolute",
    right: 0,
    height: "100%",
    width: "60%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${images.illustration})`,
    maxWidth: "100%",
    overflowX: "hidden"
  }}
/>


      {/* Login form */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: isLoggedIn
            ? "100%"
            : { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
          maxWidth: "100%",
          overflowX: "hidden"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
            overflowX: "hidden"
          }}
        >
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={100} />
            </Animate>
          </Box>

          {/* form */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "::-webkit-scrollbar": { display: "none" },
              overflowX: "hidden"
            }}
          >
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box component="form" maxWidth={400} width="100%" onSubmit={onSignin}>
                <Stack spacing={3}>
                  <TextField label="username" fullWidth />
                  <TextField label="password" type="password" fullWidth />
                  <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    sx={{
                      bgcolor: "#001F3F",
                      "&:hover": {
                        bgcolor: "#001a35"
                      }
                    }}
                  >
                    sign in
                  </Button>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                      />
                    </FormGroup>
                    <Typography fontWeight="bold">
  <Link to="/forgot-password" style={{ color: "#001F3F", textDecoration: "none" }}>
    Forgot password?
  </Link>
</Typography>

                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>
{/* footer */}
          <Box
  display="flex"
  alignItems="center"
  justifyContent="center"
  mt={4} 
  sx={{ paddingBottom: "40px" }}
>
  <SmartphoneIcon sx={{ fontSize: 20, mr: 1, color: "#001F3F" }} />
  <Typography
    variant="body1"
    sx={{
      fontSize: "1rem",
      color: "gray",
      fontStyle: "italic",
      fontFamily: "'Roboto', sans-serif",
    }}
  >
    <strong style={{ fontStyle: "normal", color: "#001F3F" }}>Investa</strong>{" "}
    is synced with your mobile app — <span style={{ fontStyle: "italic" }}>just sign in!</span>
  </Typography>
</Box>


          {/* loading spinner */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 1000
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: "#001F3F"
                  }}
                />
              </Box>
            </Stack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
