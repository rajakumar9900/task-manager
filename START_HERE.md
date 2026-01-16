# 🚀 Quick Start Guide

## Step 1: Start the Backend Server

Open a terminal and run:

```bash
cd backend
node server.js
```

You should see:
```
Connected to SQLite database
Tasks table ready
Server running on port 5000
```

**Keep this terminal open!** The backend must stay running.

## Step 2: Start the Frontend

Open a **NEW** terminal (keep the backend running) and run:

```bash
cd frontend
npm install
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

## Step 3: Open in Browser

Open your browser and go to: **http://localhost:5173**

---

## ⚠️ Troubleshooting

### Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

**Cause**: The backend server is not running or not responding correctly.

**Solution**:
1. Make sure the backend terminal is still running
2. Check that you see "Server running on port 5000" in the backend terminal
3. If not, restart the backend: `node backend/server.js`
4. Refresh your browser

### Error: "Cannot connect to server"

**Cause**: Backend is not running on port 5000.

**Solution**:
1. Start the backend: `cd backend && node server.js`
2. Check if port 5000 is already in use
3. Refresh your browser

### Error: Port 5000 already in use

**Solution**:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or just change the port in:
# - backend/server.js (line with app.listen)
# - frontend/.env (VITE_API_URL)
```

### Frontend won't start

**Solution**:
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tasks not loading

**Solution**:
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab - look for failed requests to localhost:5000
4. Ensure backend is running

---

## 📋 Checklist

Before reporting issues, verify:

- [ ] Backend terminal is open and shows "Server running on port 5000"
- [ ] Frontend terminal is open and shows Vite dev server URL
- [ ] Browser is open to http://localhost:5173
- [ ] No errors in browser console (F12)
- [ ] Both terminals are still running (not closed)

---

## 🎯 Quick Commands

### Backend
```bash
cd backend
node server.js
```

### Frontend
```bash
cd frontend
npm run dev
```

### Stop Servers
- Press `Ctrl + C` in each terminal

---

## 📚 Next Steps

Once everything is running:
- Read `frontend/QUICK_REFERENCE.md` for features
- Read `frontend/IMPROVEMENTS.md` for what's new
- Read `frontend/ARCHITECTURE.md` for technical details

---

## 🆘 Still Having Issues?

1. Check both terminals for error messages
2. Check browser console (F12) for errors
3. Verify backend is responding: Open http://localhost:5000/tasks in browser
   - Should show: `[]` or a list of tasks
   - If you see an error page, backend has issues
4. Restart both servers
5. Clear browser cache and reload
