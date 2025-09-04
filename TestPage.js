import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const navigate = useNavigate();

  const testAuthFlow = () => {
    navigate('/auth/login');
  };

  const testAssetsListing = () => {
    navigate('/app/assets');
  };

  const testAssetCreation = () => {
    navigate('/app/assets/create');
  };

  const testDashboard = () => {
    navigate('/app/dashboard/84778');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pluux Clone Test Page
        </Typography>
        <Typography variant="body1" paragraph>
          This page allows you to test different parts of the application.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Authentication Flow
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={testAuthFlow}
            sx={{ mr: 2, mb: 2 }}
          >
            Test Login/Register
          </Button>
          <Typography variant="body2" color="text.secondary" paragraph>
            Test credentials: alin@eduforyou.co.uk / Performance2025@
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Dashboard
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={testDashboard}
            sx={{ mr: 2, mb: 2 }}
          >
            Test Dashboard
          </Button>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Assets Management
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={testAssetsListing}
            sx={{ mr: 2, mb: 2 }}
          >
            Test Assets Listing
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={testAssetCreation}
            sx={{ mr: 2, mb: 2 }}
          >
            Test Asset Creation
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TestPage;
