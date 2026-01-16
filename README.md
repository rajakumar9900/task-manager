# ✨ Professional Task Manager

A modern, full-stack task management application built with React and Node.js, featuring a professional UI/UX and enterprise-grade architecture.

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Installation & Running

1. **Start the Backend** (Terminal 1):
   ```bash
   cd backend
   npm install
   node server.js
   ```
   Wait for: `Server running on port 5000`

2. **Start the Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open browser to: http://localhost:5173

**📖 Detailed guide**: See [START_HERE.md](START_HERE.md)

## ✨ Features

### User Experience
- ✅ Modern, glassmorphism UI design
- ✅ Toast notifications for all actions
- ✅ Loading states and spinners
- ✅ Task statistics (total, completed, remaining)
- ✅ Smooth animations and transitions
- ✅ Confirmation dialogs
- ✅ Responsive design (mobile-friendly)

### Technical Features
- ✅ Custom React hooks for state management
- ✅ PropTypes validation
- ✅ Error boundaries
- ✅ Accessibility (WCAG 2.1 compliant)
- ✅ Environment-based configuration
- ✅ Professional error handling
- ✅ RESTful API
- ✅ SQLite database

## 📁 Project Structure

```
task-manager/
├── backend/
│   ├── server.js           # Express server
│   ├── db.js              # Database connection
│   ├── tasks.db           # SQLite database
│   └── test-api.js        # API testing script
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Helper functions
│   │   ├── constants/     # Configuration
│   │   └── styles/        # CSS files
│   └── .env              # Environment variables
├── START_HERE.md         # Quick start guide
├── TROUBLESHOOTING.md    # Problem solving guide
└── README.md            # This file
```

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Create new task |
| PUT | `/tasks/:id` | Update task |
| DELETE | `/tasks/:id` | Delete task |

## 🔧 Configuration

### Backend
- Port: 5000 (configurable in `server.js`)
- Database: SQLite (`tasks.db`)

### Frontend
- Port: 5173 (auto-assigned by Vite)
- API URL: Configured in `.env`

```env
VITE_API_URL=http://localhost:5000
```

## 📚 Documentation

- **[START_HERE.md](START_HERE.md)** - Quick start guide
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Common issues and solutions
- **[frontend/IMPROVEMENTS.md](frontend/IMPROVEMENTS.md)** - Feature list
- **[frontend/ARCHITECTURE.md](frontend/ARCHITECTURE.md)** - Technical architecture
- **[frontend/QUICK_REFERENCE.md](frontend/QUICK_REFERENCE.md)** - Developer reference
- **[frontend/SETUP.md](frontend/SETUP.md)** - Detailed setup guide

## 🧪 Testing

### Test Backend API
```bash
cd backend
node test-api.js
```

### Test in Browser
1. Open: http://localhost:5000/tasks
2. Should return: `[]` or task array

## 🐛 Troubleshooting

### Common Issues

**"Unexpected token '<', "<!DOCTYPE "... is not valid JSON"**
- Backend is not running
- Solution: Start backend with `node server.js`
- See: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

**"Cannot connect to server"**
- Backend not on port 5000
- Solution: Check backend terminal for errors
- See: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

**Full troubleshooting guide**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

## 🎨 Tech Stack

### Frontend
- React 19
- Vite
- PropTypes
- Custom Hooks
- CSS3 (Glassmorphism)

### Backend
- Node.js
- Express
- SQLite3
- CORS

## 🚀 Production Build

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

### Backend
```bash
cd backend
NODE_ENV=production node server.js
```

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.x",
  "sqlite3": "^5.x",
  "cors": "^2.x"
}
```

### Frontend
```json
{
  "react": "^19.x",
  "react-dom": "^19.x",
  "prop-types": "^15.x"
}
```

## 🔐 Security

- Input validation on both client and server
- XSS prevention (React default)
- CORS enabled
- Environment variables for sensitive config
- Error messages don't expose sensitive data

## ♿ Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML
- Focus management
- WCAG 2.1 Level AA compliant

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

This is a demonstration project showcasing professional React development practices.

## 📄 License

MIT License - Feel free to use this project for learning and development.

## 🎓 Learning Resources

This project demonstrates:
- Custom React hooks
- Error boundaries
- PropTypes validation
- Accessibility best practices
- Professional UI/UX design
- RESTful API design
- State management patterns
- Component composition

## 🆘 Need Help?

1. Check [START_HERE.md](START_HERE.md) for setup
2. Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for issues
3. Check browser console (F12) for errors
4. Check backend terminal for errors
5. Run `node backend/test-api.js` to test API

## 🎉 Features Showcase

### Professional UI
- Modern glassmorphism design
- Smooth animations
- Responsive layout
- Beautiful color scheme

### User Feedback
- Toast notifications
- Loading indicators
- Error messages
- Success confirmations

### Developer Experience
- Hot module replacement
- PropTypes validation
- Clear error messages
- Comprehensive documentation

---

**Built with ❤️ using React and Node.js**
