import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ChatContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  height: '500px',
  margin: '0 auto',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: theme.shadows[5],
}));

const MessageList = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '10px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.grey[400],
    borderRadius: '4px',
  },
}));

const Message = styled(Box)(({ isUser }) => ({
  maxWidth: '75%',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '12px',
  backgroundColor: isUser ? '#dcf8c6' : '#fff',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}));

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, isUser: true }]);
      
      // Our response
      setTimeout(() => {
        setMessages([...messages, { text: input, isUser: true }, { text: 'Thank you for your complaint. Our team will review it and get back to you.', isUser: false }]);
        setInput('');
      }, 1000);
    }
  };

  return (
    <ChatContainer className="bg-gray-50">
      <Box className="p-4 border-b bg-green-100">
        <Typography variant="h6" component="h1" color="primary">
          Illegal Construction Chatbot
        </Typography>
      </Box>
      <MessageList>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </MessageList>
      <Box className="p-4 border-t flex">
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your complaint here..."
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          className="ml-2"
        >
          Send
        </Button>
      </Box>
    </ChatContainer>
  );
};

export default Chatbot;
