import { useState } from "react";
import {
  Menu,
  MenuItem,
  IconButton,
  Switch,
  FormControlLabel,
  Select,
  Box,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
  styled,
  alpha,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PropTypes from 'prop-types';

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

const StyledMenuItem = styled(MenuItem)(() => ({
  padding: '12px 16px',
  '&:hover': {
    backgroundColor: alpha('#001F3F', 0.1),
  },
}));

const StyledSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#001F3F',
    '&:hover': {
      backgroundColor: alpha('#001F3F', 0.1),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#001F3F',
  },
  '& .MuiSwitch-track': {
    backgroundColor: alpha('#001F3F', 0.5),
  },
}));

const StyledSelect = styled(Select)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: alpha('#001F3F', 0.3),
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: alpha('#001F3F', 0.5),
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#001F3F',
  },
}));

const SettingsMenu = ({
  setMode,
  currentMode,
  language,
  setLanguage,
  notificationsEnabled,
  setNotificationsEnabled,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeToggle = () => {
    setMode(currentMode === 'dark' ? 'light' : 'dark');
    handleClose();
  };

  return (
    <Box>
      <StyledIconButton onClick={handleClick}>
        <SettingsOutlinedIcon />
      </StyledIconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#001F3F' }}>
            Settings
          </Typography>
        </Box>
        <Divider />

        <StyledMenuItem onClick={handleModeToggle}>
          <ListItemIcon>
            {currentMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </ListItemIcon>
          <ListItemText primary="Theme Mode" />
        </StyledMenuItem>

        {/* <StyledMenuItem>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Language" />
          <StyledSelect
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            size="small"
            sx={{ ml: 2 }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ar">العربية</MenuItem>
          </StyledSelect>
        </StyledMenuItem> */}

        <Divider />

        <StyledMenuItem>
          <ListItemIcon>
            {notificationsEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
          </ListItemIcon>
          <ListItemText primary="Sound Alerts" />
          <FormControlLabel
            control={
              <StyledSwitch
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled((prev) => !prev)}
              />
            }
            sx={{ m: 0 }}
          />
        </StyledMenuItem>
      </Menu>
    </Box>
  );
};

SettingsMenu.propTypes = {
  setMode: PropTypes.func.isRequired,
  currentMode: PropTypes.oneOf(['light', 'dark']).isRequired,
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  notificationsEnabled: PropTypes.bool.isRequired,
  setNotificationsEnabled: PropTypes.func.isRequired,
};

export default SettingsMenu;
