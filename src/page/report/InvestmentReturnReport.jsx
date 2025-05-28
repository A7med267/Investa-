import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./investmentdata";

const InvestmentReturnReport = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* العنوان الرئيسي */}
      <Typography variant="h4" gutterBottom>
        Investment Report
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here is your investment report...
      </Typography>

      {/* جدول البيانات */}
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

export default InvestmentReturnReport;
