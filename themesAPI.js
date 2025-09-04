// Themes API service implementation
import apiClient from './apiClient';

class ThemesAPI {
  // Get all themes
  async getThemes() {
    try {
      const response = await apiClient.get('/themes');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get theme by id
  async getThemeById(id) {
    try {
      const response = await apiClient.get(`/themes/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get theme styles
  async getThemeStyles(id) {
    try {
      const response = await apiClient.get(`/themes/${id}/styles`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ThemesAPI();
