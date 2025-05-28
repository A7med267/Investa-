export const columns = [
  {
    field: "Month",
    headerName: "Month",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "TotalRevenue", 
    headerName: "Total Revenue ($)",
    flex: 1,
  },
  {
    field: "Expenses", 
    headerName: "Expenses ($)",
    flex: 1,
  },
  {
    field: "NetProfit", 
    headerName: "Net Profit ($)",
    flex: 1,
  },
  {
    field: "Profit", 
    headerName: "Profit ($)",
    flex: 1,
  },
  {
    field: "ProfitMargin",
    headerName: "Profit Margin (%)",
    flex: 1,
  },
];

export const rows = [
  {
    id: 1,
    Month: "Apr",
    TotalRevenue: 600, 
    Expenses: 3500, 
    NetProfit: 545, 
    Profit: 1500,
    ProfitMargin: "38.9%", 
  },
];
