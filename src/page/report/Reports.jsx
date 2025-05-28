import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Tabs,
  Tab,
} from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FinancialReports from './components/FinancialReports';
import InvestmentReports from './components/InvestmentReports';
import TransactionReports from './components/TransactionReports';

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reports Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Access comprehensive reports and analytics for your investments
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {/* Report Categories */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ mb: 3 }}
              >
                <Tab 
                  icon={<AccountBalanceIcon />} 
                  label="Financial Reports" 
                  iconPosition="start"
                />
                <Tab 
                  icon={<TrendingUpIcon />} 
                  label="Investment Reports" 
                  iconPosition="start"
                />
                <Tab 
                  icon={<ReceiptLongIcon />} 
                  label="Transaction Reports" 
                  iconPosition="start"
                />
              </Tabs>

              <Box sx={{ mt: 2 }}>
                {activeTab === 0 && <FinancialReports />}
                {activeTab === 1 && <InvestmentReports />}
                {activeTab === 2 && <TransactionReports />}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports; 