# Quick Reference Guide

## 🚀 Getting Started

```bash
cd frontend
npm install
npm run dev
```

## 📂 Project Structure

```
src/
├── components/      # React components
├── hooks/          # Custom React hooks
├── utils/          # Helper functions
├── constants/      # App configuration
└── styles/         # Component-specific CSS
```

## 🎯 Key Components

### App.jsx
Main application component with error boundary and toast system.

### TaskForm
Form for adding/editing tasks with validation.

### TaskList
Displays tasks with statistics (total, completed, remaining).

### TaskItem
Individual task with checkbox, edit, and delete actions.

### LoadingSpinner
Loading state indicator.

### Toast System
Professional notifications for user feedback.

## 🔧 Custom Hooks

### useTasks()
```javascript
const {
  tasks,           // Array of tasks
  loading,         // Loading state
  error,           // Error message
  addTask,         // Add new task
  updateTask,      // Update existing task
  deleteTask,      // Delete task
  toggleComplete,  // Toggle task completion
  refetch          // Manually refetch tasks
} = useTasks();
```

### useToast()
```javascript
const {
  toasts,          // Array of active toasts
  addToast,        // Add new toast
  removeToast      // Remove toast by ID
} = useToast();

// Usage
addToast('Success!', 'success', 3000);
// Types: 'success', 'error', 'info', 'warning'
```

## 🎨 Styling

All styles use CSS custom properties (variables) defined in `App.css`:
- `--primary`: Primary color
- `--surface`: Card background
- `--text`: Text color
- `--text-muted`: Muted text
- etc.

## ⌨️ Keyboard Shortcuts

- **Escape**: Cancel editing
- **Enter/Space**: Toggle task completion (when focused)

## 🔐 Environment Variables

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

## 📝 PropTypes

All components use PropTypes for type validation. Check component files for expected props.

## 🐛 Debugging

### Check Console
- PropTypes warnings
- API errors
- Component errors

### Common Issues
1. **Backend not running**: Start with `node backend/server.js`
2. **Port conflict**: Vite will auto-select next available port
3. **CORS errors**: Ensure backend allows frontend origin

## 🧪 Testing Tips

Components are designed for easy testing:
- Pure functions in utils/
- Isolated hooks
- PropTypes validation
- Clear component boundaries

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy dist/ folder to any static host
```

## 🎯 Best Practices Used

✅ Separation of concerns  
✅ Custom hooks for reusability  
✅ PropTypes for type safety  
✅ Error boundaries  
✅ Loading states  
✅ Accessibility (ARIA)  
✅ Environment configuration  
✅ Consistent naming  
✅ Modular architecture  

## 📚 Learn More

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Need Help?

Check these files:
- `IMPROVEMENTS.md` - Detailed feature list
- `SETUP.md` - Setup and troubleshooting
- `PROFESSIONAL_UPGRADE_SUMMARY.md` - Complete overview
