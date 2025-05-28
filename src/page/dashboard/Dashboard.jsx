import React from "react";
import { Box, Grid, Typography, Card, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Button } from "@mui/material";
import DefaultInfoCard from "../../DefaultInfoCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentsIcon from "@mui/icons-material/Payments";
import TimelineIcon from "@mui/icons-material/Timeline";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { rows } from "../MyInvestment/data";
import { projectDetails } from "../MyInvestment/data";
import { useNavigate } from "react-router-dom";
import PieChart from "../pieChart/PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//Chart Data
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Investment Value (L.E)",
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      data: [100000, 110000, 125000, 137000 ,143200],
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
    {
      label: "Net Profit (L.E)",
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      data: [25000, 50000, 75000, 88900, 95000],
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
  ],
};

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 12,
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      beginAtZero: true,
    },
  },
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      p: { xs: 1, sm: 2, md: 3 },
      width: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      <Grid 
        container 
        spacing={{ xs: 1.5, sm: 2, md: 3 }} 
      >
        {[
          { 
            icon: AttachMoneyIcon, 
            title: "Total Investment", 
            value: "137,000 L.E",
            description: "Since 1 January 2025",
            color: "#254195"
          },
          { 
            icon: PaymentsIcon, 
            title: "Total Current Net profit", 
            value: "88,900 L.E",
            description: "In April 2025",
            color: "#28a745"
          },
          { 
            icon: TimelineIcon, 
            title: "Investment Type", 
            value: "Short - Long",
            description: "Portfolio diversity",
            color: "#ffc107"
          },
          { 
            icon: BusinessIcon, 
            title: "Businesses invested in", 
            value: "Zero sugar - Fakhr",
            description: "Current investments",
            color: "#dc3545"
          },
        ].map((item, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            lg={3} 
            key={index}
            sx={{
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <DefaultInfoCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              value={item.value}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>

      <Grid 
        container 
        spacing={{ xs: 1.5, sm: 2, md: 3 }} 
        sx={{ mt: { xs: 1.5, sm: 2, md: 3 } }}
      >
        <Grid 
          item 
          xs={12} 
          lg={7}
          sx={{
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <Card sx={{ 
            p: { xs: 2, sm: 3, md: 4 }, 
            height: '100%',
            minHeight: { xs: '400px', sm: '500px', md: '600px' },
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 3,
            borderRadius: 2
          }}>
            <Typography variant="h6" sx={{ 
              fontWeight: "bold",
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}>
              Investment Growth
            </Typography>
            <Box sx={{ 
              flex: 1,
              width: '100%',
              height: '100%',
              '& canvas': {
                maxWidth: '100% !important',
                height: '100% !important'
              }
            }}>
              <Line 
                data={{
                  ...lineChartData,
                  datasets: lineChartData.datasets.map(dataset => ({
                    ...dataset,
                    borderWidth: 2.5,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2
                  }))
                }}
                options={{
                  ...chartOptions,
                  maintainAspectRatio: false,
                  responsive: true
                }}
              />
            </Box>
          </Card>
        </Grid>
        
        <Grid 
          item 
          xs={12} 
          lg={5}
          sx={{
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: 1.5, sm: 2, md: 3 }
          }}>
            <Card sx={{ 
              p: { xs: 2, sm: 3 },
              boxShadow: 3,
              borderRadius: 2
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                mb: 1 
              }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  My Investments
                </Typography>
                <Button
                  onClick={() => navigate('/myInvestment')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#155492",
                    '&:hover': {
                      bgcolor: 'rgba(21, 84, 146, 0.08)',
                    }
                  }}
                >
                  View All
                </Button>
              </Box>
              <List sx={{ maxHeight: '200px', overflow: 'auto' }}>
                {rows.map((row) => {
                  const details = projectDetails[row.investorName];
                  return (
                    <React.Fragment key={row.id}>
                      <ListItem 
                        onClick={() => navigate('/myInvestment')}
                        sx={{
                          borderRadius: 2,
                          mb: 1,
                          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'background.paper' : '#f7fafd',
                          p: 1,
                          cursor: 'pointer',
                          '&:hover': {
                            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'action.hover' : 'rgba(21, 84, 146, 0.08)',
                          }
                        }}
                      >
                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                          <ListItemAvatar>
                            <Avatar sx={{ 
                              bgcolor: (theme) => theme.palette.mode === 'dark' ? 'primary.main' : "#155492",
                              width: 35,
                              height: 35
                            }}>
                              {row.investorName[0]}
                            </Avatar>
                          </ListItemAvatar>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography fontWeight="bold" color={(theme) => theme.palette.mode === 'dark' ? 'text.primary' : 'inherit'} fontSize="0.9rem">
                              {row.investorName}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" display="block" fontSize="0.75rem">
                              Started: {row.investmentDate}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography color="error.main" fontWeight="bold" fontSize="0.9rem">
                              {row.returns} L.E
                            </Typography>
                            <Typography variant="caption" color="text.secondary" display="block" fontSize="0.75rem">
                              ROI: {details?.progress?.[0]?.value || '-'}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <Divider 
                        variant="inset" 
                        component="li" 
                        sx={{ 
                          borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                          borderWidth: '1px',
                          opacity: 0.8,
                          my: 0.5
                        }} 
                      />
                    </React.Fragment>
                  );
                })}
              </List>
            </Card>

            <Card sx={{ 
              p: { xs: 2, sm: 3 },
              boxShadow: 3,
              borderRadius: 2,
              minHeight: { xs: '300px', sm: '350px' }
            }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Investment Distribution
              </Typography>
              <Box sx={{ height: '350px', width: "100%" }}>
                <PieChart />
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
