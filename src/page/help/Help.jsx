import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SupportIcon from '@mui/icons-material/Support';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const faqData = [
  {
    question: "What is Investa?",
    answer: "Investa is a platform that connects investors with promising business opportunities, allowing you to invest in various projects and track your investments."
  },
  {
    question: "How do I start investing?",
    answer: "To start investing, you need to create an account, complete your profile, and then browse available investment opportunities. You can invest in projects that match your investment criteria."
  },
  {
    question: "What are the minimum investment amounts?",
    answer: "Minimum investment amounts vary by project. Each investment opportunity will clearly state its minimum investment requirement."
  },
  {
    question: "How do I track my investments?",
    answer: "You can track your investments through the dashboard, which shows your portfolio performance, returns, and investment history."
  },
  {
    question: "What are the fees?",
    answer: "We charge a small percentage fee on successful investments. The exact fee structure is transparently displayed before you make any investment."
  }
];

const Help = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('FAQ');
  const [supportMessage, setSupportMessage] = useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    // Handle support message submission
    console.log('Support message:', supportMessage);
    setSupportMessage('');
    // Add your support message handling logic here
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" fontWeight="bold">
          Help Center
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem 
          button 
          selected={selectedSection === 'FAQ'}
          onClick={() => handleSectionChange('FAQ')}
        >
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="FAQ" />
        </ListItem>
        <ListItem 
          button 
          selected={selectedSection === 'Support'}
          onClick={() => handleSectionChange('Support')}
        >
          <ListItemIcon>
            <SupportIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ position: 'fixed', left: 16, top: 16, zIndex: 1200 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box sx={{ mt: 8 }}>
          {selectedSection === 'FAQ' ? (
            <Box>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Frequently Asked Questions
              </Typography>
              {faqData.map((faq, index) => (
                <Accordion key={index} sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ) : (
            <Box>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                Contact Support
              </Typography>
              <Paper sx={{ p: 3, maxWidth: 600 }}>
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
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Help; 