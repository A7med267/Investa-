export const columns = [
    {
        field: "month",
        headerName: "Month",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "totalRevenue",
        headerName: "Total Revenue ($)",
        flex: 1,
    },
    {
        field: "expenses",
        headerName: "Expenses ($)",
        flex: 1,
    },
    {
        field: "netProfit",
        headerName: "Net Profit ($)",
        flex: 1,
    },
    {
        field: "revenueGrowth",
        headerName: "Revenue Growth (%)",
        flex: 1,
    },
    {
        field: "expenseGrowth",
        headerName: "Expense Growth (%)",
        flex: 1,
    },
];

export const rows = [
    {
        id: 1,
        month: "Apr",
        totalRevenue: 600,
        expenses: 300,
        netProfit: 300,
        revenueGrowth: "60%",
        expenseGrowth: "20%",
    },
];
