// Mock API implementation for testing
import { v4 as uuidv4 } from 'uuid';

// Mock data
const users = [
  {
    id: '84778',
    email: 'alin@eduforyou.co.uk',
    fullName: 'ALIN FLORIN RADU',
    companyName: 'INTERMITENT FASTING',
    phone: '123456789'
  }
];

const assets = [
  {
    id: '1',
    title: 'Ugly VSL (Video Sales Letter)',
    type: 'sales',
    subtype: 'Video Script',
    progress: 0
  },
  {
    id: '2',
    title: 'Ninja Nurture Sequence',
    type: 'email',
    subtype: 'Email',
    progress: 0
  },
  {
    id: '3',
    title: 'Fasting out 10 kg Course',
    type: 'course',
    subtype: 'Course',
    progress: 0
  },
  {
    id: '4',
    title: 'One Page Map',
    type: 'sales',
    subtype: 'Sales',
    progress: 0
  }
];

const templates = [
  {
    id: '1',
    title: 'Promo Emails Low Ticket',
    description: 'Promo Emails Low Ticket',
    category: 'email',
    thumbnail: 'https://via.placeholder.com/300x200'
  },
  {
    id: '2',
    title: 'Lead Magnets',
    description: 'Bring in a flood of new leads with TEN powerful PDF downloads based on your Signature Product.',
    category: 'lead-magnet',
    thumbnail: 'https://via.placeholder.com/300x200'
  },
  {
    id: '3',
    title: 'Course Creator',
    description: 'Create an entire course based on your Product Roadmap and Campaign planner!',
    category: 'course',
    thumbnail: 'https://via.placeholder.com/300x200'
  },
  {
    id: '4',
    title: 'One Page Map',
    description: 'Use the power of a one page map to give your customers context and clarity on how to gain success through your program.',
    category: 'sales',
    thumbnail: 'https://via.placeholder.com/300x200'
  },
  {
    id: '5',
    title: 'Authority Amplifier Kit',
    description: 'Create a simple but powerful video that rapidly amplifies trust, authority, and urgency with your audience.',
    category: 'video',
    thumbnail: 'https://via.placeholder.com/300x200'
  }
];

const themes = [
  {
    id: '1',
    name: 'Light Theme',
    thumbnail: 'https://via.placeholder.com/200x100'
  },
  {
    id: '2',
    name: 'Dark Theme',
    thumbnail: 'https://via.placeholder.com/200x100'
  },
  {
    id: '3',
    name: 'Colorful Theme',
    thumbnail: 'https://via.placeholder.com/200x100'
  },
  {
    id: '4',
    name: 'Minimal Theme',
    thumbnail: 'https://via.placeholder.com/200x100'
  }
];

// Mock API implementation
class MockAPI {
  // Auth methods
  login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.email === email);
        if (user && password === 'Performance2025@') {
          resolve({
            token: 'mock-jwt-token',
            userId: user.id,
            user: { ...user }
          });
        } else {
          reject({ response: { data: { message: 'Invalid credentials' } } });
        }
      }, 500);
    });
  }

  register(userData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          id: uuidv4(),
          ...userData
        };
        users.push(newUser);
        resolve({
          token: 'mock-jwt-token',
          userId: newUser.id,
          user: { ...newUser }
        });
      }, 500);
    });
  }

  // Assets methods
  getAssets() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...assets]);
      }, 500);
    });
  }

  getAssetById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const asset = assets.find(a => a.id === id);
        if (asset) {
          resolve({ ...asset });
        } else {
          reject({ response: { data: { message: 'Asset not found' } } });
        }
      }, 500);
    });
  }

  createAsset(assetData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newAsset = {
          id: uuidv4(),
          progress: 0,
          ...assetData
        };
        assets.push(newAsset);
        resolve({ ...newAsset });
      }, 500);
    });
  }

  // Templates methods
  getTemplates(category = null) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (category) {
          resolve(templates.filter(t => t.category === category));
        } else {
          resolve([...templates]);
        }
      }, 500);
    });
  }

  getTemplateCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = [...new Set(templates.map(t => t.category))];
        resolve(categories);
      }, 500);
    });
  }

  // Themes methods
  getThemes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...themes]);
      }, 500);
    });
  }

  // User methods
  getUserProfile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...users[0] });
      }, 500);
    });
  }
}

export default new MockAPI();
