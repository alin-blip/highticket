// Templates API service implementation
import apiClient from './apiClient';

class TemplatesAPI {
  // Get all templates
  async getTemplates() {
    try {
      const response = await apiClient.get('/templates');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get templates by category
  async getTemplatesByCategory(category) {
    try {
      const response = await apiClient.get(`/templates/${category}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get template categories
  async getTemplateCategories() {
    try {
      const response = await apiClient.get('/templates/categories');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get template by id
  async getTemplateById(id) {
    try {
      const response = await apiClient.get(`/templates/detail/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get template content
  async getTemplateContent(id) {
    try {
      const response = await apiClient.get(`/templates/${id}/content`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new TemplatesAPI();
