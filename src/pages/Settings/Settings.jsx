import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  width: '100%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
}));

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleSettingChange = (name) => (event) => {
    setSettings({
      ...settings,
      [name]: event.target.checked,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#001F3F', fontWeight: 600 }}>
        Settings
      </Typography>

      <StyledPaper>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#001F3F', fontWeight: 600 }}>
          Notification Settings
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.notifications}
                  onChange={handleSettingChange('notifications')}
                  sx={{
                    '& .MuiSwitch-thumb': {
                      backgroundColor: settings.notifications ? '#001F3F' : '#fff',
                    },
                    '& .MuiSwitch-track': {
                      backgroundColor: settings.notifications ? 'rgba(0, 31, 63, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                    },
                  }}
                />
              }
              label="Enable Notifications"
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '1.1rem',
                },
              }}
            />
          </Grid>
        </Grid>
      </StyledPaper>

      <StyledPaper>
        <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#001F3F', fontWeight: 600 }}>
          Appearance
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.darkMode}
                  onChange={handleSettingChange('darkMode')}
                  sx={{
                    '& .MuiSwitch-thumb': {
                      backgroundColor: settings.darkMode ? '#001F3F' : '#fff',
                    },
                    '& .MuiSwitch-track': {
                      backgroundColor: settings.darkMode ? 'rgba(0, 31, 63, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                    },
                  }}
                />
              }
              label="Dark Mode"
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '1.1rem',
                },
              }}
            />
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default Settings; 