import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MessageIcon from "@mui/icons-material/Message";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const PRIMARY_COLOR = "#001F3F";

const activities = [
  {
    date: "2025-04-20",
    time: "10:15 AM",
    title: "Funding Received",
    description:
      "An amount of $10,000 has been transferred by investor Sarah Fouad.",
    by: "Investor: Sarah Fouad",
    note: "Transfer Method: Bank Transfer",
    type: "funding",
  },
  {
    date: "2025-04-20",
    time: "1:00 PM",
    title: "Payment Confirmed",
    description: "The first payment has been confirmed successfully.",
    by: "Project Manager",
    note: "Installment 1 | Confirmed",
    type: "approval",
  },
  {
    date: "2025-04-19",
    time: "11:30 AM",
    title: "Message Received",
    description: "Investor Ahmed sent a message regarding budget updates.",
    by: "From: Ahmed",
    note: "Check inbox",
    type: "message",
  },
  {
    date: "2025-04-19",
    time: "3:45 PM",
    title: "Project Approved",
    description: "Your project 'GreenBuild' was approved by the platform admin.",
    by: "Admin Approval",
    note: "Status: Approved",
    type: "approval",
  },
];

const getIcon = (type) => {
  switch (type) {
    case "funding":
      return <AttachMoneyIcon />;
    case "message":
      return <MessageIcon />;
    case "approval":
      return <DoneAllIcon />;
    default:
      return <AccessTimeIcon />;
  }
};

const RecentActivitiesTimeline = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const filteredActivities = activities.filter((activity) => {
    if (!selectedDate) return true;
    return dayjs(activity.date).isSame(selectedDate, "day");
  });

  return (
    <Box
      sx={{
        maxWidth: 1000,
        margin: "auto",
        mt: 6,
        backgroundColor: "#fff",
        borderRadius: 4,
        boxShadow: 3,
        padding: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        mb={3}
        color={PRIMARY_COLOR}
      >
        Recent Activities
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Filter by Date"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          slotProps={{
            textField: {
              fullWidth: true,
              sx: {
                mb: 4,
                borderRadius: 2,
                backgroundColor: "#fff",
              },
            },
          }}
        />
      </LocalizationProvider>

      <Timeline position="alternate">
        {filteredActivities.map((activity, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                flex: 0.2,
                textAlign: index % 2 === 0 ? "right" : "left",
                color: "text.secondary",
                fontSize: 14,
              }}
            >
              {dayjs(activity.date).format("MMMM D, YYYY")} <br />
              {activity.time}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: PRIMARY_COLOR, color: "#fff" }}>
                {getIcon(activity.type)}
              </TimelineDot>
              {index !== filteredActivities.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: 2 }}>
              <Card
                sx={{
                  backgroundColor: "#F5F7FA",
                  borderRadius: 3,
                  boxShadow: 2,
                  px: 2,
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold" color={PRIMARY_COLOR}>
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {activity.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="caption" display="block" color="text.secondary">
                    {activity.by}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {activity.note}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default RecentActivitiesTimeline;
