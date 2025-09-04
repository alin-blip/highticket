import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, CardMedia, CircularProgress, Modal } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import assetsService from '../api/assetsService';

const AssetCreatePage = () => {
  const [loading, setLoading] = useState(true);
  const [templates, setTemplates] = useState([]);
  const [filter, setFilter] = useState('all');
  const [openThemeModal, setOpenThemeModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    // Fetch templates
    const fetchTemplates = async () => {
      try {
        const response = await assetsService.getTemplates();
        setTemplates(response || getSampleTemplates());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching templates:', error);
        setTemplates(getSampleTemplates());
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  // Sample templates for demonstration
  const getSampleTemplates = () => [
    {
      id: 1,
      title: 'Promo Emails Low Ticket',
      description: 'Promo Emails Low Ticket',
      category: 'email',
      thumbnail: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Lead Magnets',
      description: 'Bring in a flood of new leads with TEN powerful PDF downloads based on your Signature Product.',
      category: 'lead-magnet',
      thumbnail: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      title: 'Course Creator',
      description: 'Create an entire course based on your Product Roadmap and Campaign planner!',
      category: 'course',
      thumbnail: 'https://via.placeholder.com/300x200'
    },
    {
      id: 4,
      title: 'One Page Map',
      description: 'Use the power of a one page map to give your customers context and clarity on how to gain success through your program.',
      category: 'sales',
      thumbnail: 'https://via.placeholder.com/300x200'
    },
    {
      id: 5,
      title: 'Authority Amplifier Kit',
      description: 'Create a simple but powerful video that rapidly amplifies trust, authority, and urgency with your audience.',
      category: 'video',
      thumbnail: 'https://via.placeholder.com/300x200'
    }
  ];

  // Sample themes for demonstration
  const themes = [
    {
      id: 1,
      name: 'Light Theme',
      thumbnail: 'https://via.placeholder.com/200x100'
    },
    {
      id: 2,
      name: 'Dark Theme',
      thumbnail: 'https://via.placeholder.com/200x100'
    },
    {
      id: 3,
      name: 'Colorful Theme',
      thumbnail: 'https://via.placeholder.com/200x100'
    },
    {
      id: 4,
      name: 'Minimal Theme',
      thumbnail: 'https://via.placeholder.com/200x100'
    }
  ];

  // Filter types
  const filterTypes = [
    { id: 'all', label: 'All' },
    { id: 'sales', label: 'Sales' },
    { id: 'email', label: 'Email' },
    { id: 'video', label: 'Video Script' },
    { id: 'webinar', label: 'Webinar' },
    { id: 'lead-magnet', label: 'Lead Magnet Builder' },
    { id: 'design', label: 'Design Studio' },
    { id: 'facebook', label: 'Facebook AI Builder' },
    { id: 'launch', label: 'Rocket Launch Pack' }
  ];

  // Filter templates based on selected filter
  const filteredTemplates = filter === 'all' 
    ? templates 
    : templates.filter(template => template.category === filter);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setOpenThemeModal(true);
  };

  const handleThemeSelect = (theme) => {
    // Here you would typically create a new asset with the selected template and theme
    console.log('Selected template:', selectedTemplate);
    console.log('Selected theme:', theme);
    setOpenThemeModal(false);
    
    // Redirect to the asset editor or show success message
    // window.location.href = `/app/assets/edit/${newAssetId}`;
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => window.location.href = '/app/assets'}
          sx={{ mr: 2 }}
        >
          Arrow Back
        </Button>
        <Typography variant="h4" component="h1">
          Choose A Template
        </Typography>
      </Box>
      
      {/* Filter buttons */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
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
      
      {/* Templates Grid */}
      <Grid container spacing={3}>
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(template => (
            <Grid item xs={12} md={4} key={template.id}>
              <Card 
                sx={{ 
                  borderRadius: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
                onClick={() => handleTemplateSelect(template)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={template.thumbnail}
                  alt={template.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {template.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {template.description}
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
                No templates found for this category.
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      
      {/* Theme Selection Modal */}
      <Modal
        open={openThemeModal}
        onClose={() => setOpenThemeModal(false)}
        aria-labelledby="theme-selection-modal"
        aria-describedby="select-a-theme-for-your-asset"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 1000,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: '90vh',
          overflow: 'auto'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" component="h2">
              Select Themes
            </Typography>
            <Button 
              onClick={() => setOpenThemeModal(false)}
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {themes.map(theme => (
              <Grid item xs={12} sm={6} md={3} key={theme.id}>
                <Card 
                  sx={{ 
                    borderRadius: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: 6
                    }
                  }}
                  onClick={() => handleThemeSelect(theme)}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={theme.thumbnail}
                    alt={theme.name}
                  />
                  <CardContent>
                    <Typography variant="body1" align="center">
                      {theme.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default AssetCreatePage;
