# Frontend Components Analysis

## Main Components

### Navigation Components
- TopNavigation: Main navigation bar at the top with Campaigns, Agency, Websites sections
- Sidebar: Left sidebar with navigation links to Home, Campaign Planner, Product Roadmap, etc.
- UserProfile: User dropdown in the top-right corner

### Layout Components
- MainLayout: Overall application layout with sidebar and content area
- PageHeader: Header section for each page with title and actions
- Card: Reusable card component used throughout the application

### Form Components
- InputField: Text input fields seen in login/registration forms
- Button: Various button styles (primary, secondary)
- Dropdown: Dropdown selection components

### Template Components
- TemplateGrid: Grid layout for displaying templates
- TemplateCard: Individual template card with image and description
- FilterButtons: Filter buttons for template categories

### Modal Components
- Modal: Base modal component
- ThemeSelectionModal: Modal for selecting themes with grid layout

## Styling Approach
The application appears to use a component-based styling approach, possibly with CSS-in-JS or CSS modules. The styling is consistent across components with a defined color scheme and spacing system.

## Component Hierarchy
```
App
├── AuthPages
│   ├── LoginPage
│   └── RegisterPage
├── MainLayout
│   ├── TopNavigation
│   ├── Sidebar
│   └── ContentArea
│       ├── Dashboard
│       ├── AssetsPage
│       │   ├── TemplateGrid
│       │   │   └── TemplateCard
│       │   └── FilterSection
│       ├── CampaignPlanner
│       ├── ProductRoadmap
│       └── DesignStudio
└── Modals
    └── ThemeSelectionModal
```

## Interactive Behaviors
- Click events on navigation items for page routing
- Filter buttons for filtering templates by category
- Modal dialogs for additional options and selections
- Form submissions for login/registration
- Progress tracking for completed steps

## State Management
Based on the application's complexity, it likely uses a state management solution like React Context or Redux to manage application state, user authentication, and data fetching.
