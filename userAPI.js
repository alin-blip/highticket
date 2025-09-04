// User API service implementation
import apiClient from './apiClient';

class UserAPI {
  // Get user profile
  async getUserProfile() {
    try {
      const response = await apiClient.get('/user/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Update user profile
  async updateUserProfile(profileData) {
    try {
      const response = await apiClient.put('/user/profile', profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get user settings
  async getUserSettings() {
    try {
      const response = await apiClient.get('/user/settings');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Update user settings
  async updateUserSettings(settingsData) {
    try {
      const response = await apiClient.put('/user/settings', settingsData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get user notifications
  async getUserNotifications() {
    try {
      const response = await apiClient.get('/user/notifications');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Mark notification as read
  async markNotificationAsRead(notificationId) {
    try {
      const response = await apiClient.put(`/user/notifications/${notificationId}/read`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UserAPI();
