# 📸 Visual Guide

## What You'll See

### 1. Backend Terminal
```
$ node server.js
Connected to SQLite database
Tasks table ready
Server running on port 5000
```
✅ This means backend is ready!

### 2. Frontend Terminal
```
$ npm run dev

  VITE v7.2.4  ready in 523 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
✅ This means frontend is ready!

### 3. Browser View

#### Initial Load (Empty State)
```
┌─────────────────────────────────────────┐
│                                         │
│         ✨ Task Manager                 │
│    Stay organized, get things done      │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ What needs to be done?        [➕]│ │
│  └───────────────────────────────────┘ │
│                                         │
│           📝                            │
│    No tasks yet. Add one above!         │
│                                         │
└─────────────────────────────────────────┘
```

#### With Tasks
```
┌─────────────────────────────────────────┐
│                                         │
│         ✨ Task Manager                 │
│    Stay organized, get things done      │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ What needs to be done?        [➕]│ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  3 tasks • 1 completed • 2 remain │ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ ☑ Buy groceries          [✏️] [🗑️]│ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ ☐ Finish project         [✏️] [🗑️]│ │
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ ☐ Call dentist           [✏️] [🗑️]│ │
│  └───────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

#### Toast Notification (Success)
```
┌─────────────────────────────────────────┐
│                    ┌──────────────────┐ │
│                    │ ✓ Task added!    │ │
│                    └──────────────────┘ │
│         ✨ Task Manager                 │
│    Stay organized, get things done      │
│                                         │
└─────────────────────────────────────────┘
```

#### Loading State
```
┌─────────────────────────────────────────┐
│                                         │
│              ⟳                          │
│        Loading tasks...                 │
│                                         │
└─────────────────────────────────────────┘
```

#### Error State
```
┌─────────────────────────────────────────┐
│                                         │
│              ⚠️                         │
│        Connection Error                 │
│                                         │
│  Failed to fetch tasks. Please ensure   │
│  the server is running.                 │
│                                         │
│         [Retry]                         │
│                                         │
└─────────────────────────────────────────┘
```

## 🎨 Color Scheme

### Light Mode (Default)
- Background: Dark blue gradient
- Cards: Glassmorphism (semi-transparent)
- Primary: Purple/Blue (#6366f1)
- Secondary: Pink (#ec4899)
- Text: Light gray (#f1f5f9)
- Success: Green (#22c55e)
- Error: Red (#ef4444)

### Visual Effects
- ✨ Glassmorphism cards
- 🌊 Smooth animations
- 💫 Gradient backgrounds
- 🎯 Hover effects
- 📱 Responsive design

## 🖱️ Interactions

### Adding a Task
```
1. Type in input field
   ┌─────────────────────────┐
   │ Buy milk            [➕]│
   └─────────────────────────┘

2. Click "➕ Add" or press Enter

3. See toast notification
   ┌──────────────────┐
   │ ✓ Task added!    │
   └──────────────────┘

4. Task appears in list
   ┌─────────────────────────┐
   │ ☐ Buy milk      [✏️][🗑️]│
   └─────────────────────────┘
```

### Completing a Task
```
1. Click checkbox
   ☐ → ☑

2. Text gets strikethrough
   ☑ Buy milk (crossed out)

3. Stats update
   1 completed → 2 completed
```

### Editing a Task
```
1. Click ✏️ button

2. Input field fills with task text
   ┌─────────────────────────┐
   │ Buy milk        [💾][X] │
   └─────────────────────────┘

3. Edit text and click "💾 Save"

4. See toast notification
   ┌──────────────────┐
   │ ✓ Task updated!  │
   └──────────────────┘
```

### Deleting a Task
```
1. Click 🗑️ button

2. See confirmation dialog
   ┌─────────────────────────┐
   │ Delete this task?       │
   │   [Cancel]  [Delete]    │
   └─────────────────────────┘

3. Click "Delete"

4. See toast notification
   ┌──────────────────┐
   │ ✓ Task deleted!  │
   └──────────────────┘

5. Task disappears from list
```

## 📱 Mobile View

```
┌───────────────────┐
│                   │
│  ✨ Task Manager  │
│  Stay organized   │
│                   │
│ ┌───────────────┐ │
│ │ What needs to │ │
│ │ be done?      │ │
│ └───────────────┘ │
│ ┌───────────────┐ │
│ │   ➕ Add      │ │
│ └───────────────┘ │
│                   │
│ ┌───────────────┐ │
│ │ 3 tasks       │ │
│ │ 1 completed   │ │
│ │ 2 remaining   │ │
│ └───────────────┘ │
│                   │
│ ┌───────────────┐ │
│ │☑ Buy groceries│ │
│ │   [✏️] [🗑️]   │ │
│ └───────────────┘ │
│                   │
│ ┌───────────────┐ │
│ │☐ Finish proj. │ │
│ │   [✏️] [🗑️]   │ │
│ └───────────────┘ │
│                   │
└───────────────────┘
```

## 🎯 What to Expect

### ✅ Good Signs
- Backend shows "Server running on port 5000"
- Frontend shows Vite dev server URL
- Browser shows the task manager UI
- No errors in browser console (F12)
- Tasks can be added, edited, deleted
- Toast notifications appear
- Smooth animations

### ❌ Bad Signs
- "Cannot connect to server" message
- Blank white page
- Errors in browser console
- Backend terminal shows errors
- Tasks don't save
- No toast notifications

## 🔍 Browser DevTools

### Console Tab (F12)
```
✅ Good:
  [vite] connected
  [vite] hmr update

❌ Bad:
  Failed to fetch
  Unexpected token '<'
  Cannot read property...
```

### Network Tab
```
✅ Good:
  GET /tasks → 200 OK
  POST /tasks → 200 OK
  PUT /tasks/1 → 200 OK
  DELETE /tasks/1 → 200 OK

❌ Bad:
  GET /tasks → Failed
  POST /tasks → 500 Error
  PUT /tasks/1 → 404 Not Found
```

## 🎬 Animation Examples

### Task Added
```
1. Input field → Clear
2. New task → Slide in from top
3. Toast → Slide in from right
4. Stats → Update with animation
```

### Task Completed
```
1. Checkbox → Check animation
2. Text → Fade to gray + strikethrough
3. Stats → Update numbers
```

### Task Deleted
```
1. Task → Fade out
2. Task → Slide up and disappear
3. Toast → Slide in from right
4. Stats → Update numbers
```

## 🎨 Theme Colors in Action

### Primary Actions
- Add button: Purple gradient
- Edit button: Blue background
- Hover effects: Lighter purple

### Status Colors
- Success toast: Green
- Error toast: Red
- Info toast: Blue
- Warning toast: Yellow

### Task States
- Uncompleted: White text
- Completed: Gray text + strikethrough
- Hover: Slight glow effect

---

**Tip**: Open browser DevTools (F12) to see console messages and network requests!
