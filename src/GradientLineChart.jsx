import { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Line } from "react-chartjs-2";
import { Card, CardContent, Typography, Box, CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GradientLineChart = ({ title, description, chart, link }) => {
  const chartRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chart || !chart.datasets || !chart.labels) {
      setError("Invalid chart data provided");
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      if (chartRef.current && chartRef.current.chartInstance) {
        const chartInstance = chartRef.current.chartInstance;
        const ctx = chartInstance.canvas.getContext("2d");

        if (chartInstance.data && chartInstance.data.datasets.length > 0) {
          // First line gradient
          const gradient1 = ctx.createLinearGradient(0, 0, 0, 300);
          const color1 = chartInstance.data.datasets[0]?.borderColor || "rgba(105, 169, 244, 1)";
          gradient1.addColorStop(0, color1);
          gradient1.addColorStop(1, color1.replace("1)", "0.2)"));

          // Second line gradient
          const gradient2 = ctx.createLinearGradient(0, 0, 0, 300);
          const color2 = chartInstance.data.datasets[1]?.borderColor || "rgba(0, 31, 63, 1)";
          gradient2.addColorStop(0, color2);
          gradient2.addColorStop(1, color2.replace("1)", "0.2)"));

          // Safely update line colors
          if (chartInstance.data.datasets[0]) {
            chartInstance.data.datasets[0].borderColor = gradient1;
            chartInstance.data.datasets[0].backgroundColor = gradient1;
          }
          if (chartInstance.data.datasets[1]) {
            chartInstance.data.datasets[1].borderColor = gradient2;
            chartInstance.data.datasets[1].backgroundColor = gradient2;
          }

          chartInstance.update();
        }
      }
    } catch (err) {
      setError("Failed to render chart");
      console.error("Chart error:", err);
    } finally {
      setIsLoading(false);
    }
  }, [chart]);

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  const data = {
    labels: chart.labels,
    datasets: chart.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.borderColor || (index === 0 ? "rgba(105, 169, 244, 1)" : "rgba(0, 31, 63, 1)"),
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 4,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 5,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart',
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
          padding: 20,
          font: {
            size: 12,
          },
          generateLabels: (chart) => {
            return chart.data.datasets.map((dataset, i) => ({
              text: dataset.label,
              fillStyle: dataset.borderColor,
              strokeStyle: dataset.borderColor,
              hidden: !chart.isDatasetVisible(i),
              lineWidth: 1,
            }));
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        cornerRadius: 4,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: {
            size: 12,
          },
          padding: 10,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          padding: 10,
        },
      },
    },
  };

  return (
    <Card 
      sx={{ 
        width: "100%", 
        maxWidth: 700, 
        p: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>

        <Box sx={{ position: "relative", height: 300 }}>
          {isLoading ? (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Line ref={chartRef} data={data} options={options} />
          )}
        </Box>

        {link && (
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                View Details →
              </Typography>
            </Link>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

GradientLineChart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  chart: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        borderColor: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  link: PropTypes.string,
};

export default GradientLineChart;
