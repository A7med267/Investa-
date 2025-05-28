import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { columns, rows } from "./dataPortfolio";

const PortfolioPerformanceReport = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* العنوان الرئيسي */}
      <Typography variant="h4" gutterBottom>
      Portfolio Performance
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Here is your Portfolio Performance report...
      </Typography>

      {/* جدول البيانات */}
      <Box sx={{ maxHeight: 500, mx: "auto" }}>
        <DataGrid
          autoHeight // ✅ يخلي الجدول ياخذ الارتفاع المناسب
          slots={{ toolbar: GridToolbar }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box> // ✅ إغلاق الـ Box

  );
};

export default PortfolioPerformanceReport; 
