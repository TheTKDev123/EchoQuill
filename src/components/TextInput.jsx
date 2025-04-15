import { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

const TextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [writingSample, setWritingSample] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Text Humanizer
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ '& > *': { mb: 2 } }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Paste AI-generated text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Optional: Paste your writing sample for personalized style"
          value={writingSample}
          onChange={(e) => setWritingSample(e.target.value)}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!text}
        >
          Humanize Text
        </Button>
      </Box>
    </Paper>
  );
};

export default TextInput;