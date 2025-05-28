export const columns = [
    {
        field: "month",
        headerName: "Month",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "portfolioValue",
        headerName: "Portfolio Value ($)",
        flex: 1,
    },
    {
        field: "marketIndex",
        headerName: "Market Index ($)",
        flex: 1,
    },
    {
        field: "difference",
        headerName: "Difference ($)",
        flex: 1,
    },
    {
        field: "growth",
        headerName: "Growth (%)",
        flex: 1,
    },
    {
        field: "cumulativePL",
        headerName: "Cumulative P/L ($)",
        flex: 1,
    },
];

export const rows = [
    {
        id: 1,
        month: "Apr",
        portfolioValue: 600,
        marketIndex: 30,
        difference: 150,
        growth: "60%",
        cumulativePL: -140,
    },
    {
        id: 2,
        month: "May",
        portfolioValue: 700,
        marketIndex: 50,
        difference: 200,
        growth: "16.7%",
        cumulativePL: -90,
    },
    {
        id: 3,
        month: "Jun",
        portfolioValue: 750,
        marketIndex: 80,
        difference: 230,
        growth: "7.1%",
        cumulativePL: -60,
    },
];
