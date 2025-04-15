import { Box, Container, Typography, Paper, TextField } from '@mui/material';
import StyleControls from '../components/StyleControls';
import ComparisonView from '../components/ComparisonView';
import { useState } from 'react';

const HumanizationPage = () => {
  const [inputText, setInputText] = useState('');
  const [writingSamples, setWritingSamples] = useState(['']);
  const [styleSettings, setStyleSettings] = useState({
    formality: 50,
    creativity: 50,
    conciseness: 50
  });
  const [outputs, setOutputs] = useState({
    original: '',
    default: '',
    personalized: ''
  });

  const handleTextSubmit = async () => {
    // TODO: Implement API call for text processing
    setOutputs({
      original: inputText,
      default: 'Default humanized version will appear here',
      personalized: 'Personalized version based on your writing samples will appear here'
    });
  };

  const handleStyleChange = (setting, value) => {
    setStyleSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSampleChange = (index, value) => {
    const newSamples = [...writingSamples];
    newSamples[index] = value;
    if (index === writingSamples.length - 1 && value.trim() !== '') {
      newSamples.push('');
    }
    setWritingSamples(newSamples);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          AI Text Humanizer
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Enter Text to Humanize
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter the text you want to humanize..."
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Your Writing Samples
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Add samples of your writing to personalize the output
          </Typography>
          {writingSamples.map((sample, index) => (
            <TextField
              key={index}
              fullWidth
              multiline
              rows={3}
              value={sample}
              onChange={(e) => handleSampleChange(index, e.target.value)}
              placeholder={`Writing sample ${index + 1}`}
              variant="outlined"
              sx={{ mb: 2 }}
            />
          ))}
        </Paper>

        <StyleControls 
          settings={styleSettings}
          onChange={handleStyleChange}
        />
        
        <Box sx={{ mt: 3, mb: 2 }}>
          <button
            onClick={handleTextSubmit}
            style={{
              padding: '12px 24px',
              fontSize: '1.1rem',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Humanize Text
          </button>
        </Box>

        <ComparisonView outputs={outputs} />
      </Box>
    </Container>
  );
};

export default HumanizationPage;