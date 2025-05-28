import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Support = () => {
  const [supportMessage, setSupportMessage] = useState('');

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    // Handle support message submission
    console.log('Support message:', supportMessage);
    setSupportMessage('');
    // Add your support message handling logic here
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Contact Support
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <form onSubmit={handleSupportSubmit}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                How can we help you?
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                placeholder="Describe your issue or question..."
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
                <EmailIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Email Support</Typography>
              </Box>
              <Typography>support@investa.com</Typography>
            </CardContent>
          </Card>

          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Phone Support</Typography>
              </Box>
              <Typography>+1 (555) 123-4567</Typography>
            </CardContent>
          </Card>
{/* 
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 2 }} />
                <Typography variant="h6">Office Location</Typography>
              </Box>
              <Typography>123 Investment Street</Typography>
              <Typography>Financial District</Typography>
              <Typography>New York, NY 10004</Typography>
            </CardContent>
          </Card> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Support; 