import * as React from "react";
import {
  ThemeProvider,
  createTheme, 
  styled,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
import NotificationBell from "./NotificationBell/NotificationBell";

//  DrawerHeader  styled
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

//  App 
const App = () => {
  const [open, setOpen] = React.useState(false);

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") || "light" //(Dark/Light)
  );
  
  // reateTheme
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  const [language, setLanguage] = React.useState("en"); 
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true); 

  const handleDrawerOpen = () => setOpen(true);  
  const handleDrawerClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}> {/* تغليف المكونات ضمن ThemeProvider */}
      <Box sx={{ display: "flex", width: "100vw", overflowX: "hidden" }}>
        <CssBaseline /> 
     
        <TopBar 
          open={open} 
          handleDrawerOpen={handleDrawerOpen} 
          setMode={setMode}
          language={language}
          setLanguage={setLanguage}
          notificationsEnabled={notificationsEnabled}
          setNotificationsEnabled={setNotificationsEnabled}
        />
        
        
        <SideBar
          open={open}
          handleDrawerClose={handleDrawerClose}
          sx={{ position: "fixed", height: "100vh", overflowX: "hidden" }}
        />
        
        {/* المحتوى الرئيسي */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            minWidth: 0, 
            overflowX: "hidden",
            overflowY: "auto",  
            height: "100vh"    
          }}
        >
          <DrawerHeader />
          <Outlet /> 
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
