import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CircularProgress, Chip } from '@mui/material';
import assetsService from '../api/assetsService';

const AssetsPage = () => {
  const [loading, setLoading] = useState(true);
  const [assets, setAssets] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch assets
    const fetchAssets = async () => {
      try {
        const response = await assetsService.getAssets();
        setAssets(response || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching assets:', error);
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  // Filter types
  const filterTypes = [
    { id: 'all', label: 'All' },
    { id: 'sales', label: 'Sales' },
    { id: 'email', label: 'Email' },
    { id: 'video', label: 'Video Script' },
    { id: 'design', label: 'Design Studio' }
  ];

  // Sample assets for demonstration
  const sampleAssets = [
    {
      id: 1,
      title: 'Ugly VSL (Video Sales Letter)',
      type: 'sales',
      subtype: 'Video Script',
      progress: 0
    },
    {
      id: 2,
      title: 'Ninja Nurture Sequence',
      type: 'email',
      subtype: 'Email',
      progress: 0
    },
    {
      id: 3,
      title: 'Fasting out 10 kg Course',
      type: 'course',
      subtype: 'Course',
      progress: 0
    },
    {
      id: 4,
      title: 'One Page Map',
      type: 'sales',
      subtype: 'Sales',
      progress: 0
    }
  ];

  // Filter assets based on selected filter
  const filteredAssets = filter === 'all' 
    ? sampleAssets 
    : sampleAssets.filter(asset => asset.type === filter);

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
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="outlined" 
            sx={{ 
              textTransform: 'none',
              borderRadius: 1
            }}
          >
            Filter by Type:
          </Button>
          
          {filterTypes.map(type => (
            <Button 
              key={type.id}
              variant="contained" 
              sx={{ 
                bgcolor: filter === type.id ? '#1E1E1E' : '#f5f5f5',
                color: filter === type.id ? 'white' : 'black',
                '&:hover': {
                  bgcolor: filter === type.id ? '#2E2E2E' : '#e0e0e0',
                },
                textTransform: 'none',
                borderRadius: 1
              }}
              onClick={() => setFilter(type.id)}
            >
              {type.label}
            </Button>
          ))}
        </Box>
      </Box>
      
      {/* Assets Grid */}
      <Grid container spacing={3}>
        {filteredAssets.length > 0 ? (
          filteredAssets.map(asset => (
            <Grid item xs={12} md={6} key={asset.id}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ mr: 2 }}>
                        {/* Placeholder icon based on asset type */}
                        <Box 
                          sx={{ 
                            width: 40, 
                            height: 40, 
                            bgcolor: '#e0e0e0', 
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {asset.type.charAt(0).toUpperCase()}
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="h6">{asset.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {asset.subtype}
                        </Typography>
                      </Box>
                    </Box>
                    <Button size="small">•••</Button>
                  </Box>
                  
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
                        width: `${asset.progress}%`,
                        bgcolor: '#10B981',
                        borderRadius: 4
                      }} />
                    </Box>
                  </Box>
                  <Typography variant="body2" align="right">
                    {asset.progress}%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ 
              height: 200, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              bgcolor: '#f5f5f5',
              borderRadius: 2,
              width: '100%'
            }}>
              <Typography variant="body1" color="text.secondary">
                No assets found. Try changing the filter or create a new asset.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AssetsPage;
