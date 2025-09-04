// Update API client to use mock API for testing
import mockAPI from './mockAPI';

// Flag to determine whether to use mock API or real API
const USE_MOCK_API = true;

// Auth service with mock implementation
const authService = {
  // Login user
  login: async (email, password) => {
    try {
      if (USE_MOCK_API) {
        const response = await mockAPI.login(email, password);
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }
        return response;
      } else {
        // Real API implementation would be used here
        // This is already implemented in authService.js
      }
    } catch (error) {
      throw error;
    }
  },

  // Register user
  register: async (userData) => {
    try {
      if (USE_MOCK_API) {
        const response = await mockAPI.register(userData);
        if (response.token) {
          localStorage.setItem('auth_token', response.token);
        }
        return response;
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('auth_token');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('auth_token');
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getUserProfile();
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  }
};

export default authService;
