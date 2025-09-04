# Pluux Application Analysis

## Application Structure

### Public Pages
- Registration page: `/auth/register`
- Login page: `/auth/login`

### Authenticated Pages
- Dashboard: `/app/dashboard/{id}`
- Assets creation: `/app/assets/create`

### Main Navigation
- Campaigns
- Agency (NEW)
- Websites (NEW)
- User profile

### Sidebar Navigation
- Home
- Campaign Planner
- Product Roadmap
- Design Studio
- Assets

## Frontend Components

### UI Framework
The application appears to be built using a modern JavaScript framework, likely React based on the component structure and UI patterns observed.

### Key Components
1. **Navigation**
   - Top navigation bar with main sections
   - Sidebar navigation with detailed sections
   - User profile dropdown

2. **Dashboard Components**
   - Setup section with campaign generation
   - Progress indicators (e.g., "4/6" completion)
   - Card-based layout for main features

3. **Assets Creation**
   - Template selection interface
   - Filter buttons by type
   - Card grid layout for templates
   - Modal dialogs (e.g., theme selection)

4. **Theme Selection**
   - Grid layout of theme options
   - Visual previews of themes
   - Close button functionality

### UI Elements
- Buttons with various styles (primary, secondary)
- Cards with images and descriptions
- Progress indicators
- Modal dialogs
- Form inputs (seen in login/registration)
- Dropdown menus

### Color Scheme
- Primary color: Blue (#4F46E5 or similar)
- Secondary colors: Various (purple, green, orange)
- Background: Light gray/white
- Text: Dark gray/black

### API Integration
- API endpoints at `api.growthworks.io`
- Authentication required for accessing internal pages

## Technical Details
- Application is built on GrowthWorks V2 PWA
- Production environment
- Client-side routing (SPA behavior)
- Authentication system with login persistence

## Next Steps for Cloning
1. Set up React application structure
2. Create component hierarchy based on observed patterns
3. Implement routing system
4. Design authentication flow
5. Create UI components matching the original
6. Implement API integration
