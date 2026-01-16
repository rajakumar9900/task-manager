# ✅ Setup & Verification Checklist

## Pre-Flight Checklist

### Before Starting

- [ ] Node.js is installed (v16+)
  ```bash
  node --version
  ```

- [ ] npm is installed
  ```bash
  npm --version
  ```

- [ ] You have two terminal windows ready

---

## Backend Setup Checklist

### Terminal 1 - Backend

- [ ] Navigate to backend folder
  ```bash
  cd backend
  ```

- [ ] Install dependencies (first time only)
  ```bash
  npm install
  ```

- [ ] Start the server
  ```bash
  node server.js
  ```

- [ ] Verify output shows:
  ```
  ✓ Connected to SQLite database
  ✓ Tasks table ready
  ✓ Server running on port 5000
  ```

- [ ] Test API in browser
  - [ ] Open: http://localhost:5000/tasks
  - [ ] Should see: `[]` or task array

- [ ] Run API test (optional)
  ```bash
  node test-api.js
  ```

**✅ Backend is ready when all above are checked!**

---

## Frontend Setup Checklist

### Terminal 2 - Frontend

- [ ] Navigate to frontend folder
  ```bash
  cd frontend
  ```

- [ ] Install dependencies (first time only)
  ```bash
  npm install
  ```

- [ ] Verify `.env` file exists
  - [ ] Contains: `VITE_API_URL=http://localhost:5000`

- [ ] Start the dev server
  ```bash
  npm run dev
  ```

- [ ] Verify output shows:
  ```
  ✓ VITE v7.x.x ready
  ✓ Local: http://localhost:5173/
  ```

- [ ] Open browser to: http://localhost:5173

**✅ Frontend is ready when all above are checked!**

---

## Browser Verification Checklist

### Initial Load

- [ ] Page loads without errors
- [ ] You see "✨ Task Manager" header
- [ ] You see input field with "What needs to be done?"
- [ ] You see "No tasks yet. Add one above!" message
- [ ] No errors in console (F12)

### Add Task Test

- [ ] Type "Test Task" in input field
- [ ] Click "➕ Add" button
- [ ] See green success toast: "✓ Task added successfully"
- [ ] Task appears in list below
- [ ] Input field clears
- [ ] Stats show "1 tasks • 0 completed • 1 remaining"

### Complete Task Test

- [ ] Click checkbox next to task
- [ ] Task text gets strikethrough
- [ ] Task text turns gray
- [ ] Stats update to "1 completed"

### Edit Task Test

- [ ] Click ✏️ (edit) button
- [ ] Input field fills with task text
- [ ] Buttons change to "💾 Save" and "Cancel"
- [ ] Edit the text
- [ ] Click "💾 Save"
- [ ] See green success toast: "✓ Task updated successfully"
- [ ] Task updates in list

### Delete Task Test

- [ ] Click 🗑️ (delete) button
- [ ] See confirmation dialog
- [ ] Click "OK" to confirm
- [ ] See green success toast: "✓ Task deleted successfully"
- [ ] Task disappears from list
- [ ] Stats update

**✅ All features working when all above are checked!**

---

## Console Verification Checklist

### Browser Console (F12)

- [ ] No red errors
- [ ] See "[vite] connected" message
- [ ] See "[vite] hmr update" on file changes
- [ ] No "Failed to fetch" errors
- [ ] No "Unexpected token" errors

### Network Tab (F12)

- [ ] GET /tasks → Status 200
- [ ] POST /tasks → Status 200
- [ ] PUT /tasks/:id → Status 200
- [ ] DELETE /tasks/:id → Status 200

**✅ No console errors when all above are checked!**

---

## File Structure Verification

### Backend Files

- [ ] `backend/server.js` exists
- [ ] `backend/package.json` exists
- [ ] `backend/node_modules/` folder exists
- [ ] `backend/tasks.db` exists (created on first run)
- [ ] `backend/test-api.js` exists

### Frontend Files

