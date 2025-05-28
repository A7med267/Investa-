import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "What is Investa?",
    answer: "Investa is a platform that connects investors with promising business opportunities, allowing you to invest in various projects and track your investments."
  },
  {
    question: "How do I start investing?",
    answer: "To start investing, you need to create an account, complete your profile, and then browse available investment opportunities. You can invest in projects that match your investment criteria."
  },
  {
    question: "What are the minimum investment amounts?",
    answer: "Minimum investment amounts vary by project. Each investment opportunity will clearly state its minimum investment requirement."
  },
  {
    question: "How do I track my investments?",
    answer: "You can track your investments through the dashboard, which shows your portfolio performance, returns, and investment history."
  },
  {
    question: "What are the fees?",
    answer: "We charge a small percentage fee on successful investments. The exact fee structure is transparently displayed before you make any investment."
  }
];

const FAQ = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ; 