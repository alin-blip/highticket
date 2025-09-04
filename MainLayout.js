import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, IconButton, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/Campaign';
import RouteIcon from '@mui/icons-material/Route';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FolderIcon from '@mui/icons-material/Folder';

// Main layout for authenticated pages
const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Pluux
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 2 }}>
              Campaigns
            </Typography>
            <Typography variant="body2" sx={{ mr: 2 }}>
              Agency <span style={{ backgroundColor: '#10B981', padding: '2px 4px', borderRadius: '4px', fontSize: '10px', color: 'white' }}>NEW</span>
            </Typography>
            <Typography variant="body2" sx={{ mr: 2 }}>
              Websites <span style={{ backgroundColor: '#10B981', padding: '2px 4px', borderRadius: '4px', fontSize: '10px', color: 'white' }}>NEW</span>
            </Typography>
            <Avatar sx={{ ml: 2 }}>AR</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Sidebar */}
      <Drawer
        variant="persistent"
        open={sidebarOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '64px',
            height: 'calc(100% - 64px)',
          },
        }}
      >
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="Campaign Planner" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <RouteIcon />
              </ListItemIcon>
              <ListItemText primary="Product Roadmap" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DesignServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Design Studio" />
            </ListItem>
            <Divider sx={{ my: 2 }} />
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Assets" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)` },
          ml: { sm: sidebarOpen ? `${drawerWidth}px` : 0 },
          mt: '64px',
          transition: (theme) =>
            theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
