# 🔧 Troubleshooting Guide

## Common Errors and Solutions

### 1. "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

**What it means**: The frontend is trying to parse HTML as JSON. This happens when the backend returns an error page instead of JSON data.

**Root causes**:
- Backend server is not running
- Backend crashed or has errors
- Wrong API URL in frontend
- Backend endpoint doesn't exist

**Solutions**:

#### Step 1: Check if backend is running
```bash
# In backend terminal, you should see:
Connected to SQLite database
Tasks table ready
Server running on port 5000
```

If not, start it:
```bash
cd backend
node server.js
```

#### Step 2: Test the backend directly
Open your browser and go to: **http://localhost:5000/tasks**

You should see:
- `[]` (empty array) if no tasks
- `[{"id":1,"title":"Task","completed":0}]` if tasks exist

If you see an error page or nothing, the backend has issues.

#### Step 3: Run the API test script
```bash
cd backend
node test-api.js
```

This will test all endpoints and show which ones are failing.

#### Step 4: Check backend logs
Look at the backend terminal for error messages.

#### Step 5: Verify the PUT endpoint exists
The backend needs a PUT endpoint for updating tasks. Check `backend/server.js` has:
```javascript
app.put("/tasks/:id", (req, res) => { ... });
```

---

### 2. "Cannot connect to server"

**What it means**: The frontend cannot reach the backend at all.

**Solutions**:

1. **Start the backend**:
   ```bash
   cd backend
   node server.js
   ```

2. **Check the port**: Backend should be on port 5000
   - Look for "Server running on port 5000" in terminal

3. **Check firewall**: Make sure port 5000 isn't blocked

4. **Verify API URL**: Check `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

5. **Restart both servers**:
   - Stop backend (Ctrl+C)
   - Stop frontend (Ctrl+C)
   - Start backend first
   - Then start frontend

---

### 3. "Failed to fetch tasks"

**What it means**: The GET request to fetch tasks failed.

**Solutions**:

1. **Check backend is running** on port 5000

2. **Test the endpoint directly**:
   - Open: http://localhost:5000/tasks
   - Should return JSON array

3. **Check CORS**: Backend should have:
   ```javascript
   app.use(cors());
   ```

4. **Check database**: Make sure `tasks.db` exists in backend folder

---

### 4. Port 5000 already in use

**What it means**: Another application is using port 5000.

**Solutions**:

#### Option A: Kill the process using port 5000

**Windows**:
```bash
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Mac/Linux**:
```bash
lsof -ti:5000 | xargs kill -9
```

#### Option B: Change the port

1. In `backend/server.js`, change:
   ```javascript
   app.listen(3001, () => {
     console.log("Server running on port 3001");
   });
   ```

2. In `frontend/.env`, change:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

3. Restart both servers

---

### 5. Frontend won't start / npm errors

**Solutions**:

1. **Delete and reinstall dependencies**:
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear npm cache**:
   ```bash
   npm cache clean --force
   npm install
   ```

3. **Check Node version**:
   ```bash
   node --version
   ```
   Should be v16 or higher

4. **Try different package manager**:
   ```bash
   npm install -g yarn
   yarn install
   yarn dev
   ```

---

### 6. Tasks not appearing / Empty list

**Solutions**:

1. **Check browser console** (F12):
   - Look for errors
   - Check Network tab for failed requests

2. **Add a task manually**:
   - Type in the input field
   - Click "Add"
   - Check console for errors

3. **Check database**:
   ```bash
   cd backend
   sqlite3 tasks.db
   SELECT * FROM tasks;
   .exit
   ```

4. **Reset database**:
   ```bash
   cd backend
   rm tasks.db
   node server.js
   ```
   This will create a fresh database

---

### 7. "Module not found" errors

**Solutions**:

1. **Install missing dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Check imports**: Make sure file paths are correct

3. **Restart dev server**:
   - Stop (Ctrl+C)
   - Start again: `npm run dev`

---

### 8. Changes not reflecting in browser

**Solutions**:

1. **Hard refresh**:
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Clear browser cache**:
   - Open DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"

3. **Check if Vite HMR is working**:
   - Look for "hmr update" messages in browser console
   - If not, restart dev server

4. **Disable browser extensions**:
   - Some extensions block HMR
   - Try in incognito/private mode

---

### 9. CORS errors

**What it means**: Browser is blocking requests due to CORS policy.

**Solutions**:

1. **Check backend has CORS enabled**:
   ```javascript
   const cors = require("cors");
   app.use(cors());
   ```

2. **Install cors package**:
   ```bash
   cd backend
   npm install cors
   ```

3. **Restart backend** after adding CORS

---

### 10. PropTypes warnings in console

**What it means**: Component received wrong prop types.

**Solutions**:

1. **Check the warning message**: It tells you which prop is wrong

2. **Verify prop types**: Look at component's PropTypes definition

3. **These are warnings, not errors**: App will still work

---

## 🔍 Debugging Checklist

When something isn't working:

- [ ] Backend terminal is open and shows "Server running on port 5000"
- [ ] Frontend terminal is open and shows Vite dev server
- [ ] Browser is at http://localhost:5173
- [ ] Browser console (F12) shows no errors
- [ ] http://localhost:5000/tasks returns JSON (test in browser)
- [ ] Both .env files exist and are correct
- [ ] node_modules folders exist in both frontend and backend
- [ ] No firewall blocking ports 5000 or 5173

---

## 🧪 Testing Backend

Run the test script:
```bash
cd backend
node test-api.js
```

This tests all API endpoints and shows which ones work.

---

## 🆘 Still Stuck?

1. **Check both terminal windows** for error messages
2. **Check browser console** (F12) for errors
3. **Test backend directly**: http://localhost:5000/tasks
4. **Restart everything**:
   - Close all terminals
   - Start backend: `cd backend && node server.js`
   - Start frontend: `cd frontend && npm run dev`
5. **Check file structure**: Make sure all files are in correct locations

---

## 📋 Quick Fixes

### Reset Everything
```bash
# Stop all servers (Ctrl+C in each terminal)

# Backend
cd backend
rm tasks.db
node server.js

# Frontend (in new terminal)
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Verify Setup
```bash
# Check Node version
node --version

# Check npm version
npm --version

# Test backend
curl http://localhost:5000/tasks

# Or in PowerShell
Invoke-WebRequest http://localhost:5000/tasks
```

---

## 💡 Prevention Tips

1. **Always start backend first**, then frontend
2. **Keep both terminals open** while developing
3. **Check console regularly** for warnings/errors
4. **Test backend endpoints** before blaming frontend
5. **Use the test script** to verify backend is working
