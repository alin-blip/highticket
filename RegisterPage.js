import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import authService from '../../api/authService';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    companyName: '',
    fullName: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
        fullName: formData.fullName,
        phone: formData.phone
      };

      const response = await authService.register(userData);
      setLoading(false);
      
      // Redirect to dashboard after successful registration
      if (response.userId) {
        navigate(`/app/dashboard/${response.userId}`);
      } else {
        navigate('/app/dashboard/0'); // Fallback
      }
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Join pluux
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
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          sx={{ mb: 2 }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="fullName"
          label="Full Name"
          id="fullName"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Josh Clifford"
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
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="repeatPassword"
          label="Repeat Password"
          type="password"
          id="repeatPassword"
          autoComplete="new-password"
          value={formData.repeatPassword}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="companyName"
          label="Company Name"
          id="companyName"
          autoComplete="organization"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="pluux"
          sx={{ mb: 2 }}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone"
          id="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 555-1234"
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
          {loading ? <CircularProgress size={24} /> : 'Create Account'}
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Link to="/auth/login" style={{ color: '#4F46E5', textDecoration: 'none' }}>
            <Typography variant="body2">
              Already have an account? Login
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
