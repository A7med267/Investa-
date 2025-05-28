// Line Chart Data
export const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Investment Value (L.E)",
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      data: [100000, 110000, 125000, 137000, 150000, 165000],
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
    {
      label: "Net Profit (L.E)",
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      data: [25000, 50000, 75000, 88900, 95000, 110000],
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
  ],
};

// Bar Chart Data
export const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly Profit (L.E)",
      data: [25000, 25000, 25000, 38900, 6100, 15000],
      backgroundColor: "rgba(37, 65, 149, 1)",
      borderColor: "rgba(37, 65, 149, 1)",
      borderWidth: 1,
    },
  ],
};

// Pie Chart Data
export const pieChartData = {
  labels: ["Zero Sugar", "Fakhr", "Other Investments"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: [
        "rgba(37, 65, 149, 0.8)",
        "rgba(40, 167, 69, 0.8)",
        "rgba(255, 193, 7, 0.8)",
      ],
      borderColor: [
        "rgba(37, 65, 149, 1)",
        "rgba(40, 167, 69, 1)",
        "rgba(255, 193, 7, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Chart Options
export const chartOptions = {
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
      mode: "index",
      intersect: false,
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'EGP'
            }).format(context.parsed.y);
          }
          return label;
        }
      }
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
      ticks: {
        callback: function(value) {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EGP',
            maximumFractionDigits: 0
          }).format(value);
        }
      }
    },
  },
};

// Dashboard Cards Data
export const dashboardCards = [
  { 
    icon: "AttachMoneyIcon", 
    title: "Total Investment", 
    value: "165,000 L.E",
    description: "Since January 1, 2025",
    color: "#254195"
  },
  { 
    icon: "PaymentsIcon", 
    title: "Current Net Profit", 
    value: "110,000 L.E",
    description: "As of June 2025",
    color: "#28a745"
  },
  { 
    icon: "TimelineIcon", 
    title: "Investment Type", 
    value: "Short - Long",
    description: "Portfolio diversity",
    color: "#ffc107"
  },
  { 
    icon: "BusinessIcon", 
    title: "Invested Businesses", 
    value: "Zero Sugar - Fakhr",
    description: "Current investments",
    color: "#dc3545"
  },
]; 