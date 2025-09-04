import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import assetsService from '../api/assetsService';

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    campaignPlanner: { progress: 100 },
    productRoadmap: { progress: 100 },
    designStudio: { progress: 20 }
  });

  useEffect(() => {
    // Simulate loading dashboard data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Setup
      </Typography>
      
      {/* AI Assistant Card */}
      <Card sx={{ mb: 4, bgcolor: '#4F46E5', color: 'white', borderRadius: 2 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
          <Box sx={{ mr: 2 }}>
            <img 
              src="https://via.placeholder.com/50" 
              alt="AI Assistant" 
              style={{ borderRadius: '50%' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6">
              Generate Campaign with AI Assistant
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: 'white', 
              color: '#4F46E5',
              '&:hover': {
                bgcolor: '#f5f5f5',
              }
            }}
          >
            GENERATE
          </Button>
        </CardContent>
      </Card>
      
      {/* Main Features Grid */}
      <Grid container spacing={3}>
        {/* Campaign Planner */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Campaign Planner
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Your entire campaign strategy, goals and messaging that will attract the perfect customer to your product and services.
              </Typography>
              <Box sx={{ mt: 2, mb: 1 }}>
                <Box sx={{ 
                  height: 8, 
                  borderRadius: 4, 
                  bgcolor: '#e0e0e0',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${dashboardData.campaignPlanner.progress}%`,
                    bgcolor: '#10B981',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              <Typography variant="body2" align="right">
                {dashboardData.campaignPlanner.progress}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Product Roadmap */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Product Roadmap
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A unique mechanism that will give your audience absolute clarity and confidence in your offer and their results!
              </Typography>
              <Box sx={{ mt: 2, mb: 1 }}>
                <Box sx={{ 
                  height: 8, 
                  borderRadius: 4, 
                  bgcolor: '#e0e0e0',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${dashboardData.productRoadmap.progress}%`,
                    bgcolor: '#10B981',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              <Typography variant="body2" align="right">
                {dashboardData.productRoadmap.progress}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Design Studio */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                Design Studio
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Key visuals that 10X your prospects' confidence in your brand and product by showing them a clear visual path to success!
              </Typography>
              <Box sx={{ mt: 2, mb: 1 }}>
                <Box sx={{ 
                  height: 8, 
                  borderRadius: 4, 
                  bgcolor: '#e0e0e0',
                  position: 'relative'
                }}>
                  <Box sx={{ 
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${dashboardData.designStudio.progress}%`,
                    bgcolor: '#10B981',
                    borderRadius: 4
                  }} />
                </Box>
              </Box>
              <Typography variant="body2" align="right">
                {dashboardData.designStudio.progress}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Assets Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Assets
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.location.href = '/app/assets/create'}
            sx={{ 
              textTransform: 'none',
              borderRadius: 1
            }}
          >
            Create an Asset
          </Button>
          
          <Box>
            <Button 
              variant="outlined" 
              sx={{ 
                mr: 1,
                textTransform: 'none',
                borderRadius: 1
              }}
            >
              Filter by Type:
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: '#1E1E1E',
                '&:hover': {
                  bgcolor: '#2E2E2E',
                },
                textTransform: 'none',
                borderRadius: 1
              }}
            >
              ALL
            </Button>
          </Box>
        </Box>
        
        {/* Empty state or would show assets here */}
        <Box sx={{ 
          height: 200, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          bgcolor: '#f5f5f5',
          borderRadius: 2
        }}>
          <Typography variant="body1" color="text.secondary">
            No assets created yet. Click "Create an Asset" to get started.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