- [ ] `frontend/src/App.jsx` exists
- [ ] `frontend/src/components/` folder exists
- [ ] `frontend/src/hooks/` folder exists
- [ ] `frontend/src/constants/` folder exists
- [ ] `frontend/.env` exists
- [ ] `frontend/node_modules/` folder exists
- [ ] `frontend/package.json` exists

### Documentation Files

- [ ] `README.md` exists
- [ ] `START_HERE.md` exists
- [ ] `TROUBLESHOOTING.md` exists
- [ ] `CHECKLIST.md` exists (this file)

**✅ All files present when all above are checked!**

---

## Troubleshooting Checklist

### If Something Doesn't Work

- [ ] Both terminals are still running
- [ ] Backend shows "Server running on port 5000"
- [ ] Frontend shows Vite dev server URL
- [ ] Browser is at http://localhost:5173
- [ ] No firewall blocking ports 5000 or 5173
- [ ] Checked browser console for errors
- [ ] Checked backend terminal for errors
- [ ] Tested http://localhost:5000/tasks in browser
- [ ] Tried hard refresh (Ctrl+Shift+R)
- [ ] Read TROUBLESHOOTING.md

**✅ Ready to debug when all above are checked!**

---

## Production Readiness Checklist

### Before Deploying

- [ ] All tests pass
- [ ] No console errors
- [ ] No console warnings
- [ ] All features work correctly
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Environment variables configured
- [ ] Database backed up
- [ ] Error handling tested
- [ ] Loading states work
- [ ] Toast notifications work
- [ ] Accessibility tested

### Build Process

- [ ] Frontend builds without errors
  ```bash
  cd frontend
  npm run build
  ```

- [ ] Preview build works
  ```bash
  npm run preview
  ```

- [ ] Backend runs in production mode
  ```bash
  cd backend
  NODE_ENV=production node server.js
  ```

**✅ Ready for production when all above are checked!**

---

## Daily Development Checklist

### Starting Work

- [ ] Pull latest changes (if using git)
- [ ] Start backend server
- [ ] Start frontend dev server
- [ ] Open browser to http://localhost:5173
- [ ] Open browser DevTools (F12)
- [ ] Verify everything loads correctly

### During Development

- [ ] Check console regularly for errors
- [ ] Test changes in browser
- [ ] Verify backend terminal for errors
- [ ] Use hard refresh when needed
- [ ] Save files frequently

### Ending Work

- [ ] Stop frontend server (Ctrl+C)
- [ ] Stop backend server (Ctrl+C)
- [ ] Commit changes (if using git)
- [ ] Close terminals

**✅ Good development workflow when all above are followed!**

---

## Quick Reference

### Start Everything
```bash
# Terminal 1
cd backend && node server.js

# Terminal 2
cd frontend && npm run dev
```

### Stop Everything
```bash
# In each terminal
Ctrl + C
```

### Reset Everything
```bash
# Backend
cd backend
rm tasks.db
node server.js

# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Test Backend
```bash
cd backend
node test-api.js
```

---

## Success Indicators

### ✅ Everything is Working When:

1. Backend terminal shows "Server running on port 5000"
2. Frontend terminal shows Vite dev server URL
3. Browser shows task manager UI
4. Can add tasks
5. Can edit tasks
6. Can delete tasks
7. Can complete tasks
8. Toast notifications appear
9. No console errors
10. Stats update correctly

### ❌ Something is Wrong When:

1. "Cannot connect to server" error
2. Blank white page
3. Console shows errors
4. Tasks don't save
5. Buttons don't work
6. No toast notifications
7. Backend terminal shows errors
8. Frontend won't start

**If you see ❌ signs, check [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

---

## Final Verification

Before considering setup complete:

- [ ] ✅ Backend running
- [ ] ✅ Frontend running
- [ ] ✅ Browser shows UI
- [ ] ✅ Can add tasks
- [ ] ✅ Can edit tasks
- [ ] ✅ Can delete tasks
- [ ] ✅ Can complete tasks
- [ ] ✅ Toast notifications work
- [ ] ✅ No console errors
- [ ] ✅ Stats update correctly

**🎉 Setup is complete when all boxes are checked!**

---

**Need help?** Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) or [START_HERE.md](START_HERE.md)
