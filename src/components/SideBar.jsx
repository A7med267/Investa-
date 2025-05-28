import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  styled,
  useTheme,
  Typography,
  Tooltip,
  alpha,
  Collapse,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SupportIcon from '@mui/icons-material/Support';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'white',
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  background: theme.palette.mode === 'dark' 
    ? alpha(theme.palette.background.paper, 0.1)
    : alpha('#001F3F', 0.02),
}));

const StyledAvatar = styled(Avatar)(({ theme, open }) => ({
  margin: '0 auto',
  width: open ? 88 : 44,
  height: open ? 88 : 44,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  border: `2px solid ${theme.palette.mode === 'dark' 
    ? alpha(theme.palette.primary.main, 0.3)
    : alpha('#001F3F', 0.1)}`,
  transition: theme.transitions.create(['width', 'height', 'border'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    border: `2px solid ${theme.palette.mode === 'dark'
      ? alpha(theme.palette.primary.main, 0.5)
      : alpha('#001F3F', 0.3)}`,
  },
}));

const StyledTypography = styled(Typography)(({ theme, open }) => ({
  fontSize: open ? 17 : 0,
  transition: theme.transitions.create('font-size', {
    duration: theme.transitions.duration.standard,
  }),
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#001F3F',
  fontWeight: 600,
}));

const StyledSubTypography = styled(Typography)(({ theme, open }) => ({
  fontSize: open ? 15 : 0,
  transition: theme.transitions.create('font-size', {
    duration: theme.transitions.duration.standard,
  }),
  color: theme.palette.mode === 'dark' 
    ? alpha(theme.palette.text.secondary, 0.7)
    : alpha('#001F3F', 0.7),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, open }) => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  padding: theme.spacing(0, 2.5),
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? alpha(theme.palette.primary.main, 0.1)
      : alpha('#001F3F', 0.05),
    transform: 'translateX(4px)',
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.mode === 'dark'
      ? alpha(theme.palette.primary.main, 0.15)
      : alpha('#001F3F', 0.08),
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme, open }) => ({
  minWidth: 0,
  marginRight: open ? 24 : 'auto',
  justifyContent: "center",
  color: theme.palette.mode === 'dark' 
    ? theme.palette.text.primary 
    : '#001F3F',
  transition: theme.transitions.create(['margin-right', 'color'], {
    duration: theme.transitions.duration.standard,
  }),
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem',
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme, open }) => ({
  opacity: open ? 1 : 0,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.standard,
  }),
  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  backgroundColor: theme.palette.mode === 'dark'
    ? alpha(theme.palette.divider, 0.2)
    : alpha('#001F3F', 0.1),
}));

const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "My Investment", icon: <ManageAccountsIcon />, path: "/MyInvestment" },
  { text: "Transactions", icon: <CurrencyExchangeIcon />, path: "/Transaction" },
  { text: "Analytics", icon: <AssessmentIcon />, path: "/Analytics" },
];

const Array2 = [
  { text: "Reports", icon: <SummarizeIcon />, path: "/reports" },
  { text: "Investa Smart Assistant", icon: <SmartToyIcon />, path: "/ChatBot" },
];

const Array3 = [
  { text: "FAQ", icon: <QuestionAnswerIcon />, path: "/help/faq" },
  { text: "Support", icon: <SupportIcon />, path: "/help/support" }
];

const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [helpOpen, setHelpOpen] = useState(false);

  const handleHelpClick = () => {
    setHelpOpen(!helpOpen);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <StyledDivider />
      <StyledAvatar
        open={open}
        alt="Nada"
        src="https://i.postimg.cc/XqbYd0D6/nadanashat.jpg"
      />
      <StyledTypography open={open} align="center">
        Nada Nashat
      </StyledTypography>
      <StyledSubTypography open={open} align="center">
        Admin
      </StyledSubTypography>
      <StyledDivider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <StyledListItemButton 
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                open={open}
              >
                <StyledListItemIcon open={open}>
                  {item.icon}
                </StyledListItemIcon>
                <StyledListItemText primary={item.text} open={open} />
              </StyledListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement="left">
              <StyledListItemButton 
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                open={open}
              >
                <StyledListItemIcon open={open}>
                  {item.icon}
                </StyledListItemIcon>
                <StyledListItemText primary={item.text} open={open} />
              </StyledListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title={open ? null : "Help"} placement="left">
            <StyledListItemButton 
              onClick={handleHelpClick}
              selected={location.pathname.startsWith('/help')}
              open={open}
            >
              <StyledListItemIcon open={open}>
                <HelpOutlineIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Help" open={open} />
              {open && (helpOpen ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>
          </Tooltip>
        </ListItem>
        <Collapse in={helpOpen && open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Array3.map((item) => (
              <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
                <Tooltip title={open ? null : item.text} placement="left">
                  <StyledListItemButton 
                    onClick={() => navigate(item.path)}
                    selected={location.pathname === item.path}
                    open={open}
                    sx={{ pl: 4 }}
                  >
                    <StyledListItemIcon open={open}>
                      {item.icon}
                    </StyledListItemIcon>
                    <StyledListItemText primary={item.text} open={open} />
                  </StyledListItemButton>
                </Tooltip>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default SideBar;
