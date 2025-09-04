// Update assetsService.js to use mock API for testing
import mockAPI from './mockAPI';

// Flag to determine whether to use mock API or real API
const USE_MOCK_API = true;

// Assets service with mock implementation
const assetsService = {
  // Get all assets
  getAssets: async () => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getAssets();
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Get asset by id
  getAssetById: async (id) => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getAssetById(id);
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Get templates
  getTemplates: async (category = null) => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getTemplates(category);
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Get template categories
  getTemplateCategories: async () => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getTemplateCategories();
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Create new asset
  createAsset: async (assetData) => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.createAsset(assetData);
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  },

  // Get themes
  getThemes: async () => {
    try {
      if (USE_MOCK_API) {
        return await mockAPI.getThemes();
      } else {
        // Real API implementation would be used here
      }
    } catch (error) {
      throw error;
    }
  }
};

export default assetsService;
