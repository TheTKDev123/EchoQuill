import { Paper, Grid, Typography, Box } from '@mui/material';

const ComparisonView = ({ outputs }) => {
  const { original, default: defaultOutput, personalized } = outputs;

  const OutputSection = ({ title, content }) => (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          height: 'calc(100% - 40px)',
          bgcolor: 'grey.50',
          overflowY: 'auto'
        }}
      >
        <Typography variant="body1">
          {content || 'Output will appear here'}
        </Typography>
      </Paper>
    </Box>
  );

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Text Comparison
      </Typography>
      <Grid container spacing={3} sx={{ minHeight: '300px' }}>
        <Grid item xs={12} md={4}>
          <OutputSection title="Original Text" content={original} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OutputSection title="Default Humanized" content={defaultOutput} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OutputSection title="Personalized Style" content={personalized} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ComparisonView;