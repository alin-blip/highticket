import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import authService from '../../api/authService';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(email, password);
      setLoading(false);
      
      // Redirect to dashboard after successful login
      if (response.userId) {
        navigate(`/app/dashboard/${response.userId}`);
      } else {
        navigate('/app/dashboard/0'); // Fallback
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Sign in to pluux
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          sx={{ mb: 2 }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3 }}
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ 
            py: 1.5, 
            fontSize: '1rem',
            textTransform: 'none',
            borderRadius: 1
          }}
        >
          {loading ? <CircularProgress size={24} /> : 'Sign In'}
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link to="/auth/register" style={{ color: '#4F46E5', textDecoration: 'none' }}>
            <Typography variant="body2">
              Forgot Password? Click here
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
