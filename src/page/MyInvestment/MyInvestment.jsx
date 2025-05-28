import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  TextField,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Container,
  Alert,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { rows } from "./data";
import { projectDetails } from "./data";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

const MyInvestment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const filteredInvestors = rows.filter(row =>
    row.investorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update selectedDetails when selectedProject changes
  React.useEffect(() => {
    if (selectedProject) {
      setSelectedDetails(projectDetails[selectedProject]);
    }
  }, [selectedProject]);

  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        py: 4, 
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.default' : "#f7fafd", 
        minHeight: "100vh" 
      }}
    >
      {/* Header */}
      <Box sx={{ 
        mb: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2
      }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"}
          sx={{ 
            fontSize: { xs: '1.75rem', sm: '2rem' },
            whiteSpace: 'nowrap'
          }}
        >
          My Investments
        </Typography>
        <Box sx={{ 
          width: { xs: '100%', sm: 'auto' },
          minWidth: { sm: 300, md: 400 }
        }}>
          <TextField
            fullWidth
            size="medium"
            placeholder="Search for businesses you invested in"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            sx={{
              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : "white",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'divider' : "#e0e0e0",
                },
                "&:hover fieldset": {
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {/* Note about limited investments */}
      <Alert 
        severity="info" 
        sx={{ 
          mb: 3, 
          borderRadius: 2,
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#1A3B4B' : '#DBF4FF',
          '& .MuiAlert-message': {
            fontSize: '0.95rem',
            color: (theme) => theme.palette.mode === 'dark' ? 'text.primary' : 'inherit'
          }
        }}
      >
          Investment is limited to two projects only.
      </Alert>

      {/* Total Investment Section */}
      <Card sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 3, 
        boxShadow: 2, 
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : 'white' 
      }}>
        <Typography variant="h6" fontWeight="bold" mb={2} color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : 'inherit'}>
          Total Investment
        </Typography>
        <List>
          {filteredInvestors.map(row => (
            <React.Fragment key={row.id}>
              <ListItem 
                button 
                selected={selectedProject === row.investorName} 
                onClick={() => setSelectedProject(row.investorName)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : '#f7fafd',
                  "&.Mui-selected": {
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'action.selected' : "#e3f2fd",
                  },
                  "&:hover": {
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'action.hover' : '#e3f2fd',
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: (theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492" }}>
                    {row.investorName[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : 'inherit'}>
                      {row.investorName}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      Started investing {row.investmentDate}
                    </Typography>
                  }
                />
                <Typography color="error.main" fontWeight="bold">{row.totalInvestment} L.E</Typography>
              </ListItem>
              <Divider 
                variant="inset" 
                component="li" 
                sx={{ 
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  borderWidth: '1px',
                  opacity: 0.8
                }} 
              />
            </React.Fragment>
          ))}
        </List>
      </Card>

      {/* Project Details Section  */}
      {selectedProject && selectedDetails && (
        <Card sx={{ 
          p: { xs: 2, md: 4 }, 
          mb: 4, 
          borderRadius: 4, 
          boxShadow: 3, 
          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : '#fff' 
        }}>
          <Typography variant="h5" fontWeight="bold" mb={3} color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} sx={{ letterSpacing: 1 }}>
            {selectedProject}
          </Typography>
          {/* Project Information */}
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} mb={2}>
              Project Information
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: 'Category Type', value: selectedDetails.category },
                { label: 'Type', value: selectedDetails.type },
                { label: 'Starting to invest', value: selectedDetails.start },
                { label: 'End of cycle', value: selectedDetails.end },
                { label: 'Amount of investment', value: selectedDetails.amount },
                { label: 'Roi expected', value: '52,000 L.E' },
                { label: 'Total Return', value: selectedDetails.totalReturn },
                { label: 'Success Rate', value: selectedDetails.success },
                { label: 'Expected ROI', value: selectedDetails.expectedROI },
                { label: 'Reinsurance', value: selectedDetails.reinsurance },
              ].map((item, idx) => (
                <Grid item xs={12} sm={6} md={3} key={item.label}>
                  <Box 
                    sx={{ 
                      bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : (idx % 2 === 0 ? '#f7fafd' : '#f2f6fa'),
                      borderRadius: 2, 
                      p: 2, 
                      width: '100%',
                      height: '100%',
                      border: (theme) => theme.palette.mode === 'dark' ? '1px solid' : 'none',
                      borderColor: (theme) => theme.palette.mode === 'dark' ? 'divider' : 'transparent'
                    }}
                  >
                    <Typography 
                      variant="body2" 
                      fontWeight="bold" 
                      color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : "#222"} 
                      sx={{ 
                        fontSize: '0.9rem',
                        mb: 1
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      color={(theme) => theme.palette.mode === 'dark' ? 'text.secondary' : "#9e9e9e"} 
                      sx={{ 
                        display: 'block',
                        mb: 1
                      }}
                    >
                      Started investing since → {selectedDetails.start || '-'}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      fontWeight="bold" 
                      color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} 
                      sx={{ 
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.value !== undefined && item.value !== null && item.value !== '' ? item.value : '-'}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* Current progress*/}
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} mb={1.5}>
              Current progress
            </Typography>
            <Grid container spacing={1.5}>
              {/* First row */}
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : '#f7fafd',
                  borderRadius: 1.5, 
                  p: 1.5, 
                  mb: 1.5,
                  border: (theme) => theme.palette.mode === 'dark' ? '1px solid' : 'none',
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'divider' : 'transparent'
                }}>
                  <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : "#222"} sx={{ fontSize: '0.875rem' }}>
                    Amount of investment
                  </Typography>
                  <Typography variant="caption" color={(theme) => theme.palette.mode === 'dark' ? 'text.secondary' : "#bdbdbd"} sx={{ display: 'block', mb: 0.5 }}>
                    Started investing since → {selectedDetails.start || '-'}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} sx={{ fontSize: '0.875rem' }}>
                    {selectedDetails.amount || '-'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : '#f2f6fa',
                  borderRadius: 1.5, 
                  p: 1.5, 
                  mb: 1.5,
                  border: (theme) => theme.palette.mode === 'dark' ? '1px solid' : 'none',
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'divider' : 'transparent'
                }}>
                  <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : "#222"} sx={{ fontSize: '0.875rem' }}>
                    Reinsurance
                  </Typography>
                  <Typography variant="caption" color={(theme) => theme.palette.mode === 'dark' ? 'text.secondary' : "#bdbdbd"} sx={{ display: 'block', mb: 0.5 }}>
                    Payed at → {selectedDetails.start || '-'}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} sx={{ fontSize: '0.875rem' }}>
                    13,000 L.E
                  </Typography>
                </Box>
              </Grid>
              {/* Second row: progress items*/}
              {selectedDetails.progress && selectedDetails.progress.map((item, idx) => (
                <Grid item xs={12} md={6} key={item.label}>
                  <Box sx={{ 
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : (idx % 2 === 0 ? '#f7fafd' : '#f2f6fa'),
                    borderRadius: 1.5, 
                    p: 1.5, 
                    mb: 1.5,
                    border: (theme) => theme.palette.mode === 'dark' ? '1px solid' : 'none',
                    borderColor: (theme) => theme.palette.mode === 'dark' ? 'divider' : 'transparent'
                  }}>
                    <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : "#222"} sx={{ fontSize: '0.875rem' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="caption" color={(theme) => theme.palette.mode === 'dark' ? 'text.secondary' : "#bdbdbd"} sx={{ display: 'block', mb: 0.5 }}>
                      {item.label === 'Current ROI Rate' ? 'Third Quarter → ' + selectedDetails.start :
                        item.label === 'Current ROI' ? 'Third Quarter → ' + selectedDetails.start :
                        item.label === 'ROI Quarter 1' ? 'Reward at Maximum → 4-4-2025' :
                        item.label === 'ROI Quarter 2' ? 'Reward at Maximum → 3-8-2025' : ''}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492"} sx={{ fontSize: '0.875rem' }}>
                      {item.value || '-'}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      )}

  
    </Container>
  );
};

export default MyInvestment;