export const columns = [
  { field: "investorName", headerName: "Investor", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "totalInvestment", headerName: "Total Investment ($)", flex: 1 },
  { field: "returns", headerName: "Returns ($)", flex: 1 },
  { field: "Investment Type", headerName: "Investment Type", flex: 1 },
  { field: "Reinsurance", headerName: "Reinsurance", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
];

export const rows = [
  { 
    id: 1, 
    investorName: "Zero sugar by ketonista", 
    email: "zerosugar@example.com", 
    totalInvestment: 50000, 
    returns: 15000, 
    status: "Active" 
  },
  { 
    id: 2, 
    investorName: "Fakhr", 
    email: "fakhr@example.com", 
    totalInvestment: 45000, 
    returns: 12000, 
    status: "Active" 
  },
];

// Mock details for each project
export const projectDetails = {
  "Zero sugar by ketonista": {
    category: "Food & Beverage",
    type: "Long term",
    start: "1-1-2025",
    end: "1-1-2025",
    amount: "65,000 L.E",
    roi: "84%",
    expectedROI: "84%",
    reinsurance: "20%",
    totalReturn: "117,000 L.E",
    success: "93%",
    progress: [
      { label: "Current ROI Rate", value: "26%" },
      { label: "Current ROI", value: "16,900 L.E" },
      { label: "ROI Quarter 1", value: "8,450 L.E" },
      { label: "ROI Quarter 2", value: "8,450 L.E" },
    ],
  },
  "Fakhr": {
    category: "Retail",
    type: "Short term",
    start: "3-3-2023",
    end: "3-3-2024",
    amount: "72,000 L.E",
    roi: "72%",
    expectedROI: "72%",
    reinsurance: "15%",
    totalReturn: "90,000 L.E",
    success: "88%",
    progress: [
      { label: "Current ROI Rate", value: "22%" },
      { label: "Current ROI", value: "15,800 L.E" },
      { label: "ROI Quarter 1", value: "7,900 L.E" },
      { label: "ROI Quarter 2", value: "7,900 L.E" },
    ],
  },
};
