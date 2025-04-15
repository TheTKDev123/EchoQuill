import { Box, Slider, Typography, Paper } from '@mui/material';

const StyleControls = ({ settings, onChange }) => {
  const controls = [
    { name: 'formality', label: 'Formality' },
    { name: 'creativity', label: 'Creativity' },
    { name: 'conciseness', label: 'Conciseness' }
  ];

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Style Adjustments
      </Typography>
      <Box sx={{ width: '100%', px: 2 }}>
        {controls.map(({ name, label }) => (
          <Box key={name} sx={{ my: 3 }}>
            <Typography gutterBottom>{label}</Typography>
            <Slider
              value={settings[name]}
              onChange={(_, value) => onChange(name, value)}
              aria-label={label}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={100}
            />
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default StyleControls;