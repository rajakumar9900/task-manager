# Frontend Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Configure Environment
The `.env` file is already created with default settings:
```env
VITE_API_URL=http://localhost:5000
```

Update this if your backend runs on a different port.

### 3. Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### 4. Ensure Backend is Running
Make sure your backend server is running on port 5000:
```bash
cd backend
node server.js
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## What's New

### Professional Features
✅ Custom hooks for state management  
✅ Toast notifications for user feedback  
✅ Loading states and spinners  
✅ Error boundary for graceful error handling  
✅ PropTypes for type validation  
✅ Accessibility improvements (ARIA labels, keyboard navigation)  
✅ Task statistics display  
✅ Confirmation dialogs  
✅ Environment-based configuration  

### Enhanced User Experience
- Smooth animations and transitions
- Visual feedback on all actions
- Better error messages
- Loading indicators
- Auto-dismiss notifications
- Keyboard shortcuts (Escape to cancel edit)

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Backend Connection Error
If you see "Connection Error", ensure:
1. Backend server is running (`node backend/server.js`)
2. Backend is on port 5000
3. No CORS issues (backend should allow localhost:5173)

### PropTypes Warnings
If you see PropTypes warnings in console, check that you're passing the correct prop types to components.

## Development Tips

### Hot Module Replacement (HMR)
Vite provides instant HMR. Changes to components will reflect immediately without full page reload.

### Component Development
Each component is self-contained with PropTypes validation. Check the component files for expected props.

### Adding New Features
1. Create new components in `src/components/`
2. Add custom hooks in `src/hooks/`
3. Update constants in `src/constants/index.js`
4. Add styles in `src/styles/` or component-specific CSS

## Production Build

### Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```

Test the production build locally before deployment.

### Deploy
The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (nginx, Apache)

## Browser Requirements
- Modern browsers with ES6+ support
- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
