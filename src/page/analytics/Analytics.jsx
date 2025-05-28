import React from "react";
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import PieChart from "../pieChart/PieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Data for ROI if you invested Vs Saving (Bar Chart)
const roiBarData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  datasets: [
    {
      label: "Saving",
      backgroundColor: "#00fff0",
      data: [300, 250, 320, 400, 280, 350, 300, 270],
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: "Investing",
      backgroundColor: "#1a3cff",
      data: [450, 400, 420, 500, 380, 450, 400, 370],
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

// Data for Balance History
const balanceHistoryData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Balance",
      data: [200, 300, 650, 400, 250, 480, 500],
      borderColor: "#155492",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(21, 84, 146, 0.3)");
        gradient.addColorStop(1, "rgba(21, 84, 146, 0)");
        return gradient;
      },
      tension: 0.4,
      fill: true,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      titleColor: '#000',
      bodyColor: '#000',
      borderColor: '#e0e0e0',
      borderWidth: 1,
      padding: 10,
      boxPadding: 4,
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#666',
      }
    },
    y: {
      grid: {
        color: '#f0f0f0',
      },
      ticks: {
        color: '#666',
        callback: (value) => value + 'K',
      },
      border: {
        dash: [4, 4],
      }
    }
  },
  interaction: {
    intersect: false,
    mode: 'index',
  }
};

const roiBarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#222",
        font: { size: 16, weight: "bold" },
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#222", font: { size: 16 } },
    },
    y: {
      grid: { color: "#eaeaea" },
      ticks: { color: "#222", font: { size: 16 } },
      beginAtZero: true,
    },
  },
};

const Analytics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: theme.palette.mode === 'dark' ? 'primary.main' : "#155492" }}>
        Analytics Overview
      </Typography>

      <Grid container spacing={3}>
        {/* ROI Comparison Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              ROI: Investment vs Saving
            </Typography>
            <Box sx={{ height: isMobile ? "300px" : "400px" }}>
              <Bar data={roiBarData} options={roiBarOptions} />
            </Box>
          </Paper>
        </Grid>

        {/* Balance History Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Balance History
            </Typography>
            <Box sx={{ height: isMobile ? "300px" : "400px" }}>
              <Line data={balanceHistoryData} options={chartOptions} />
            </Box>
          </Paper>
        </Grid>

        {/* Investment Distribution  */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Investment Distribution
            </Typography>
            <Box 
              sx={{ 
                height: isMobile ? "300px" : "400px", 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box sx={{ width: '100%', maxWidth: '600px' }}>
                <PieChart />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
