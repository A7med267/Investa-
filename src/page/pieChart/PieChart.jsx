import React from "react";
import { Box, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { rows } from "../MyInvestment/data";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const totalInvestment = rows.reduce((sum, row) => sum + row.totalInvestment, 0);

const donutData = {
  labels: rows.map(row => `${row.investorName} (${((row.totalInvestment / totalInvestment) * 100).toFixed(1)}%)`),
  datasets: [
    {
      data: rows.map(row => row.totalInvestment),
      backgroundColor: [
        "rgba(196, 148, 233, 1)",
        "rgba(37, 65, 149, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
          size: 13,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const value = context.raw;
          const percentage = ((value / totalInvestment) * 100).toFixed(1);
          return `${context.label}: ${value}$ (${percentage}%)`;
        }
      }
    },
  },
};

const PieChart = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: "350px", width: "100%" }}>
        <Doughnut 
          data={donutData} 
          options={{
            ...chartOptions,
            cutout: "50%",
          }} 
        />
      </Box>
    </Box>
  );
};

export default PieChart;
