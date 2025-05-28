import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  IconButton,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
}));

const Header = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
}));

const MessageArea = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2.5),
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[400],
    borderRadius: '4px',
  },
}));

const Message = styled(Paper)(({ theme, variant }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.shape.borderRadius * 1.5,
  ...(variant === 'user' && {
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderBottomRightRadius: theme.shape.borderRadius / 2,
  }),
  ...(variant === 'ai' && {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
    color: theme.palette.text.primary,
    borderBottomLeftRadius: theme.shape.borderRadius / 2,
  }),
}));

const InputArea = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: '48px',
    padding: theme.spacing(0, 2),
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.background.paper,
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
    },
    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[400],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: 0,
    lineHeight: '48px',
    color: theme.palette.text.primary,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },
}));

const SendButton = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: theme.shape.borderRadius * 1.5,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300],
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[500],
  },
}));

const HistoryPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(2.5),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    display: 'none', 
  },
}));

const HistoryItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[50],
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[100],
    transform: 'translateY(-1px)',
  },
}));

const ChatBot = () => {
  const theme = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history] = useState([
    { id: 1, title: ' sales', description: 'How can I increase my sales?' },
    { id: 2, title: 'investors', description: 'How can I get new investors for my project?' },
    { id: 3, title: 'Career', description: 'How to organize your working day effectively?' },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setIsLoading(true);
      // Here you would typically call your backend API
      //simulate a response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "This is a sample AI response. backend team will implement the actual AI response here.", 
          sender: 'ai' 
        }]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Container 
      maxWidth="xl" 
      disableGutters
      sx={{ 
        height: '100vh',
        display: 'flex',
        gap: 2.5,
        p: 2.5,
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
      }}
    >
      <StyledPaper elevation={3} sx={{ flex: 1 }}>
        <Header>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Investa AI Chat
          </Typography>
        </Header>
        
        <MessageArea>
          {messages.map((message, index) => (
            <Message 
              key={index} 
              variant={message.sender}
              elevation={0}
            >
              <Typography variant="body1">
                {message.text}
              </Typography>
            </Message>
          ))}
        </MessageArea>
        
        <InputArea>
          <StyledTextField
            fullWidth
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
          />
          <SendButton
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            aria-label="Send message"
          >
            <SendIcon />
          </SendButton>
        </InputArea>
      </StyledPaper>

      <HistoryPaper elevation={3}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          History
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {history.map((item) => (
            <HistoryItem key={item.id} elevation={0}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </HistoryItem>
          ))}
        </Box>
      </HistoryPaper>
    </Container>
  );
};

export default ChatBot;
  