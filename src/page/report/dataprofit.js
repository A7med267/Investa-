export const columns = [
    {
      field: "month",
      headerName: "Month",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "revenue", 
      headerName: "Revenue",
      flex: 1,
    },
    {
      field: "profitLoss", 
      headerName: "Profit/Loss",
      flex: 1,
    },
    {
      field: "profitMargin", 
      headerName: "Profit Margin (%)",
      flex: 1,
    },
    {
      field: "changeFromPreviousMonth", 
      headerName: "Change from Previous Month",
      flex: 1,
    },
];

export const rows = [
    {
      id: 1,
      month: "Apr",
      revenue: 600, 
      profitLoss: 30, 
      profitMargin: "16.7%",
      changeFromPreviousMonth: "+50% ",
    },
];
