import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  styled,
  alpha,
} from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.8),
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: alpha('#001F3F', 0.05),
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
  color: '#001F3F',
  minWidth: 36,
  transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
  '& .MuiSvgIcon-root': {
    fontSize: '1.25rem',
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const UserMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    handleClose();

    switch (action) {
      case "profile":
        navigate("/profile");
        break;
      case "changePassword":
        navigate("/change-password");
        break;
      case "recentActivities":
        navigate("/recent-activities");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "logout":
        localStorage.removeItem("token");
        navigate("/login");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledIconButton onClick={handleOpen}>
        <Person2OutlinedIcon />
      </StyledIconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 250,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
          },
        }}
      >
        <UserInfo>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#001F3F' }}>
            Nada Nashat
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Admin
          </Typography>
        </UserInfo>

        <Divider />

        <StyledMenuItem onClick={() => handleMenuItemClick('profile')}>
          <StyledListItemIcon>
            <Person2OutlinedIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Profile" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => handleMenuItemClick('changePassword')}>
          <StyledListItemIcon>
            <VpnKeyOutlinedIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Change Password" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => handleMenuItemClick('recentActivities')}>
          <StyledListItemIcon>
            <HistoryOutlinedIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Recent Activities" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => handleMenuItemClick('settings')}>
          <StyledListItemIcon>
            <SettingsOutlinedIcon />
          </StyledListItemIcon>
          <StyledListItemText primary="Settings" />
        </StyledMenuItem>

        <Divider />

        <StyledMenuItem 
          onClick={() => handleMenuItemClick('logout')}
          sx={{
            color: 'error.main',
            '&:hover': {
              backgroundColor: alpha('#ff1744', 0.05),
            },
          }}
        >
          <StyledListItemIcon sx={{ color: 'error.main' }}>
            <ExitToAppOutlinedIcon />
          </StyledListItemIcon>
          <StyledListItemText 
            primary="Logout"
            primaryTypographyProps={{ color: 'error.main' }}
          />
        </StyledMenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
