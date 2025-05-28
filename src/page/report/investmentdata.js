export const columns = [
  { field: "month", headerName: "Month", flex: 1 },
  { field: "totalInvestmentValue", headerName: "Total Investment Value ($)", flex: 1 },
  { field: "profitLoss", headerName: "Profit/Loss ($)", flex: 1 },
  { field: "growthRate", headerName: "Growth Rate (%)", flex: 1 },
  { field: "roi", headerName: "ROI (%)", flex: 1 },
  { field: "cumulativeProfitLoss", headerName: "Cumulative Profit/Loss ($)", flex: 1 },
];

export const rows = [
  { id: 1, month: "April", totalInvestmentValue: 50000, profitLoss: 1000, growthRate: 2, roi: 5, cumulativeProfitLoss: 1000 },
  { id: 2, month: "May", totalInvestmentValue: 60000, profitLoss: 1500, growthRate: 2.5, roi: 5.5, cumulativeProfitLoss: 2500 },
  { id: 3, month: "June", totalInvestmentValue: 75000, profitLoss: 3000, growthRate: 4, roi: 6, cumulativeProfitLoss: 5500 },
  { id: 4, month: "July", totalInvestmentValue: 90000, profitLoss: 4000, growthRate: 3.5, roi: 6.5, cumulativeProfitLoss: 9500 },
  { id: 5, month: "August", totalInvestmentValue: 120000, profitLoss: 5000, growthRate: 4.2, roi: 7, cumulativeProfitLoss: 14500 },
  { id: 6, month: "September", totalInvestmentValue: 110000, profitLoss: -2000, growthRate: -1.8, roi: 5.8, cumulativeProfitLoss: 12500 },
];
