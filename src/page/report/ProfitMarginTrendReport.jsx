import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./data1";
const ProfitMarginTrendReport = () => {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
        Profit Margin Trend Report
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Here is your Profit Margin Trend report...
        </Typography>
  
        <Box sx={{ maxHeight: 500, mx: "auto" }}>
          <DataGrid
            autoHeight
            slots={{ toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
          />
        </Box>
      </Box>
    );
  };
  
  export default ProfitMarginTrendReport; 
  