import { useState } from "react";
import {
  IconButton,
  Badge,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  styled,
  alpha,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNotificationStore } from "./notificationStore";

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

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: alpha('#001F3F', 0.05),
  },
  '& .MuiListItemSecondaryAction-root': {
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  marginRight: theme.spacing(4),
  '& .MuiListItemText-primary': {
    fontSize: '0.875rem',
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
}));

const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.error.main, 0.7),
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.1),
  },
}));

const ClearAllButton = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  cursor: "pointer",
  padding: theme.spacing(1),
  color: theme.palette.error.main,
  transition: theme.transitions.create(['color', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.error.main, 0.05),
  },
}));

export default function NotificationBell() {
  const { notifications, clearNotifications, removeNotification } = useNotificationStore();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteNotification = (index) => {
    removeNotification(index);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notifications-popover" : undefined;

  return (
    <>
      <StyledIconButton onClick={handleClick}>
        <Badge 
          badgeContent={notifications.length} 
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              backgroundColor: '#ff1744',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.75rem',
              padding: '0 4px',
              minWidth: '20px',
              height: '20px',
              borderRadius: '10px',
            },
          }}
        >
          <NotificationsOutlinedIcon />
        </Badge>
      </StyledIconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 300,
            maxWidth: 400,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#001F3F' }}>
            Notifications
          </Typography>
        </Box>
        <Divider />
        <List sx={{ maxHeight: 400, overflow: "auto" }}>
          {notifications.length === 0 ? (
            <StyledListItem>
              <ListItemText 
                primary="No new notifications" 
                sx={{ 
                  textAlign: 'center',
                  color: 'text.secondary',
                }}
              />
            </StyledListItem>
          ) : (
            notifications.map((note, index) => (
              <StyledListItem
                key={index}
                secondaryAction={
                  <DeleteButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteNotification(index)}
                    size="small"
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </DeleteButton>
                }
              >
                <StyledListItemText primary={note} />
              </StyledListItem>
            ))
          )}
        </List>
        {notifications.length > 0 && (
          <>
            <Divider />
            <ClearAllButton onClick={clearNotifications}>
              Clear All Notifications
            </ClearAllButton>
          </>
        )}
      </Popover>
    </>
  );
}
