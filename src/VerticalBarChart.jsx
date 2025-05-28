import { useRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const VerticalBarChart = ({ chart }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
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

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: chart.labels,
          datasets: chart.datasets.map((dataset) => ({
            label: dataset.label,
            backgroundColor: dataset.backgroundColor || "rgba(0, 31, 63, 0.8)",
            borderColor: dataset.backgroundColor || "rgba(0, 31, 63, 1)",
            borderWidth: 1,
            data: dataset.data,
            borderRadius: 4,
            hoverBackgroundColor: dataset.backgroundColor || "rgba(0, 31, 63, 1)",
            hoverBorderColor: dataset.backgroundColor || "rgba(0, 31, 63, 1)",
            hoverBorderWidth: 2,
          })),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 1000,
            easing: 'easeInOutQuart',
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
                drawBorder: false,
              },
              ticks: {
                font: {
                  size: 12,
                },
                padding: 10,
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                },
                padding: 10,
              },
            },
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                padding: 20,
                font: {
                  size: 12,
                },
                usePointStyle: true,
              },
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              titleFont: {
                size: 14,
                weight: 'bold',
              },
              bodyFont: {
                size: 13,
              },
              cornerRadius: 4,
              displayColors: true,
            },
          },
        },
      });
    } catch (err) {
      setError("Failed to render chart");
      console.error("Chart error:", err);
    } finally {
      setIsLoading(false);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chart]);

  if (error) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "auto",
        maxWidth: 700,
        height: { xs: "50vh", md: "70vh" },
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "16px",
        padding: "24px",
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) => theme.palette.text.primary,
        overflow: "hidden",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box sx={{ mb: 3 }}>
          {chart.title && (
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold",
                mb: 1,
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {chart.title}
            </Typography>
          )}
          {chart.link && (
            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.primary.main,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.2s ease-in-out",
                "&:hover": {
                  color: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              <Link 
                to={chart.link} 
                style={{ 
                  color: "inherit", 
                  textDecoration: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Show report
              </Link>
            </Typography>
          )}
        </Box>
        {chart.description && (
          <Typography 
            variant="body2" 
            color="textSecondary" 
            sx={{ 
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            {chart.description}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100vh",
          minHeight: "300px",
          maxHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {isLoading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <canvas
          ref={chartRef}
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          aria-label={chart.title || "Bar chart"}
        />
      </Box>
    </Box>
  );
};

VerticalBarChart.propTypes = {
  chart: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number).isRequired,
        backgroundColor: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default VerticalBarChart;
