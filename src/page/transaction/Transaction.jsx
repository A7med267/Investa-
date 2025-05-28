import { Box, Paper, Stack, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, Grid, Card, CardContent, Chip, Tabs, Tab, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Transactions } from "./datatran";
import SearchIcon from '@mui/icons-material/Search';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableChartIcon from '@mui/icons-material/TableChart';
import FilterListIcon from '@mui/icons-material/FilterList';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';

const Transaction = () => {
  const theme = useTheme();
  const [viewMode, setViewMode] = useState('table');
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredTransactions = Transactions.filter((activity) => {
    if (!selectedDate) return true;
    return dayjs(activity.Month).isSame(selectedDate, 'month');
  });

  // Calculate quarterly totals
  const quarterlyData = {
    1: {
      Reinsurance: 1800,
      Platform_Fee: 720,
      Net_Investment: 18000,
      Payment_Amount: 20520
    },
    2: {
      Reinsurance: 1800,
      Platform_Fee: 720,
      Net_Investment: 18000,
      Payment_Amount: 20520
    },
    3: {
      Reinsurance: 1800,
      Platform_Fee: 720,
      Net_Investment: 18000,
      Payment_Amount: 20520
    },
    4: {
      Reinsurance: 1800,
      Platform_Fee: 720,
      Net_Investment: 18000,
      Payment_Amount: 20520
    }
  };

  // Calculate annual totals
  const annualTotals = {
    Reinsurance: 7200,
    Platform_Fee: 2880,
    Net_Investment: 72000,
    Payment_Amount: 82080
  };

  const renderTableView = () => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Month</TableCell>
            <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Net Investment</TableCell>
            <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Payment Amount</TableCell>
            <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Platform Fee (4%)</TableCell>
            <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Reinsurance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTransactions.map((transaction, index) => (
            <TableRow 
              key={`${transaction.Month}-${index}`}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(37, 65, 149, 0.04)',
                },
              }}
            >
              <TableCell>{transaction.Month}</TableCell>
              <TableCell>{transaction.Net_Investment}</TableCell>
              <TableCell>{transaction.Payment_Amounnt}</TableCell>
              <TableCell>{transaction.Platform_Fee}</TableCell>
              <TableCell>{transaction.Reinsurance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderGridView = () => (
    <Grid container spacing={2}>
      {filteredTransactions.map((transaction, index) => (
        <Grid item xs={12} sm={6} md={4} key={`${transaction.Month}-${index}`}>
          <Card 
            sx={{ 
              height: '100%',
              '&:hover': {
                boxShadow: 4,
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease-in-out'
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" color="#254195" gutterBottom>
                {transaction.Month}
              </Typography>
              <Stack spacing={1.5}>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Net Investment
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {transaction.Net_Investment}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Payment Amount
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {transaction.Payment_Amounnt}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Platform Fee (4%)
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {transaction.Platform_Fee}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Reinsurance
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {transaction.Reinsurance}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight="bold" style={{ color: 'rgba(0, 31, 63, 1)' }}>
          Recent Transactions
        </Typography>
        <Stack direction="row" spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Filter by Month"
              value={selectedDate}
              onChange={(newDate) => setSelectedDate(newDate)}
              views={['month', 'year']}
              slotProps={{
                textField: {
                  size: "small",
                  sx: {
                    backgroundColor: "#fff",
                  },
                },
              }}
            />
          </LocalizationProvider>
          <IconButton
            onClick={() => setViewMode('table')}
            sx={{
              color: viewMode === 'table' ? '#254195' : 'rgba(0, 0, 0, 0.54)',
              bgcolor: viewMode === 'table' ? 'rgba(37, 65, 149, 0.08)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(37, 65, 149, 0.12)',
              }
            }}
          >
            <TableViewIcon />
          </IconButton>
          <IconButton
            onClick={() => setViewMode('grid')}
            sx={{
              color: viewMode === 'grid' ? '#254195' : 'rgba(0, 0, 0, 0.54)',
              bgcolor: viewMode === 'grid' ? 'rgba(37, 65, 149, 0.08)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(37, 65, 149, 0.12)',
              }
            }}
          >
            <GridViewIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Monthly Transactions */}
      <Card sx={{ mb: 4, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2} color="rgba(0, 31, 63, 1)">
            Recent Transactions
          </Typography>
          {viewMode === 'table' ? renderTableView() : renderGridView()}
        </CardContent>
      </Card>

      {/* Quarterly Summary */}
      <Card sx={{ boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={2} color="rgba(0, 31, 63, 1)">
            Recent Transactions
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Quarter</TableCell>
                  <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Reinsurance</TableCell>
                  <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Platform Fee (4%)</TableCell>
                  <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Net Investment</TableCell>
                  <TableCell sx={{ color: "#254195", fontWeight: "bold" }}>Payment Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(quarterlyData).map(([quarter, data]) => (
                  <TableRow 
                    key={quarter}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(37, 65, 149, 0.04)',
                      },
                    }}
                  >
                    <TableCell>Q{quarter}</TableCell>
                    <TableCell>{data.Reinsurance}</TableCell>
                    <TableCell>{data.Platform_Fee}</TableCell>
                    <TableCell>{data.Net_Investment}</TableCell>
                    <TableCell>{data.Payment_Amount}</TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{
                    backgroundColor: 'rgba(37, 65, 149, 0.08)',
                    fontWeight: 'bold',
                  }}
                >
                  <TableCell sx={{ fontWeight: 'bold' }}>Annual Amount</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{annualTotals.Reinsurance}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{annualTotals.Platform_Fee}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{annualTotals.Net_Investment}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{annualTotals.Payment_Amount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Transaction;
