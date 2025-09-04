// Assets API service implementation
import apiClient from './apiClient';

class AssetsAPI {
  // Get all assets
  async getAssets() {
    try {
      const response = await apiClient.get('/assets');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get asset by id
  async getAssetById(id) {
    try {
      const response = await apiClient.get(`/assets/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Create new asset
  async createAsset(assetData) {
    try {
      const response = await apiClient.post('/assets/create', assetData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Update asset
  async updateAsset(id, assetData) {
    try {
      const response = await apiClient.put(`/assets/${id}`, assetData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Delete asset
  async deleteAsset(id) {
    try {
      const response = await apiClient.delete(`/assets/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get asset content
  async getAssetContent(id) {
    try {
      const response = await apiClient.get(`/assets/${id}/content`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Update asset content
  async updateAssetContent(id, content) {
    try {
      const response = await apiClient.put(`/assets/${id}/content`, { content });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AssetsAPI();
