import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Transform Your Text with AI
        </Typography>
        
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          EchoQuill adapts to your unique writing style to create natural, 
          human-like text that sounds just like you.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/humanize')}
          sx={{
            py: 2,
            px: 6,
            fontSize: '1.2rem',
            textTransform: 'none'
          }}
        >
          Try it Free
        </Button>


      </Box>
    </Container>
  );
};

export default LandingPage;